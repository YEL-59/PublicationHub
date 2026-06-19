"use client";

import React, { useMemo } from "react";
import OpportunityChatPage from "@/page/shared/OpportunityChatPage";
import {
    getResearcherChats,
    getResearcherChatMessages,
    sendResearcherChatMessage,
} from "@/services/researcher";

const ResearcherConversationPage = () => {
    const services = useMemo(
        () => ({
            getChats: async () => {
                const res = await getResearcherChats();
                if (res?.status) {
                    const chats = Array.isArray(res.data) ? res.data : res.data?.data || [];
                    return { status: true, data: chats };
                }
                return { status: false, data: [], message: res?.message };
            },
            getChatMessages: (chatId: string | number, page = 1) =>
                getResearcherChatMessages(chatId, page),
            sendMessage: sendResearcherChatMessage,
        }),
        []
    );

    return (
        <OpportunityChatPage
            backHref="/myprofile"
            backLabel="Back to Profile"
            services={services}
        />
    );
};

export default ResearcherConversationPage;
