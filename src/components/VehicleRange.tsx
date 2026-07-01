"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: "CARS", type: "cars", category: "all", img: "/Audi-s5.png" },
  { name: "BIKES", type: "bikes", category: "all", img: "/yamaha-r15.webp" },
  { name: "SCOOTERS", type: "bikes", category: "scooters", img: "/yamaha-ray-zr_1.webp" },
];

export function VehicleRange() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
          {categories.map((cat, idx) => (
            <Link 
              href={`/gallery?type=${cat.type === 'bikes' && cat.category === 'scooters' ? 'scooters' : cat.type}`}
              key={idx} 
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-lg block"
            >
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute top-8 left-8">
                <h3 className="font-heading text-3xl font-bold text-black uppercase tracking-wider">
                  {cat.name}
                </h3>
                <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center mt-4 group-hover:bg-primary group-hover:border-primary transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
