"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const carFleet = [
  { name: "Audi RS5", type: "Sports Car", price: "4,500", img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=600" },
  { name: "BMW X5", type: "Luxury SUV", price: "5,000", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600" },
  { name: "Porsche 911", type: "Supercar", price: "8,500", img: "https://images.unsplash.com/photo-1503376710362-722a2c110994?auto=format&fit=crop&q=80&w=600" },
];

const bikeFleet = [
  { name: "Ducati Panigale", type: "Superbike", price: "2,500", img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=600" },
  { name: "Kawasaki Ninja", type: "Sports Bike", price: "1,800", img: "https://images.unsplash.com/photo-1599819811279-d5064ce897c9?auto=format&fit=crop&q=80&w=600" },
  { name: "Royal Enfield", type: "Cruiser", price: "1,200", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600" },
];

export function Pricing() {
  const [activeTab, setActiveTab] = useState<"cars" | "bikes">("cars");
  const sectionRef = useRef<HTMLElement>(null);
  const fleetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  // Animate cards on tab switch
  useEffect(() => {
    if (fleetRef.current) {
      gsap.fromTo(
        fleetRef.current.children,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }
      );
    }
  }, [activeTab]);

  const activeFleet = activeTab === "cars" ? carFleet : bikeFleet;

  return (
    <section ref={sectionRef} id="pricing" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wide text-foreground">
              Our <span className="text-primary">Fleet</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Choose from our premium selection of vehicles.
            </p>
          </div>
          
          <div className="flex p-1 bg-card rounded-full border border-border">
            <button
              onClick={() => setActiveTab("cars")}
              className={`px-8 py-3 rounded-full font-bold font-heading uppercase text-sm tracking-widest transition-all ${
                activeTab === "cars" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Cars
            </button>
            <button
              onClick={() => setActiveTab("bikes")}
              className={`px-8 py-3 rounded-full font-bold font-heading uppercase text-sm tracking-widest transition-all ${
                activeTab === "bikes" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Bikes
            </button>
          </div>
        </div>

        <div ref={fleetRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeFleet.map((vehicle, idx) => (
            <div key={idx} className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={vehicle.img}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-foreground">
                  {vehicle.type}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading mb-2 text-foreground">{vehicle.name}</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-3xl font-bold text-primary">₹{vehicle.price}</span>
                  <span className="text-muted-foreground mb-1">/ day</span>
                </div>
                <Button className="w-full rounded-full font-bold font-heading uppercase tracking-widest">
                  Rent Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
