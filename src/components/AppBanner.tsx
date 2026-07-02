"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVehicle } from "@/context/VehicleContext";
import CurvedLoop from "./CurvedLoop";

gsap.registerPlugin(ScrollTrigger);

export function AppBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const { activeVehicle } = useVehicle();

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        logosRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: logosRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        bannerRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Logos Row */}
        <div ref={logosRef} className="mb-54 w-full h-[120px] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          <CurvedLoop
            marqueeText={
              activeVehicle === "cars" 
                ? "LAND ROVER  ✦  AUDI  ✦  FERRARI  ✦  BMW  ✦  HONDA  ✦  " 
                : "YAMAHA  ✦  DUCATI  ✦  KTM  ✦  HONDA  ✦  SUZUKI  ✦  "
            }
            speed={2.5}
            curveAmount={0}
            className="font-heading font-bold tracking-widest fill-foreground"
          />
        </div>

        {/* Orange Banner */}
        <div ref={bannerRef} className="bg-primary rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
          {/* Decorative puzzle piece / star shape */}
          <div className="absolute top-10 right-1/3 text-black/10">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>

          <div className="z-10 text-center md:text-left md:w-1/2">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground leading-[1.1]">
              PREMIUM {activeVehicle === "cars" ? "CAR" : "BIKE"} <br /> RENTAL
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/80 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.79 2.1-.06 3.65.98 4.54 2.53-3.87 2.18-3.2 7.74.8 9.38-.85 1.77-1.99 3.5-3.5 5.05m-3.41-14.73c.69-2.04-.6-4.22-2.73-4.55-.91 2.25 1.05 4.3 2.73 4.55"/></svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase">Download on the</div>
                  <div className="font-bold text-sm leading-tight">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/80 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase">GET IT ON</div>
                  <div className="font-bold text-sm leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="z-10 mt-12 md:mt-0 md:-my-24 relative h-[400px] w-full md:w-1/2 flex justify-center items-end">
            <img 
              src="/phone.png" 
              alt="App mockup"
              className="w-[480px] h-[650px] object-contain rounded-t-[40px] absolute top-5"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
