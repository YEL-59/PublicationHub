"use client";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Message } from "@/types/chat";
import { ICurrentUser } from "@/types/auth/auth";

interface MessageItemProps {
  msg: Message;
  currentUser: ICurrentUser | null;
}

const MessageItem = ({ msg, currentUser }: MessageItemProps) => {
  const isMe = msg.user_id === currentUser?.id;
  const time = format(new Date(msg.created_at), "h:mm a");

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} items-end gap-3`}>
      {!isMe && (
        <div className="w-10 h-10 rounded-full bg-[#1F2937] border border-white/5 overflow-hidden shrink-0 relative">
          {msg.user?.avatar ? (
            <Image src={msg.user.avatar} alt={msg.user.name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
              {msg.user?.name?.charAt(0) || "U"}
            </div>
          )}
        </div>
      )}
      <div className={`flex flex-col gap-1.5 max-w-[70%]`}>
        {!isMe && (
          <p className="text-[11px] font-bold text-gray-400 pl-1">
            {msg.user?.name} <span className="text-gray-600 font-normal ml-2">{time}</span>
          </p>
        )}
        <div
          className={`px-6 py-4 text-sm font-medium leading-relaxed ${isMe
              ? "bg-blue-600 text-white rounded-3xl rounded-tr-none shadow-lg shadow-blue-500/10"
              : "bg-[#1F2937] text-gray-200 rounded-3xl rounded-tl-none border border-white/5 shadow-inner"
            }`}
        >
          {msg.message}
        </div>
        {isMe && <p className="text-[11px] font-medium text-gray-500 text-right pr-1">{time}</p>}
      </div>
      {isMe && (
        <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/20 overflow-hidden shrink-0 relative">
          {currentUser?.avatar ? (
            <Image src={currentUser.avatar} alt="Me" fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-blue-400 text-xs">Me</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MessageItem;

