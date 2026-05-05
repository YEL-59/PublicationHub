"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { getChats, getChatMessages, sendMessage } from "@/services/mentor";
import { getCurrentUser, getToken } from "@/services/auth";
import { Chat, Message } from "@/types/chat";
import { ICurrentUser } from "@/types/auth/auth";
import initEcho from "@/lib/echo";

// Components
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

const ConversationPage = () => {
  const [conversations, setConversations] = useState<Chat[]>([]);
  const [activeConv, setActiveConv] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState("");
  const [currentUser, setCurrentUser] = useState<ICurrentUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const echoRef = useRef<any>(null);
  const activeConvRef = useRef<Chat | null>(null);

  // Keep ref in sync for Echo callback
  useEffect(() => {
    activeConvRef.current = activeConv;
  }, [activeConv]);

  // Initialize Data
  useEffect(() => {
    const init = async () => {
      try {
        const [chatsData, userData, token] = await Promise.all([
          getChats(),
          getCurrentUser(),
          getToken()
        ]);

        if (chatsData.status) {
          setConversations(chatsData.data);
          if (chatsData.data.length > 0) {
            setActiveConv(chatsData.data[0]);
          }
        }
        setCurrentUser(userData);

        if (token) {
          echoRef.current = initEcho(token);
        }
      } catch (error) {
        console.error("Failed to initialize chat:", error);
      } finally {
        setLoading(false);
      }
    };
    init();

    return () => {
      if (echoRef.current) {
        // Cleanup all listeners if needed
      }
    };
  }, []);

  // Listen to ALL conversations for real-time updates in the list (WebSockets)
  useEffect(() => {
    if (!echoRef.current || conversations.length === 0) return;

    conversations.forEach(conv => {
      echoRef.current.private(`opportunity_chat.${conv.id}`)
        .listen('.opportunity.chat', (e: any) => {
          console.log(`Socket message in chat ${conv.id}:`, e);
          const newMessage = e.data;

          if (!newMessage) return;

          // If this message is for the ACTIVE conversation, add it to the messages list
          if (activeConvRef.current?.id === conv.id) {
            setMessages(prev => {
              const exists = prev.some(m => m.id === newMessage.id);
              if (exists) return prev;
              return [...prev, newMessage];
            });
          }
        });
    });

    return () => {
      conversations.forEach(conv => {
        echoRef.current.leave(`opportunity_chat.${conv.id}`);
      });
    };
  }, [conversations.length, !!echoRef.current]);

  // Polling mechanism as requested (Fallback for real-time)
  useEffect(() => {
    if (!activeConv) return;

    const pollInterval = setInterval(async () => {
      try {
        const data = await getChatMessages(activeConv.id);
        if (data.status) {
          const fetchedMessages = data.data.messages.data.reverse();

          // Compare and update if there are new messages
          setMessages(prev => {
            if (prev.length === fetchedMessages.length) return prev;

            // Filter out messages we already have (to avoid duplicates with Echo)
            const existingIds = new Set(prev.map(m => m.id));
            const newMessages = fetchedMessages.filter(m => !existingIds.has(m.id));

            if (newMessages.length === 0) return prev;
            return [...prev, ...newMessages];
          });
        }
      } catch (error) {
        console.error("Polling error:", error);
      }
    }, 5000); // Polling every 5 seconds (adjustable)

    return () => clearInterval(pollInterval);
  }, [activeConv?.id]);

  // Initial Fetch messages when activeConv changes
  useEffect(() => {
    if (!activeConv) return;

    const fetchMessages = async () => {
      setMessages([]); // Clear current messages while loading new ones
      try {
        const data = await getChatMessages(activeConv.id);
        if (data.status) {
          setMessages(data.data.messages.data.reverse());
        }
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [activeConv?.id]);

  const handleSendMessage = useCallback(async () => {
    if (!messageInput.trim() || !activeConv || sending) return;

    const text = messageInput;
    setMessageInput("");
    setSending(true);

    try {
      const res = await sendMessage(activeConv.id, text);
      if (res.status) {
        setMessages(prev => {
          const exists = prev.some(m => m.id === res.data.id);
          if (exists) return prev;
          return [...prev, res.data];
        });
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessageInput(text);
    } finally {
      setSending(false);
    }
  }, [messageInput, activeConv, sending]);

  if (loading) {
    return (
      <div className="h-[calc(100vh-120px)] flex flex-col items-center justify-center bg-[#0B0F1A]">
        <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
        <p className="text-gray-400 font-medium">Loading your conversations...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 h-[calc(100vh-100px)] flex flex-col overflow-hidden">
      <div className="flex items-center gap-4 mb-4 shrink-0">
        <Link href="/mentor-dashboard" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>
      </div>

      <h1 className="text-2xl font-extrabold text-white mb-6 shrink-0">Conversation</h1>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <div className="flex-1 flex gap-6 overflow-hidden h-full min-h-0">
        <ChatList
          conversations={conversations}
          activeConv={activeConv}
          setActiveConv={setActiveConv}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <ChatWindow
          key={activeConv?.id || "empty"}
          activeConv={activeConv}
          messages={messages}
          currentUser={currentUser}
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          onSendMessage={handleSendMessage}
          sending={sending}
        />
      </div>
    </div>
  );
};

export default ConversationPage;
