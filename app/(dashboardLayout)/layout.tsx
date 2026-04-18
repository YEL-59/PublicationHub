"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, LogOut, User, ChevronDown } from "lucide-react";
import navLogo from "@/assets/images/nav-logo.png";
import { getCurrentUser, logoutService } from "@/services/auth";
import { ICurrentUser } from "@/types/auth/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import SmoothScroll from "@/components/SmoothScroll";
import { motion, AnimatePresence } from "framer-motion";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<ICurrentUser | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        // router.push("/login");
      }
      setUser(currentUser);
    };
    fetchUser();
  }, [router]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logoutService();
      router.push("/login");
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#0A0C0F] text-white">
        {/* Dashboard Header */}
        <header className="sticky top-0 z-[50] w-full bg-[#0A0C0F]/80 backdrop-blur-md border-b border-white/5 py-4 px-4 md:px-8 lg:px-12">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-40 h-10">
                <Image
                  src={navLogo}
                  alt="PublicationHub Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-white transition-colors relative">
                <Bell size={22} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-[10px] flex items-center justify-center text-white border-2 border-[#0A0C0F]">
                  2
                </span>
              </button>

              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 pl-6 border-l border-white/10 hover:opacity-80 transition-all focus:outline-none group"
                >
                  <div className="flex flex-col items-end hidden sm:flex">
                    <span className="text-sm font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors">
                      {user?.name || "Dr. Sarah Smith"}
                    </span>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                      {user?.role || "Research Mentor"}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white/10 group-hover:border-blue-500/50 transition-all overflow-hidden relative bg-[#1F2937]">
                     {user?.avatar ? (
                        <Image src={user.avatar} alt="Avatar" fill className="object-cover" />
                     ) : (
                        <User size={24} className="absolute inset-0 m-auto text-gray-400" />
                     )}
                  </div>
                </button>

                {/* Profile Dropdown */}
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-56 bg-[#111827] border border-white/10 rounded-2xl shadow-2xl py-3 z-[100] overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-white/5 mb-2">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Account</p>
                        <p className="text-sm font-bold text-white truncate">{user?.email || "sarah@research.edu"}</p>
                      </div>
                      
                      <Link 
                        href="/mentor-dashboard/profile"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <User size={18} className="text-blue-400" />
                        <span className="text-sm font-medium">Profile Settings</span>
                      </Link>
                      
                      <div className="h-px bg-white/5 my-2" />

                      <button 
                        onClick={() => {
                          setIsProfileOpen(false);
                          handleLogout();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-colors"
                      >
                        <LogOut size={18} />
                        <span className="text-sm font-bold">Sign Out</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-[calc(100-72px)] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(67,56,202,0.05),transparent_40%)]">
          {children}
        </main>
      </div>
    </SmoothScroll>
  );
};

export default DashboardLayout;
