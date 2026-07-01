"use client";

import { useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TourSearch } from "@/components/tours/TourSearch";
import { TourCard } from "@/components/tours/TourCard";
import { TourSidebar } from "@/components/tours/TourSidebar";
import { toursData } from "@/data/tours";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ToursPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    )
    .fromTo(
      breadcrumbRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(
      searchRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    // Stagger cards on scroll
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow pt-24 pb-24">
        {/* Modern Immersive Hero Banner */}
        <div 
          ref={heroRef}
          className="relative h-[40vh] min-h-[350px] w-full rounded-b-[60px] md:rounded-b-[100px] overflow-hidden flex flex-col items-center justify-center -mt-24 pt-24 z-0"
        >
          {/* Background Image & Overlays */}
          <img 
            src="https://images.unsplash.com/photo-1596423735880-5f2a689b903e?auto=format&fit=crop&q=80&w=2000" 
            alt="Assam Wildlife" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
          
          {/* Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/20 blur-[100px] rounded-full z-10 pointer-events-none" />

          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <h1 ref={titleRef} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight mb-6 text-balance">
              Guwahati Tour Packages
            </h1>
            
            <div ref={breadcrumbRef} className="text-white/80 text-sm md:text-base font-medium flex items-center justify-center gap-3 backdrop-blur-md bg-black/20 py-2 px-6 rounded-full inline-flex border border-white/10">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-primary">›</span>
              <Link href="/tours" className="hover:text-primary transition-colors">Tours</Link>
              <span className="text-primary">›</span>
              <span className="text-white">Guwahati Packages</span>
            </div>
          </div>
        </div>

        {/* Floating Search Bar */}
        <div ref={searchRef} className="relative z-30 -mt-10 px-4">
          <TourSearch />
        </div>

        {/* Main Content Area */}
        <div className="container mx-auto px-4 max-w-7xl mt-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tour List */}
            <div className="w-full lg:w-2/3" ref={cardsRef}>
              {toursData.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <TourSidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
