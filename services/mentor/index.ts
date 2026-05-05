"use server";

import { cookies } from "next/headers";

/**
 * Submits a new research idea for a mentor
 */
export const submitResearchIdea = async (formData: FormData) => {
    try {
        const token = (await cookies()).get("token")?.value;
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/mentor/research-ideas`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData,
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

/**
 * Fetches paginated research ideas for the mentor
 */
export const getResearchIdeas = async (page: number = 1, per_page: number = 5) => {
    try {
        const token = (await cookies()).get("token")?.value;
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/mentor/research-ideas?page=${page}&per_page=${per_page}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

/**
 * Fetches details of a specific research idea by ID
 */
export const getResearchIdeaById = async (id: string | number) => {
    try {
        const token = (await cookies()).get("token")?.value;
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/mentor/research-ideas/${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

/**
 * Uploads submission proof files for a specific research idea
 */
export const uploadSubmissionProof = async (id: string | number, files: File[]) => {
    try {
        const token = (await cookies()).get("token")?.value;
        const formData = new FormData();
        files.forEach((file) => {
            formData.append("proof_files[]", file);
        });

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/mentor/research-ideas/${id}/submission-proof`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData,
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

/**
 * Fetches all chats for the mentor
 */
export const getChats = async () => {
    try {
        const token = (await cookies()).get("token")?.value;
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/mentor/chats`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

/**
 * Fetches messages for a specific chat
 */
export const getChatMessages = async (chatId: string | number, page: number = 1) => {
    try {
        const token = (await cookies()).get("token")?.value;
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/mentor/chats/${chatId}?page=${page}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

/**
 * Sends a message in a specific chat
 */
export const sendMessage = async (chatId: string | number, message: string, file?: File) => {
    try {
        const token = (await cookies()).get("token")?.value;
        const formData = new FormData();
        formData.append("message", message);
        if (file) {
            formData.append("file", file);
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/mentor/chats/${chatId}/messages`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData,
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
