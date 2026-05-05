"use client";
import React from "react";
import { Paperclip, Send, Loader2 } from "lucide-react";

interface ChatInputProps {
  messageInput: string;
  setMessageInput: (val: string) => void;
  onSendMessage: () => void;
  sending: boolean;
}

const ChatInput = ({ messageInput, setMessageInput, onSendMessage, sending }: ChatInputProps) => {
  return (
    <div className="p-6 bg-[#111827]/80 backdrop-blur-md">
      <div className="relative flex items-center gap-3">
        <div className="flex-1 relative">
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type a message..."
            disabled={sending}
            className="w-full bg-[#1F2937] border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner disabled:opacity-50"
            onKeyPress={(e) => e.key === "Enter" && onSendMessage()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
            onClick={onSendMessage}
            disabled={sending || !messageInput.trim()}
          >
            {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
