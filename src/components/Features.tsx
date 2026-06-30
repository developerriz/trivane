"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Clock, Map, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: "Secure & Insured",
    description: "Every vehicle comes with comprehensive insurance and 24/7 roadside assistance.",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Rent for a day, a week, or a month. Our flexible plans adapt to your schedule.",
  },
  {
    icon: Map,
    title: "Unlimited Kilometers",
    description: "Drive as far as your heart desires with our unlimited mileage packages.",
  },
  {
    icon: Star,
    title: "Premium Fleet",
    description: "From sport bikes to luxury SUVs, all our vehicles are immaculately maintained.",
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-card relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wide text-foreground">
            Why Choose <span className="text-primary">Trivane</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Experience the difference of a premium rental service built around your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="bg-background rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
