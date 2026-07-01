"use client";

import { useEffect, useRef, useState } from "react";
import { useVehicle } from "@/context/VehicleContext";
import gsap from "gsap";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { vehiclesData } from "@/data/vehicles";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bookingFormRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const { activeVehicle, setActiveVehicle } = useVehicle();
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("");
  const router = useRouter();

  const availableVehicles = vehiclesData.filter((v) => v.type === activeVehicle);

  const handleSearch = () => {
    if (!selectedVehicleId) {
      alert("Please select a vehicle.");
      return;
    }
    router.push(`/vehicle/${selectedVehicleId}`);
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
        SELF DRIVE {activeVehicle === "cars" ? "CAR" : "BIKE"} <br /> RENTAL
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
        
        <div className="flex-1 flex items-center px-4 py-2 w-full relative">
          <Select value={selectedVehicleId} onValueChange={(val) => setSelectedVehicleId(val || "")}>
            <SelectTrigger className="w-full h-12 border-none bg-transparent shadow-none text-lg font-medium focus:ring-0 px-2 outline-none hover:bg-gray-50/50 transition-colors rounded-lg">
              <SelectValue placeholder={`Select a ${activeVehicle === 'cars' ? 'car' : 'bike'} from our collection...`}>
                {selectedVehicleId ? (
                  (() => {
                    const selected = availableVehicles.find(v => v.id.toString() === selectedVehicleId);
                    return selected ? `${selected.brand} ${selected.name} - ₹${selected.price}/day` : "";
                  })()
                ) : undefined}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {availableVehicles.map((vehicle) => (
                <SelectItem key={vehicle.id} value={vehicle.id.toString()} className="cursor-pointer">
                  {vehicle.brand} {vehicle.name} - ₹{vehicle.price}/day
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
          src={activeVehicle === "cars" ? "/hero-car.png" : "/yamaha-r15.webp"}
          alt={activeVehicle === "cars" ? "Premium Yellow Indian SUV" : "Premium Sports Bike"}
          className="w-full max-w-4xl object-contain drop-shadow-2xl mix-blend-multiply"
          style={{ mixBlendMode: 'multiply' }} 
        />
        {/* Note: In a real app we'd use a transparent PNG for the car. Mix-blend-multiply helps fake it if it has a white background */}
      </div>

    </section>
  );
}
