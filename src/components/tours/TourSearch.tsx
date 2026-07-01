import { Search, MapPin, IndianRupee, Moon, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TourSearch() {
  return (
    <div className="bg-white p-2 border border-border/50 shadow-xl max-w-6xl mx-auto rounded-full flex flex-col md:flex-row items-center justify-between backdrop-blur-md">
      
      {/* Search Input */}
      <div className="flex-1 flex items-center gap-3 px-6 py-2 border-r border-border/50">
        <MapPin className="w-5 h-5 text-primary" />
        <div className="w-full">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Location</label>
          <input 
            type="text" 
            placeholder="Where do you want to go?" 
            className="w-full bg-transparent text-sm font-semibold text-gray-800 focus:outline-none placeholder:text-gray-300"
          />
        </div>
      </div>
      
      {/* Budget Select */}
      <div className="flex-1 flex items-center gap-3 px-6 py-2 border-r border-border/50">
        <IndianRupee className="w-5 h-5 text-primary" />
        <div className="w-full">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Budget</label>
          <select className="w-full bg-transparent text-sm font-semibold text-gray-800 focus:outline-none appearance-none cursor-pointer">
            <option value="">Any Budget</option>
            <option value="low">Under ₹10,000</option>
            <option value="medium">₹10,000 - ₹30,000</option>
            <option value="high">Above ₹30,000</option>
          </select>
        </div>
      </div>

      {/* Nights Select */}
      <div className="flex-1 flex items-center gap-3 px-6 py-2 border-r border-border/50">
        <Moon className="w-5 h-5 text-primary" />
        <div className="w-full">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Duration</label>
          <select className="w-full bg-transparent text-sm font-semibold text-gray-800 focus:outline-none appearance-none cursor-pointer">
            <option value="">Any Duration</option>
            <option value="1-3">1 - 3 Nights</option>
            <option value="4-7">4 - 7 Nights</option>
            <option value="8+">8+ Nights</option>
          </select>
        </div>
      </div>

      {/* Theme Select */}
      <div className="flex-1 flex items-center gap-3 px-6 py-2 pr-4">
        <Map className="w-5 h-5 text-primary" />
        <div className="w-full">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Theme</label>
          <select className="w-full bg-transparent text-sm font-semibold text-gray-800 focus:outline-none appearance-none cursor-pointer">
            <option value="">Any Theme</option>
            <option value="wildlife">Wildlife</option>
            <option value="hill-stations">Hill Stations & Valleys</option>
            <option value="adventure">Adventure</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="pl-2 pr-2">
        <Button className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center shadow-lg shadow-primary/30 transition-transform hover:scale-105">
          <Search className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
