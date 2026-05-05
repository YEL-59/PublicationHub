"use client";
import React from "react";
import { Users, MoreVertical } from "lucide-react";
import Image from "next/image";
import MessageItem from "./MessageItem";
import ChatInput from "./ChatInput";
import { Chat, Message } from "@/types/chat";
import { ICurrentUser } from "@/types/auth/auth";

interface ChatWindowProps {
  activeConv: Chat | null;
  messages: Message[];
  currentUser: ICurrentUser | null;
  messageInput: string;
  setMessageInput: (val: string) => void;
  onSendMessage: () => void;
  sending: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const ChatWindow = ({
  activeConv,
  messages,
  currentUser,
  messageInput,
  setMessageInput,
  onSendMessage,
  sending,
  messagesEndRef,
}: ChatWindowProps) => {
  if (!activeConv) {
    return (
      <div className="flex-1 bg-[#111827] border border-white/5 rounded-3xl flex flex-col items-center justify-center p-8 text-center shadow-2xl relative">
        <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-500">
          <Users size={40} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Select a conversation</h3>
        <p className="text-gray-400 max-w-xs">Choose a study group from the list on the left to start messaging.</p>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#111827] border border-white/5 rounded-3xl flex flex-col overflow-hidden shadow-2xl relative">
      {/* Chat Header */}
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#111827]/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#1F2937] text-blue-400 flex items-center justify-center border border-white/5 overflow-hidden relative">
            {activeConv.chatable?.thumbnail ? (
              <Image src={activeConv.chatable.thumbnail} alt="" fill className="object-cover" />
            ) : (
              <Users size={20} />
            )}
          </div>
          <div>
            <h2 className="text-lg font-bold text-white leading-tight">{activeConv.chatable?.title}</h2>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <span>{activeConv.users.length} members</span>
            </div>
          </div>
        </div>
        <button className="text-gray-500 hover:text-white transition-colors">
          <MoreVertical size={24} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8 custom-scrollbar">
        {messages.length > 0 ? (
          messages.map((msg) => <MessageItem key={msg.id} msg={msg} currentUser={currentUser} />)
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center opacity-30 select-none">
            <Users size={64} className="mb-4 text-gray-400" />
            <p className="text-gray-400 font-medium">No messages yet. Start the conversation!</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <ChatInput
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        onSendMessage={onSendMessage}
        sending={sending}
      />

      {/* Decorative background glow */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none" />
    </div>
  );
};

export default ChatWindow;
