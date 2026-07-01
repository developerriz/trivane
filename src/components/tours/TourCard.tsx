import { Tour } from "@/data/tours";
import { Button } from "@/components/ui/button";
import { Camera, Calendar, MapPin, Tag } from "lucide-react";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="group flex flex-col md:flex-row bg-white border border-border/50 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 mb-6 rounded-3xl overflow-hidden">
      {/* Image Section */}
      <div className="w-full md:w-[320px] h-72 md:h-auto shrink-0 relative overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center text-white border border-white/30 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
          <Camera className="w-5 h-5" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-gray-900 font-heading">{tour.title}</h3>
            <span className="bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full border border-primary/20">
              {tour.duration}
            </span>
          </div>
          
          <div className="space-y-3 mt-6 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p>
                <span className="font-semibold text-gray-900 block mb-1">Destinations Covered</span>
                {tour.destinations}
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <Camera className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p>
                <span className="font-semibold text-gray-900 block mb-1">Activities</span>
                {tour.activities}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Tag className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p>
                <span className="font-semibold text-gray-900 block mb-1">Themes</span>
                {tour.themes}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Booking Section */}
      <div className="p-8 md:w-[220px] flex flex-col items-center justify-center bg-gray-50/50 md:border-l border-border/50 relative overflow-hidden">
        <div className="text-center mb-6 relative z-10">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Starting from</p>
          <p className="text-primary font-bold text-2xl font-heading mb-1">Price</p>
          <p className="text-gray-900 font-bold text-sm">On Request</p>
        </div>
        <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-lg shadow-primary/20 transition-transform group-hover:scale-105 relative z-10">
          Book Tour
        </Button>
      </div>
    </div>
  );
}
