import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517616641215-0211116260a9?auto=format&fit=crop&q=80&w=2000" 
          alt="Empty misty road" 
          className="w-full h-full object-cover opacity-30 grayscale"
          loading="lazy"
          fetchPriority="low"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 border border-destructive/20 mb-8 backdrop-blur-md">
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </div>
        
        <h1 className="font-heading text-8xl md:text-[150px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-4 select-none">
          404
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6">
          Lost your way?
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
          It looks like you've taken a wrong turn. The page or vehicle you're looking for has been moved, deleted, or never existed in the first place.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg" className="rounded-full px-8 h-14 bg-primary text-primary-foreground font-bold hover:bg-primary/90 text-base group shadow-xl shadow-primary/20">
              Return Home
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/#rentals">
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base border-white/20 hover:bg-white/10 backdrop-blur-md">
              Browse Vehicles
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />
    </main>
  );
}
