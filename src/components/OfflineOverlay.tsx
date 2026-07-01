"use client";

import { useState, useEffect } from "react";
import { WifiOff, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OfflineOverlay() {
  const [isOnline, setIsOnline] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isMounted || isOnline) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="relative z-10 container mx-auto px-6 text-center max-w-lg">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted border border-border mb-8 shadow-xl">
          <WifiOff className="w-12 h-12 text-muted-foreground" />
        </div>
        
        <h2 className="font-heading text-4xl font-bold uppercase tracking-wide mb-4">
          Connection Lost
        </h2>
        
        <p className="text-muted-foreground text-lg mb-8">
          It looks like you've lost your internet connection. Please check your network settings and try again.
        </p>
        
        <Button 
          size="lg" 
          onClick={() => window.location.reload()}
          className="rounded-full px-8 h-12 bg-primary text-primary-foreground font-bold hover:bg-primary/90 text-base shadow-lg shadow-primary/20 gap-2"
        >
          <RefreshCcw className="w-5 h-5" />
          Try Again
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />
    </div>
  );
}
