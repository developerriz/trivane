"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useVehicle } from "@/context/VehicleContext";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    date: "25 OCT 2023",
    title: "Mastering the art of cornering",
    desc: "Discover professional techniques for handling tight curves and winding roads.",
    img: "/thar-scenic.png",
  },
  {
    date: "04 NOV 2023",
    title: "Must-have tools for road trips",
    desc: "A comprehensive guide to the essential tools you should always carry.",
    img: "/mpv-scenic.png",
  },
  {
    date: "19 DEC 2023",
    title: "Single vehicles to entire fleets",
    desc: "How our rental services scale from individual needs to corporate solutions.",
    img: "/sedan-scenic.png",
  },
];

const bikePosts = [
  {
    date: "25 OCT 2023",
    title: "Mastering the art of leaning",
    desc: "Discover professional techniques for handling tight corners on two wheels.",
    img: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800",
  },
  {
    date: "04 NOV 2023",
    title: "Must-have gear for road trips",
    desc: "A comprehensive guide to the essential safety gear you should always wear.",
    img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800",
  },
  {
    date: "19 DEC 2023",
    title: "Single bikes to touring groups",
    desc: "How our rental services scale from individual needs to group expeditions.",
    img: "https://images.unsplash.com/photo-1571501538392-4cb65902e88a?auto=format&fit=crop&q=80&w=800",
  },
];

export function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { activeVehicle } = useVehicle();
  const activePosts = activeVehicle === "cars" ? posts : bikePosts;

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="tours" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-center text-foreground mb-16">
          STORIES BEHIND <br /> THE WHEEL
        </h2>
        
        <div ref={cardsRef} className="flex flex-col gap-16 md:gap-24 relative pb-20 w-full max-w-5xl mx-auto">
          {activePosts.map((post, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer sticky bg-card border border-border shadow-2xl rounded-[2rem] p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center will-change-transform transition-all duration-300 hover:shadow-primary/20"
              style={{ 
                top: `calc(8rem + ${idx * 2.5}rem)`,
                zIndex: idx
              }}
            >
              <div className="flex-1 space-y-6 w-full">
                <div className="border-t-2 border-foreground pt-4 inline-block w-full">
                  <div className="text-xl font-heading font-bold text-foreground">
                    {post.date.split(" ")[0]} <span className="text-sm font-normal text-muted-foreground">{post.date.split(" ").slice(1).join(" ")}</span>
                  </div>
                </div>
                <h3 className="font-bold text-3xl md:text-4xl text-foreground leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {post.desc}
                </p>
                <button className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read Story <span>&rarr;</span>
                </button>
              </div>
              <div className="w-full md:w-[45%] aspect-[4/3] md:aspect-square overflow-hidden rounded-2xl shrink-0 shadow-lg">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#111111] text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black/80 transition-colors">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
