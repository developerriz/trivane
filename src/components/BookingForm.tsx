"use client";

import { Calendar, MapPin } from "lucide-react";

export function BookingForm({ vehicleName }: { vehicleName: string }) {
  return (
    <div className="bg-card border border-border/50 rounded-3xl p-8 mt-auto shadow-sm">
      <h3 className="text-2xl font-heading font-bold mb-6">Book this vehicle</h3>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" /> Pick-up Location
          </label>
          <input 
            type="text" 
            placeholder="Enter city or airport" 
            className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" /> Pick-up Date
            </label>
            <input 
              type="date" 
              className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" /> Return Date
            </label>
            <input 
              type="date" 
              className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>
        <button 
          type="button"
          className="w-full h-14 bg-primary text-primary-foreground font-bold rounded-xl mt-4 hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          onClick={() => alert(`Booking for ${vehicleName} initiated!`)}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
