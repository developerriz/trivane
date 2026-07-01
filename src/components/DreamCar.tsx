"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gauge, Settings2, Users, Fuel, Tag } from "lucide-react";
import { useVehicle } from "@/context/VehicleContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import { carsData, bikesData } from "@/data/vehicles";

gsap.registerPlugin(ScrollTrigger);



export function DreamCar() {
  const sectionRef = useRef<HTMLElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2); // Default to Lamborghini
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const { activeVehicle } = useVehicle();
  const activeData = activeVehicle === "cars" ? carsData : bikesData;

  const handleCarClick = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  const activeCar = activeData[activeIndex] || activeData[0];

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        specsRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#F8F7F3] relative overflow-hidden text-center">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-widest text-[#111]">
          PICK YOUR DREAM <br /> {activeVehicle === "cars" ? "CAR" : "BIKE"} TODAY
        </h2>
        
        {/* Car Showcase */}
        <div className="relative mt-12 md:mt-20 max-w-[1400px] mx-auto h-[350px] md:h-[500px] lg:h-[650px] flex items-center justify-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: -50,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="w-full h-full !overflow-visible"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            initialSlide={1}
            slideToClickedSlide={true}
            onSwiper={setSwiperRef}
          >
            {activeData.map((car, index) => (
              <SwiperSlide key={car.id} className="!w-[320px] md:!w-[600px] lg:!w-[896px] self-center">
                <div 
                  onClick={() => handleCarClick(index)}
                  className={`w-full h-full flex items-center justify-center transition-all duration-500 ${activeIndex === index ? "scale-110 drop-shadow-2xl cursor-default" : "opacity-60 scale-90 cursor-pointer hover:opacity-80"}`}
                >
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full object-contain mix-blend-multiply drop-shadow-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Specs */}
        <div ref={specsRef} className="flex flex-wrap justify-center gap-8 md:gap-20 mt-8 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-transparent flex items-center justify-center mb-4 text-[#111]">
              <Gauge size={28} strokeWidth={1.5} />
            </div>
            <p className="font-bold text-sm text-[#111]">{activeCar.speed}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-transparent flex items-center justify-center mb-4 text-[#111]">
              <Settings2 size={28} strokeWidth={1.5} />
            </div>
            <p className="font-bold text-sm text-[#111]">{activeCar.transmission}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-transparent flex items-center justify-center mb-4 text-[#111]">
              <Users size={28} strokeWidth={1.5} />
            </div>
            <p className="font-bold text-sm text-[#111]">{activeCar.seats}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-transparent flex items-center justify-center mb-4 text-[#111]">
              <Fuel size={28} strokeWidth={1.5} />
            </div>
            <p className="font-bold text-sm text-[#111]">{activeCar.fuel}</p>
          </div>
        </div>

        {/* Booking Bar */}
        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-3 flex flex-col md:flex-row gap-4 items-center max-w-3xl mx-auto z-20 relative">
          <div className="flex-1 w-full px-6 py-2 flex items-center gap-4">
            <Tag className="text-gray-400 rotate-90" size={24} />
            <div className="flex items-baseline gap-1 border-l-2 border-gray-100 pl-6">
              <span className="text-sm font-bold text-[#F4A261]">₹</span>
              <span className="text-4xl font-black text-[#111] tracking-tighter">{activeCar.price}</span>
              <span className="text-sm font-medium text-gray-400 ml-1">/day</span>
            </div>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto px-3 pb-3 md:pb-0">
            <button className="flex-1 md:flex-none px-8 py-4 bg-[#1C1C1E] text-white text-sm font-semibold rounded-lg hover:bg-black transition-colors">
              View Details
            </button>
            <button className="flex-1 md:flex-none px-10 py-4 bg-[#F2A945] text-white text-sm font-semibold rounded-lg hover:bg-[#e09b3d] transition-colors">
              Rent Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

