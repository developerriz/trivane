import { Search, MapPin, IndianRupee, Moon, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TourSearch() {
  return (
    <div className="bg-white p-4 md:p-2 border border-border/50 shadow-xl max-w-6xl mx-auto rounded-3xl md:rounded-full flex flex-col md:flex-row items-center justify-between backdrop-blur-md gap-4 md:gap-0">
      
      {/* Search Input */}
      <div className="w-full md:flex-1 flex items-center gap-3 px-2 md:px-6 pb-4 md:pb-0 md:py-2 border-b md:border-b-0 md:border-r border-border/50">
        <MapPin className="w-5 h-5 text-primary" />
        <div className="w-full">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Location</label>
          <Input 
            type="text" 
            placeholder="Where do you want to go?" 
            className="w-full border-0 focus-visible:ring-0 px-0 h-auto bg-transparent text-sm font-semibold text-gray-800 placeholder:text-gray-300 shadow-none"
          />
        </div>
      </div>
      
      {/* Budget Select */}
      <div className="w-full md:flex-1 flex items-center gap-3 px-2 md:px-6 pb-4 md:pb-0 md:py-2 border-b md:border-b-0 md:border-r border-border/50">
        <IndianRupee className="w-5 h-5 text-primary" />
        <div className="w-full">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Budget</label>
          <Input 
            type="text" 
            placeholder="e.g. Under ₹10,000" 
            className="w-full border-0 focus-visible:ring-0 px-0 h-auto bg-transparent text-sm font-semibold text-gray-800 placeholder:text-gray-300 shadow-none"
          />
        </div>
      </div>

      {/* Nights Select */}
      <div className="w-full md:flex-1 flex items-center gap-3 px-2 md:px-6 pb-4 md:pb-0 md:py-2 border-b md:border-b-0 md:border-r border-border/50">
        <Moon className="w-5 h-5 text-primary" />
        <div className="w-full">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Duration</label>
          <Input 
            type="text" 
            placeholder="e.g. 3 Nights" 
            className="w-full border-0 focus-visible:ring-0 px-0 h-auto bg-transparent text-sm font-semibold text-gray-800 placeholder:text-gray-300 shadow-none"
          />
        </div>
      </div>

      {/* Theme Select */}
      <div className="w-full md:flex-1 flex items-center gap-3 px-2 md:px-6 pb-2 md:pb-0 md:py-2 md:pr-4">
        <Map className="w-5 h-5 text-primary" />
        <div className="w-full">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Theme</label>
          <Input 
            type="text" 
            placeholder="e.g. Adventure" 
            className="w-full border-0 focus-visible:ring-0 px-0 h-auto bg-transparent text-sm font-semibold text-gray-800 placeholder:text-gray-300 shadow-none"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="w-full md:w-auto md:pl-2 md:pr-2 mt-2 md:mt-0">
        <Button className="w-full md:w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 transition-transform hover:scale-105">
          <Search className="w-5 h-5 md:w-6 md:h-6" />
          <span className="md:hidden">Search Tours</span>
        </Button>
      </div>
    </div>
  );
}
