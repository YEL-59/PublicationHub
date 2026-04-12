
"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, User, LogOut, ChevronDown, Settings } from "lucide-react";
import navLogo from "@/assets/images/nav-logo.png";
import CTAButton from "@/components/CTAButton";
import { getCurrentUser, logoutService } from "@/services/auth";
import { ICurrentUser } from "@/types/auth/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<ICurrentUser | null>(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
        };
        fetchUser();
    }, []);

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
            setUser(null);
            setIsProfileOpen(false);
            toast.success("Logged out successfully");
            router.push("/login"); // Updated to your login route
        } catch (error: any) {
            toast.error("Logout failed");
        }
    };

    const navLinks = [
        { name: "Home", href: "/", active: true },
        { name: "Research Opportunities", href: "/researchopportunities" },
        { name: "Services", href: "/service" },
        { name: "Meta Academy", href: "/meta" },
        { name: "Partnership", href: "/partnership" },
        { name: "About", href: "/about" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-[#171A21] border-b border-white/10 shadow-[0_10px_15px_-3px_rgba(0,230,255,0.05),0_4px_6px_-4px_rgba(0,230,255,0.05)] backdrop-blur-[12px] py-5 px-4 md:px-6 lg:px-12">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
                    <div className="relative w-44 h-10 md:w-52 md:h-12">
                        <Image
                            src={navLogo}
                            alt="PublicationHub Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-9">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[15px] font-medium transition-colors duration-200 hover:text-[#00D1FF] ${link.active ? "text-[#00D1FF]" : "text-[#94A3B8]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Section: Search, User Profile or Sign In, CTA */}
                <div className="hidden lg:flex items-center gap-7">
                    {/* <button className="text-white hover:text-[#00D1FF] transition-colors p-1.5 focus:outline-none">
                        <Search size={22} strokeWidth={2.5} />
                    </button> */}

                    {user ? (
                        <div className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-2 group focus:outline-none"
                            >
                                <div className="w-10 h-10 rounded-full border-2 border-[#00D1FF]/30 group-hover:border-[#00D1FF] transition-all overflow-hidden relative bg-[#1F242D]">
                                    {user.avatar ? (
                                        <Image src={user.avatar} alt={user.name} fill className="object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-[#00D1FF]">
                                            <User size={20} />
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="text-white text-sm font-bold group-hover:text-[#00D1FF] transition-colors line-clamp-1 max-w-[100px]">
                                        {user.name}
                                    </span>
                                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                                        <span className="capitalize">{user.role}</span>
                                        <ChevronDown size={10} className={`transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`} />
                                    </div>
                                </div>
                            </button>

                            {/* Profile Dropdown */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-3 w-56 bg-[#1F242D] border border-white/10 rounded-2xl shadow-2xl py-3 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="px-4 py-3 border-b border-white/5 mb-2">
                                        <p className="text-xs text-gray-400 mb-0.5">Signed in as</p>
                                        <p className="text-sm font-bold text-white truncate">{user.email}</p>
                                    </div>
                                    
                                    <Link href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                                        <User size={18} />
                                        <span className="text-sm font-medium">My Profile</span>
                                    </Link>
                                    
                                    <Link href="/settings" className="flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                                        <Settings size={18} />
                                        <span className="text-sm font-medium">Settings</span>
                                    </Link>

                                    <div className="h-px bg-white/5 my-2" />

                                    <button 
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-colors"
                                    >
                                        <LogOut size={18} />
                                        <span className="text-sm font-bold">Sign Out</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="text-white text-[15px] font-medium hover:text-[#00D1FF] transition-colors"
                        >
                            Sign In
                        </Link>
                    )}

                    <CTAButton>
                        Join as a mentor
                    </CTAButton>
                </div>

                {/* Tablet/Mobile Toggle */}
                <div className="flex lg:hidden items-center gap-3">
                    <button className="text-white p-2">
                        <Search size={24} />
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                    >
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-[#171A21]/95 backdrop-blur-[12px] border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-1 p-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg font-medium transition-colors ${link.active ? "text-[#00D1FF]" : "text-gray-400"
                                } hover:text-white py-3 px-4 rounded-lg hover:bg-white/5`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-5">
                        {user ? (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 px-4">
                                     <div className="w-12 h-12 rounded-full border border-[#00D1FF]/30 overflow-hidden relative">
                                        {user.avatar ? (
                                            <Image src={user.avatar} alt={user.name} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-[#1F242D] flex items-center justify-center text-[#00D1FF]">
                                                <User size={24} />
                                            </div>
                                        )}
                                     </div>
                                     <div>
                                        <p className="text-white font-bold">{user.name}</p>
                                        <p className="text-xs text-gray-400">{user.email}</p>
                                     </div>
                                </div>
                                <Link 
                                    href="/profile" 
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 text-lg font-medium px-4 flex items-center gap-3"
                                >
                                    <User size={20} /> My Profile
                                </Link>
                                <button 
                                    onClick={handleLogout}
                                    className="text-red-400 text-lg font-bold px-4 flex items-center gap-3 text-left"
                                >
                                    <LogOut size={20} /> Sign Out
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="text-white text-lg font-medium px-4 hover:text-[#00D1FF]"
                            >
                                Sign In
                            </Link>
                        )}
                        <CTAButton className="w-full py-4">
                            Join as a mentor
                        </CTAButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;