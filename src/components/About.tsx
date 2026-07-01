"use client";

import { useEffect, useRef } from "react";
import { useVehicle } from "@/context/VehicleContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const { activeVehicle } = useVehicle();

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        leftColRef.current,
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
        rightColRef.current,
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

      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Column */}
          <div ref={leftColRef}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
              ABOUT <br /> TRIVANE
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
              <p>
                Trivane is the leading marketplace for {activeVehicle === 'cars' ? 'Self Drive Car Rental' : 'Bike Rent'} platform across North East India. Trivane offer well-maintained vehicles for comfortable travel and immersive tours that showcase the region's natural beauty and rich heritage. Guests in the Trivane community enjoy a diverse, affordable selection of {activeVehicle === 'cars' ? 'Cars' : 'Bikes'} to unlock memorable driving experiences with friends and family. Founded in 2018 and headquartered in Guwahati(Assam), operates all over North East india.
              </p>
              <p>
                Welcome to the vibrant city of Guwahati, where exploring every nook and cranny is now a breeze with {activeVehicle === 'cars' ? 'Self Drive Car Rental' : 'Bike Rent'}. Whether you're a local looking for a convenient ride or a traveler eager to explore the beauty of Assam at your own pace, {activeVehicle === 'cars' ? 'Self Drive Car Rental' : 'Bike Rent'} in Guwahati offer the perfect solution. Skip the hassles of traditional rental services and experience the freedom of the road on your terms.
              </p>
              <p>
                If you're looking for {activeVehicle === 'cars' ? 'Self Drive Car Rental' : 'Bike Rent'} to rent near you, Trivane is your perfect solution! Pick your date & time of travel, select the vehicle of your choice from our wide range of {activeVehicle === 'cars' ? 'Cars' : 'Bikes'}.
              </p>
            </div>
            <button className="mt-8 bg-[#111111] text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black/80 transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Image Column */}
          <div ref={rightColRef} className="relative">
            <div className="absolute -left-10 top-20 text-[#F5A524] z-10">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <img 
              src={activeVehicle === "cars" ? "/thar-scenic.png" : "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800"} 
              alt={activeVehicle === "cars" ? "Indian Scenic SUV" : "Scenic Bike"} 
              className="w-full rounded-[40px] shadow-2xl object-cover h-[600px] relative z-0"
            />
          </div>
        </div>

        {/* Info Row */}
        <div className="mt-32">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8 text-center lg:text-left">
            Trivane Leadership & Services
          </p>
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Saurav Sharma
              </div>
              <p className="text-sm font-bold uppercase text-muted-foreground mt-2">
                Name of CEO
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Founded 2018
              </div>
              <p className="text-sm font-bold uppercase text-muted-foreground mt-2">
                Guwahati, Assam
              </p>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-heading font-bold text-foreground leading-snug">
                {activeVehicle === 'cars' ? 'Tour Operators, Self Drive Car' : 'Tour Operators, Bike Rental, Scooty Rental'}
              </div>
              <p className="text-sm font-bold uppercase text-muted-foreground mt-2">
                Services We Offer
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
