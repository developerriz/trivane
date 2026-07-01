"use client";

import { useEffect, useRef, useState } from "react";
import { useVehicle } from "@/context/VehicleContext";
import gsap from "gsap";
import { Search } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bookingFormRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const { activeVehicle, setActiveVehicle } = useVehicle();
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = () => {
    if (!location || !pickupDate || !returnDate) {
      alert("Please fill in all fields (Location, Pick-up Date, Return Date).");
      return;
    }
    alert(`Searching for ${activeVehicle} in ${location}\nFrom: ${new Date(pickupDate).toLocaleString()}\nTo: ${new Date(returnDate).toLocaleString()}`);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    )
    .fromTo(
      bookingFormRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      "-=0.5"
    );
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-40 pb-20 flex flex-col items-center bg-[#FAF9F6] overflow-hidden"
    >
      {/* Background shape */}
      <div className="absolute top-[40%] left-0 right-0 h-[60%] bg-[#F5A524] rounded-t-[100px] -z-10" />

      <h1
        ref={headingRef}
        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-center tracking-tight text-foreground z-10 leading-[0.9]"
      >
        PREMIUM {activeVehicle === "cars" ? "CAR" : "BIKE"} <br /> RENTAL
      </h1>

      {/* Booking Form */}
      <div ref={bookingFormRef} className="bg-white rounded-2xl shadow-xl p-4 mt-12 flex flex-col md:flex-row gap-4 items-center max-w-4xl w-full mx-6 z-20">
        <div className="flex bg-gray-100 rounded-lg p-1 w-full md:w-auto">
          <button 
            onClick={() => setActiveVehicle("cars")}
            className={`${activeVehicle === "cars" ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-black"} px-6 py-2 rounded-md font-bold text-sm transition-all`}
          >
            Cars
          </button>
          <button 
            onClick={() => setActiveVehicle("bikes")}
            className={`${activeVehicle === "bikes" ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-black"} px-6 py-2 rounded-md font-bold text-sm transition-all`}
          >
            Bikes
          </button>
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row items-center gap-4 w-full">
          <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
            <p className="text-xs font-bold text-gray-500 uppercase">Pick-up Location</p>
            <input 
              type="text" 
              placeholder="City, Airport" 
              className="w-full bg-transparent outline-none font-medium mt-1 text-black placeholder:text-gray-400" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
            <p className="text-xs font-bold text-gray-500 uppercase">Pick-up Date</p>
            <input 
              type="datetime-local" 
              className="w-full bg-transparent outline-none font-medium mt-1 text-black" 
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
          <div className="flex-1 w-full px-4 py-2">
            <p className="text-xs font-bold text-gray-500 uppercase">Return Date</p>
            <input 
              type="datetime-local" 
              className="w-full bg-transparent outline-none font-medium mt-1 text-black" 
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div>
        
        <button 
          onClick={handleSearch}
          className="bg-[#111111] text-white p-4 rounded-xl hover:bg-black/80 transition-colors w-full md:w-auto flex justify-center"
        >
          <Search size={24} />
        </button>
      </div>
      
      {/* Hero Image */}
      <div className="w-full max-w-6xl px-6 relative z-10 flex justify-center">
        {/* Placeholder for yellow car - using standard transparent png if possible, else unsplash */}
        <img
          ref={imageRef}
          src={activeVehicle === "cars" ? "/hero-car.png" : "https://images.unsplash.com/photo-1558981420-c532902e58b4?auto=format&fit=crop&q=80&w=1200"}
          alt={activeVehicle === "cars" ? "Premium Yellow Indian SUV" : "Premium Sports Bike"}
          className="w-full max-w-4xl object-contain drop-shadow-2xl mix-blend-multiply"
          style={{ mixBlendMode: 'multiply' }} 
        />
        {/* Note: In a real app we'd use a transparent PNG for the car. Mix-blend-multiply helps fake it if it has a white background */}
      </div>

    </section>
  );
}
