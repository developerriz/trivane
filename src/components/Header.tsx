"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Menu, X, User, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollToPlugin);

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRentalOpen, setIsRentalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: targetId, ease: "power3.inOut" });
    setIsMobileMenuOpen(false);
  };

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

    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
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
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>

          <Link
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About Us
          </Link>

          <Link
            href="#rentals"
            onClick={(e) => handleScroll(e, "#rentals")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Rentals
          </Link>

          <Link
            href="#tours"
            onClick={(e) => handleScroll(e, "#tours")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Tours
          </Link>

          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
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
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="text-lg font-medium"
          >
            Home
          </Link>

          <Link
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="text-lg font-medium"
          >
            About Us
          </Link>

          <Link
            href="#rentals"
            onClick={(e) => handleScroll(e, "#rentals")}
            className="text-lg font-medium"
          >
            Rentals
          </Link>

          <Link
            href="#tours"
            onClick={(e) => handleScroll(e, "#tours")}
            className="text-lg font-medium"
          >
            Tours
          </Link>

          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
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