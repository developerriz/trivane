"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVehicle } from "@/context/VehicleContext";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: "CARS", img: "/sedan-scenic.png" },
  { name: "SUVS", img: "/thar-scenic.png" },
  { name: "VANS", img: "/mpv-scenic.png" },
  { name: "ELECTRIC", img: "/hero-car.png" },
];

const bikeCategories = [
  { name: "CRUISERS", img: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800" },
  { name: "SPORTS", img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800" },
  { name: "SCOOTERS", img: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800" },
  { name: "ELECTRIC", img: "https://images.unsplash.com/photo-1571501538392-4cb65902e88a?auto=format&fit=crop&q=80&w=800" },
];

export function VehicleRange() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { activeVehicle } = useVehicle();
  const activeCategories = activeVehicle === "cars" ? categories : bikeCategories;

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { scale: 0.9, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="rentals" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-center text-foreground mb-16">
          WIDE RANGE OF <br /> VEHICLES
        </h2>
        
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {activeCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute top-8 left-8">
                <h3 className="font-heading text-3xl font-bold text-white uppercase tracking-wider">
                  {cat.name}
                </h3>
                <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center mt-4 group-hover:bg-primary group-hover:border-primary transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
