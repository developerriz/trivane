"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen w-full flex bg-background">
      {/* Left side - Image / Branding */}
      <div className="hidden lg:flex w-1/2 relative bg-muted overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1600" 
          alt="Premium luxury car" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 flex flex-col p-16 text-white max-w-2xl text-left h-full justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
          <div className="mt-auto">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6">
              Experience <br /> Premium Rides
            </h1>
            <p className="text-lg opacity-90 max-w-lg">
              Join Trivane Rental today and unlock access to the world's most exclusive collection of luxury vehicles and superbikes.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative">
        <div className="w-full max-w-md mx-auto relative z-10">
          
          <div className="lg:hidden mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>

          <div className="text-center lg:text-left mb-10">
            <h2 className="font-heading text-3xl font-bold mb-2">
              {isLogin ? "Welcome back" : "Create an account"}
            </h2>
            <p className="text-muted-foreground">
              {isLogin 
                ? "Enter your details to access your account." 
                : "Sign up to start renting your dream vehicles."}
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full h-12 bg-transparent border border-border/60 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full h-12 bg-transparent border border-border/60 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Password</label>
                {isLogin && (
                  <Link href="/forgot-password" className="text-xs font-medium text-primary hover:underline">
                    Forgot password?
                  </Link>
                )}
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full h-12 bg-transparent border border-border/60 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 mt-2 shadow-lg shadow-primary/20"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </Button>
          </form>

          <div className="mt-8 relative flex items-center justify-center border-t border-border/60">
            <div className="absolute bg-background px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Or continue with
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button type="button" className="h-12 flex items-center justify-center gap-2 border border-border/60 rounded-xl hover:bg-muted/50 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
            <button type="button" className="h-12 flex items-center justify-center gap-2 border border-border/60 rounded-xl hover:bg-muted/50 transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              Facebook
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="font-medium text-primary hover:underline focus:outline-none"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>

        </div>
      </div>
    </main>
  );
}
