"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main className="min-h-screen w-full flex bg-background">
      {/* Left side - Image / Branding */}
      <div className="hidden lg:flex w-1/2 relative bg-muted overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1600" 
          alt="Premium luxury car" 
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale-[20%]"
        />
        <div className="relative z-20 flex flex-col p-16 text-white max-w-2xl text-left h-full justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
          <div className="mt-auto">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
              Account <br /> Recovery
            </h1>
            <p className="text-lg opacity-90 max-w-lg">
              Don't worry, getting back to your premium rides is quick and easy. Follow the steps to regain access.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative">
        <div className="w-full max-w-md mx-auto relative z-10">
          
          <div className="lg:hidden mb-12">
            <Link href="/auth" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Login
            </Link>
          </div>

          <div className="text-center lg:text-left mb-10">
            <h2 className="font-heading text-3xl font-bold mb-2">
              Reset Password
            </h2>
            <p className="text-muted-foreground">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Check your email</h3>
              <p className="text-muted-foreground text-sm">
                We've sent a password reset link to your email address. Please check your inbox (and spam folder) to continue.
              </p>
              <Button 
                variant="outline"
                className="w-full mt-4"
                onClick={() => setIsSubmitted(false)}
              >
                Try another email
              </Button>
            </div>
          ) : (
            <form 
              className="space-y-5" 
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
              }}
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full h-12 bg-transparent border border-border/60 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 mt-2 shadow-lg shadow-primary/20"
              >
                Send Reset Link
              </Button>
            </form>
          )}

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link 
              href="/auth" 
              className="font-medium text-primary hover:underline focus:outline-none"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}
