"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { Menu, X, User, ChevronDown } from "lucide-react";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRentalOpen, setIsRentalOpen] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Trivane Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>

          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About Us
          </Link>

          {/* Rentals Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium uppercase hover:text-primary transition-colors">
              Rentals
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
              <Link
                href="/rentals/bikes"
                className="block px-5 py-3 hover:bg-primary hover:text-white transition"
              >
                Bike Rentals
              </Link>

              <Link
                href="/rentals/scooters"
                className="block px-5 py-3 hover:bg-primary hover:text-white transition"
              >
                Car Rentals
              </Link>

              <Link
                href="/rentals/scooters"
                className="block px-5 py-3 hover:bg-primary hover:text-white transition"
              >
                Scooter Rentals
              </Link>
            </div>
          </div>

          <Link
            href="#tours"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Tours
          </Link>

          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/80 transition">
            <User size={18} />
          </button>

          <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 font-bold">
            Sign in
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-background border-b border-border p-6 shadow-xl flex flex-col gap-6">

          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium"
          >
            Home
          </Link>

          <Link
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium"
          >
            About Us
          </Link>

          {/* Mobile Rentals Dropdown */}
          <div>
            <button
              onClick={() => setIsRentalOpen(!isRentalOpen)}
              className="flex w-full items-center justify-between text-lg font-medium uppercase"
            >
              Rentals

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  isRentalOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isRentalOpen && (
              <div className="mt-3 ml-4 flex flex-col gap-3">
                <Link
                  href="/rentals/bikes"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base text-muted-foreground hover:text-primary"
                >
                  Bike Rentals
                </Link>

                <Link
                  href="/rentals/scooters"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base text-muted-foreground hover:text-primary"
                >
                  Scooter Rentals
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#tours"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium"
          >
            Tours
          </Link>

          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium"
          >
            Contact Us
          </Link>

          <div className="flex items-center gap-4 pt-4 border-t">
            <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
              <User size={18} />
            </button>

            <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
              Sign in
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}