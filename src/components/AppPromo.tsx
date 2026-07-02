"use client";

import { useEffect, useRef } from "react";
import { useVehicle } from "@/context/VehicleContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AppPromo() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { activeVehicle } = useVehicle();

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div ref={textRef} className="max-w-xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
            FIND {activeVehicle === "cars" ? "CARS" : "BIKES"} IN <br /> YOUR LOCATIONS
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            With our app, you can easily discover the perfect ride right around the corner. We bring premium {activeVehicle === "cars" ? "car" : "bike"} rental services directly to your smartphone. Book, unlock, and drive within minutes.
          </p>
          <button className="mt-8 bg-[#111111] text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black/80 transition-colors">
            Explore
          </button>
        </div>

        <div ref={imageRef} className="relative flex justify-center">
          {/* Mockup background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gray-100 rounded-full -z-10" />
          
          <img 
            src="/phone.png" 
            alt="Mobile App Mockup" 
            className="w-full h-[600px] object-contain drop-shadow-2xl"
          />
          
          {/* Decorative floating elements to simulate app UI */}
          <div className="absolute top-20 -left-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold">Nearby</p>
              <p className="text-sm font-bold">12 {activeVehicle === "cars" ? "Cars" : "Bikes"} Available</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
