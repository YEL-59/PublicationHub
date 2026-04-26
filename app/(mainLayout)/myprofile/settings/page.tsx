"use client";

import React, { useState, useEffect } from "react";
import ProfileSettings from "@/page/myprofile/ProfileSettings";
import { getCurrentUser, getUserInfo } from "@/services/auth";
import { ICurrentUser } from "@/types/auth/auth";
import { Loader2 } from "lucide-react";

export default function MySettingsPage() {
    const [user, setUser] = useState<ICurrentUser | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userRes = await getUserInfo();
            if (userRes?.status) {
                setUser(userRes.data);
            } else {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            }
        };
        fetchUser();
    }, []);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="w-8 h-8 text-[#00D1FF] animate-spin" />
            </div>
        );
    }

    return <ProfileSettings user={user} />;
}
