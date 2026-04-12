"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Building2, Eye, EyeOff } from "lucide-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      institution: "",
      terms: false,
    },
  });

  const onSubmit = async (data: any) => {
    console.log("Register data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const password = watch("password");
  const gradientBtnStyle = { background: "linear-gradient(135deg, #00D1FF 0%, #6467F2 100%)" };
  const inputBaseClass = "w-full pl-11 pr-4 py-3.5 bg-[#1F242D] border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/30 focus:border-[#00D1FF]/50 transition-all placeholder:text-gray-500 text-white";

  return (
    <div className="bg-[#171A21] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-cyan-500/5">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#00D1FF]/10 text-[#00D1FF] text-xs font-semibold tracking-wide uppercase">
          Join Us
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Create Your <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(to right, #00D1FF, #6467F2)" }}>Account</span>
        </h1>
        <p className="text-gray-400">Join the global research network and start collaborating</p>
      </div>

       {/* Tabs */}
       <div className="flex p-1.5 bg-[#1F242D] rounded-2xl mb-10">
        <Link href="/login" className="flex-1 py-2.5 text-sm font-medium rounded-xl text-gray-400 hover:text-white transition-all text-center">
          Sign In
        </Link>
        <button 
          className="flex-1 py-2.5 text-sm font-bold rounded-xl text-white shadow-lg transition-all"
          style={gradientBtnStyle}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-300 ml-1">Full Name *</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#00D1FF]">
              <User size={18} className="text-gray-500 group-focus-within:text-inherit" />
            </div>
            <input
              {...register("fullName", { required: "Full name is required" })}
              type="text"
              placeholder="Enter your full name"
              className={`${inputBaseClass} ${errors.fullName ? "border-red-500/50" : ""}`}
            />
          </div>
          {errors.fullName && (
            <p className="text-xs font-medium text-red-400 ml-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-300 ml-1">Email Address *</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#00D1FF]">
              <Mail size={18} className="text-gray-500 group-focus-within:text-inherit" />
            </div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="your.email@domain.com"
              className={`${inputBaseClass} ${errors.email ? "border-red-500/50" : ""}`}
            />
          </div>
          {errors.email && (
            <p className="text-xs font-medium text-red-400 ml-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">Password *</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#00D1FF]">
                <Lock size={18} className="text-gray-500 group-focus-within:text-inherit" />
              </div>
              <input
                {...register("password", {
                   required: "Password is required",
                   minLength: { value: 6, message: "Minimum 6 characters" }
                })}
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={`${inputBaseClass} ${errors.password ? "border-red-500/50" : ""}`}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 ml-1">Confirm Password *</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#00D1FF]">
                <Lock size={18} className="text-gray-400 group-focus-within:text-inherit" />
              </div>
              <input
                {...register("confirmPassword", {
                  required: "Please confirm password",
                  validate: (value) => value === password || "Passwords do not match",
                })}
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={`${inputBaseClass} ${errors.confirmPassword ? "border-red-500/50" : ""}`}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start px-1">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-xs font-medium text-gray-500 hover:text-[#00D1FF] flex items-center gap-1.5 transition-colors"
            >
              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              {showPassword ? "Hide passwords" : "Show passwords"}
            </button>
        </div>
        {(errors.password || errors.confirmPassword) && (
            <p className="text-xs font-medium text-red-400 ml-1">
              {errors.password?.message || errors.confirmPassword?.message}
            </p>
        )}

        {/* Institution */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-300 ml-1">Institution/Organization</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#00D1FF]">
              <Building2 size={18} className="text-gray-500 group-focus-within:text-inherit" />
            </div>
            <input
              {...register("institution")}
              type="text"
              placeholder="Enter your institution name"
              className={inputBaseClass}
            />
          </div>
        </div>

        {/* Terms */}
        <div className="px-1">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              {...register("terms", { required: "You must accept the terms" })}
              type="checkbox"
              className="mt-1 w-4 h-4 rounded-md border-white/10 bg-[#1F242D] text-[#00D1FF] focus:ring-[#00D1FF]/20 transition-all"
            />
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
              I agree to the <Link href="/terms" className="text-[#00D1FF] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[#00D1FF] hover:underline">Privacy Policy</Link>
            </span>
          </label>
          {errors.terms && (
            <p className="text-xs font-medium text-red-400 mt-1 ml-7">{errors.terms.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          disabled={isSubmitting}
          type="submit"
          style={gradientBtnStyle}
          className="w-full py-4 text-white font-bold rounded-2xl shadow-[0_0_20px_0_rgba(0,209,255,0.15)] hover:shadow-[0_0_25px_rgba(100,103,242,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>

        {/* Footer */}
        <div className="pt-6 text-center border-t border-white/5">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#00D1FF] font-bold hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Sign In instead
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;