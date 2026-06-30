"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

export function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-center text-foreground mb-16">
          STORIES BEHIND <br /> THE WHEEL
        </h2>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="border-t-2 border-foreground pt-4 mb-4">
                <div className="text-xl font-heading font-bold text-foreground">
                  {post.date.split(" ")[0]} <span className="text-sm font-normal text-muted-foreground">{post.date.split(" ").slice(1).join(" ")}</span>
                </div>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {post.desc}
              </p>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
