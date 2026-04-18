"use client";
import React, { useState } from "react";
import { ArrowLeft, Search, Paperclip, Send, MoreVertical, UserGroupIcon, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const conversations = [
  { id: 1, title: "Cancer Genomics Study", members: 8, lastMessage: "I need more information about", time: "9:30 AM", unread: 2 },
  { id: 2, title: "Drug Development Study", members: 5, lastMessage: "The protocol looks good.", time: "Yesterday", unread: 0 },
  { id: 3, title: "COVID-19 Vaccine Study", members: 12, lastMessage: "Sure! I'd be happy to discuss.", time: "Yesterday", unread: 0, active: true },
  { id: 4, title: "Gene Therapy Study", members: 6, lastMessage: "When is the next meeting?", time: "Wednesday", unread: 0 },
  { id: 5, title: "Genetic Sequencing", members: 4, lastMessage: "Jenny, have you reviewed", time: "Monday", unread: 1 },
];

const messages = [
  { id: 1, sender: "Jhon Smith", role: "Mentor", text: "Hi Jenny! I wanted to discuss the telemedicine project details with you.", time: "9:30 AM", isMe: false },
  { id: 2, sender: "Me", role: "Researcher", text: "Sure! I'd be happy to discuss. What specific aspects are you interested in?", time: "9:32 AM", isMe: true },
  { id: 3, sender: "Jhon Smith", role: "Mentor", text: "Hi Jenny! I wanted to discuss the telemedicine project details with you.", time: "9:33 AM", isMe: false },
  { id: 4, sender: "Dr. Sarah Lee", role: "Coordinator", text: "Jenny, have you reviewed the orthopedic study results yet?", time: "9:40 AM", isMe: false },
  { id: 5, sender: "Me", role: "Researcher", text: "Sure! I'd be happy to discuss. What specific aspects are you interested in?", time: "9:50 AM", isMe: true },
];

const ConversationPage = () => {
  const [activeConv, setActiveConv] = useState(conversations[2]);
  const [message, setMessage] = useState("");

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 h-[calc(100vh-120px)] flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/mentor-dashboard" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>
      </div>

      <h1 className="text-3xl font-extrabold text-white mb-8">Conversation</h1>

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Left Sidebar - Chat List */}
        <div className="w-80 flex flex-col gap-4 overflow-hidden">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search messages..."
              className="w-full bg-[#111827] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
            />
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-2 pr-2 custom-scrollbar">
            {conversations.map((conv) => (
              <motion.button
                key={conv.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveConv(conv)}
                className={`flex items-center gap-3 p-4 rounded-2xl transition-all border ${
                  activeConv.id === conv.id 
                    ? "bg-blue-600/10 border-blue-500/30 shadow-lg shadow-blue-500/5" 
                    : "bg-[#111827] border-white/5 hover:border-white/10"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#1F2937] flex items-center justify-center text-blue-400 shrink-0 border border-white/5">
                   <Users size={24} />
                </div>
                <div className="flex-1 text-left overflow-hidden">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="text-sm font-bold text-white truncate">{conv.title}</h3>
                    <span className="text-[10px] text-gray-500 font-medium">{conv.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-blue-500 text-[10px] font-bold flex items-center justify-center text-white">
                    {conv.unread}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Area - Chat Window */}
        <div className="flex-1 bg-[#111827] border border-white/5 rounded-3xl flex flex-col overflow-hidden shadow-2xl relative">
          {/* Chat Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#111827]/80 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1F2937] text-blue-400 flex items-center justify-center border border-white/5">
                <Users size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white leading-tight">{activeConv.title}</h2>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span>{activeConv.members} members</span>
                </div>
              </div>
            </div>
            <button className="text-gray-500 hover:text-white transition-colors">
              <MoreVertical size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8 custom-scrollbar">
            {messages.map((msg, index) => (
              <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"} items-end gap-3`}>
                {!msg.isMe && (
                   <div className="w-10 h-10 rounded-full bg-[#1F2937] border border-white/5 overflow-hidden shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">IMG</div>
                   </div>
                )}
                <div className={`flex flex-col gap-1.5 max-w-[70%]`}>
                  {!msg.isMe && (
                    <p className="text-[11px] font-bold text-gray-400 pl-1">{msg.sender} <span className="text-gray-600 font-normal ml-2">{msg.time}</span></p>
                  )}
                  <div className={`px-6 py-4 text-sm font-medium leading-relaxed ${
                    msg.isMe 
                      ? "bg-blue-600 text-white rounded-3xl rounded-tr-none shadow-lg shadow-blue-500/10" 
                      : "bg-[#1F2937] text-gray-200 rounded-3xl rounded-tl-none border border-white/5 shadow-inner"
                  }`}>
                    {msg.text}
                  </div>
                  {msg.isMe && (
                    <p className="text-[11px] font-medium text-gray-500 text-right pr-1">{msg.time}</p>
                  )}
                </div>
                {msg.isMe && (
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/20 overflow-hidden shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-blue-400 text-xs">Me</div>
                   </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-[#111827]/80 backdrop-blur-md">
            <div className="relative flex items-center gap-3">
              <div className="flex-1 relative">
                <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                  <Paperclip size={20} />
                </button>
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-[#1F2937] border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner"
                  onKeyPress={(e) => e.key === 'Enter' && setMessage("")}
                />
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
                  onClick={() => setMessage("")}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative background glow */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
