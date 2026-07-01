"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [activeSection, setActiveSection] = useState("home");

  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: targetId, ease: "power3.inOut" });
      // Update the URL without reloading the page
      window.history.pushState(null, "", targetId);
    }
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

      if (window.location.pathname === "/") {
        const sections = ["contact", "rentals", "about", "home"];
        let current = "home";
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              current = section;
              break;
            }
          }
        }
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleScrollEvent);
    handleScrollEvent(); // trigger once on mount
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
            href="/#home"
            onClick={(e) => handleScroll(e, "#home")}
            className={`text-sm font-medium transition-colors ${
              pathname === "/" && activeSection === "home" ? "text-primary" : "hover:text-primary text-gray-800"
            }`}
          >
            Home
          </Link>

          <Link
            href="/#about"
            onClick={(e) => handleScroll(e, "#about")}
            className={`text-sm font-medium transition-colors ${
              pathname === "/" && activeSection === "about" ? "text-primary" : "hover:text-primary text-gray-800"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/#rentals"
            onClick={(e) => handleScroll(e, "#rentals")}
            className={`text-sm font-medium transition-colors ${
              pathname === "/" && activeSection === "rentals" ? "text-primary" : "hover:text-primary text-gray-800"
            }`}
          >
            Rentals
          </Link>

          <div className="relative group">
            <Link
              href="/tours"
              className={`text-sm font-medium transition-colors flex items-center gap-1 h-10 px-4 rounded-md hover:bg-primary group-hover:bg-primary ${
                pathname.startsWith("/tours") ? "bg-primary text-black" : "text-gray-800"
              }`}
            >
              Tours <ChevronDown className="w-4 h-4" />
            </Link>
            
            {/* Main Dropdown Menu */}
            <div className="absolute top-full left-0 w-64 bg-white border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              
              {/* Nested Group: Tours by Destination */}
              <div className="group/dest relative">
                <Link href="/tours" className="block px-4 py-3 text-sm text-gray-800 font-medium hover:bg-primary transition-colors border-b border-border flex justify-between items-center">
                  <span>Tours by Destination</span>
                  <span className="text-xs">›</span>
                </Link>
                
                {/* Sub-menu for Destinations */}
                <div className="absolute top-0 left-full w-48 bg-white border border-border shadow-xl opacity-0 invisible group-hover/dest:opacity-100 group-hover/dest:visible transition-all duration-200 z-50 max-h-[60vh] overflow-y-auto">
                  <Link href="/tours" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors border-b border-border">Guwahati Tours</Link>
                  <Link href="/tours" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors border-b border-border">Kaziranga Tours</Link>
                  <Link href="/tours" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors border-b border-border">Cherrapunji Tours</Link>
                  <Link href="/tours" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors border-b border-border">Shillong Tours</Link>
                  <Link href="/tours" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors border-b border-border">Dawki Tours</Link>
                  <Link href="/tours" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors border-b border-border">Jorhat Tours</Link>
                  <Link href="/tours" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors border-b border-border">Dirang Tours</Link>
                  <Link href="/tours" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors border-b border-border">Bomdila Tours</Link>
                  <Link href="/tours" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors border-b border-border">Sonitpur Tours</Link>
                  <Link href="/tours" className="block px-4 py-2.5 text-sm hover:bg-muted transition-colors">Sivsagar Tours</Link>
                </div>
              </div>

              <Link href="/tours" className="block px-4 py-3 text-sm text-gray-800 font-medium hover:bg-primary transition-colors border-b border-border flex justify-between items-center">
                <span>Tours by Theme</span>
                <span className="text-xs">›</span>
              </Link>
              
              <Link href="/tours" className="block px-4 py-3 text-sm text-gray-800 font-medium hover:bg-primary transition-colors flex justify-between items-center">
                <span>Tours by Activity</span>
                <span className="text-xs">›</span>
              </Link>
            </div>
          </div>

          <Link
            href="/#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className={`text-sm font-medium transition-colors ${
              pathname === "/" && activeSection === "contact" ? "text-primary" : "hover:text-primary text-gray-800"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/80 transition">
            <User size={18} />
          </button>

          <Link href="/auth">
            <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 font-bold">
              Sign in
            </Button>
          </Link>
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
            href="/#home"
            onClick={(e) => handleScroll(e, "#home")}
            className={`text-lg font-medium ${pathname === "/" && activeSection === "home" ? "text-primary" : "text-gray-800"}`}
          >
            Home
          </Link>

          <Link
            href="/#about"
            onClick={(e) => handleScroll(e, "#about")}
            className={`text-lg font-medium ${pathname === "/" && activeSection === "about" ? "text-primary" : "text-gray-800"}`}
          >
            About Us
          </Link>

          <Link
            href="/#rentals"
            onClick={(e) => handleScroll(e, "#rentals")}
            className={`text-lg font-medium ${pathname === "/" && activeSection === "rentals" ? "text-primary" : "text-gray-800"}`}
          >
            Rentals
          </Link>

          <Link
            href="/tours"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-lg font-medium ${pathname.startsWith("/tours") ? "text-primary" : "text-gray-800"}`}
          >
            Tours
          </Link>

          <Link
            href="/#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className={`text-lg font-medium ${pathname === "/" && activeSection === "contact" ? "text-primary" : "text-gray-800"}`}
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