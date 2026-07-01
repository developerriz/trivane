"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { vehiclesData, Vehicle } from "@/data/vehicles";
import Link from "next/link";
import { Search, Filter, X } from "lucide-react";

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState(initialType); // "all", "cars", "bikes", "scooters"
  const [brandFilter, setBrandFilter] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000); // arbitrarily high max price for slider
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Extract unique brands for dropdown
  const brands = useMemo(() => {
    const allBrands = vehiclesData.map((v) => v.brand);
    return ["all", ...Array.from(new Set(allBrands))];
  }, []);

  // Filter logic
  const filteredVehicles = useMemo(() => {
    return vehiclesData.filter((v: Vehicle) => {
      // 1. Search Query
      const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            v.brand.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;

      // 2. Type Filter (handling scooters logic specifically)
      if (typeFilter !== "all") {
        if (typeFilter === "cars" && v.type !== "cars") return false;
        // If they want "bikes", we exclude scooters to match homepage behavior
        if (typeFilter === "bikes" && (v.type !== "bikes" || v.category === "scooters")) return false;
        // If they want scooters, it has to be category scooter
        if (typeFilter === "scooters" && v.category !== "scooters") return false;
      }

      // 3. Brand Filter
      if (brandFilter !== "all" && v.brand !== brandFilter) return false;

      // 4. Price Filter
      if (v.price > maxPrice) return false;

      return true;
    });
  }, [searchQuery, typeFilter, brandFilter, maxPrice]);

  return (
    <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden flex justify-between items-center w-full mb-4">
        <h1 className="text-3xl font-heading font-bold uppercase">Gallery</h1>
        <button 
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-lg font-bold text-sm"
        >
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* Sidebar Filters */}
      <aside className={`w-full md:w-64 shrink-0 space-y-8 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
        <div className="hidden md:block mb-8">
          <h1 className="text-4xl font-heading font-bold uppercase tracking-tight">Gallery</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <label className="text-sm font-semibold mb-2 block uppercase tracking-wider text-muted-foreground">Search</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search vehicles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-10 pr-4 rounded-lg bg-card border border-border focus:ring-2 focus:ring-primary outline-none transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          </div>
        </div>

        {/* Type Filter */}
        <div>
          <label className="text-sm font-semibold mb-3 block uppercase tracking-wider text-muted-foreground">Vehicle Type</label>
          <div className="flex flex-col gap-2">
            {["all", "cars", "bikes", "scooters"].map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  typeFilter === type ? "bg-primary text-black shadow-md" : "hover:bg-muted text-foreground"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div>
          <label className="text-sm font-semibold mb-3 block uppercase tracking-wider text-muted-foreground">Brand</label>
          <select 
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand === "all" ? "All Brands" : brand}
              </option>
            ))}
          </select>
        </div>

        {/* Price Slider */}
        <div>
          <label className="text-sm font-semibold mb-3 flex justify-between uppercase tracking-wider text-muted-foreground">
            <span>Max Price (/day)</span>
            <span className="text-foreground font-bold">${maxPrice}</span>
          </label>
          <input 
            type="range" 
            min="10" 
            max="1000" 
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </aside>

      {/* Main Grid */}
      <div className="flex-1">
        <div className="mb-6 flex justify-between items-end">
          <p className="text-muted-foreground font-medium">
            Showing <span className="text-foreground font-bold">{filteredVehicles.length}</span> vehicles
          </p>
          {/* Quick reset */}
          {(searchQuery || typeFilter !== 'all' || brandFilter !== 'all' || maxPrice < 1000) && (
            <button 
              onClick={() => {
                setSearchQuery("");
                setTypeFilter("all");
                setBrandFilter("all");
                setMaxPrice(1000);
              }}
              className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1 transition-colors"
            >
              <X size={14} /> Clear Filters
            </button>
          )}
        </div>

        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <Link 
                href={`/vehicle/${vehicle.id}`} 
                key={vehicle.id}
                className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[4/3] bg-muted relative overflow-hidden flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-contain relative z-20 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-30 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-semibold">
                    ${vehicle.price}<span className="text-muted-foreground font-normal text-xs">/day</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1 uppercase tracking-wider">{vehicle.brand}</p>
                      <h3 className="font-heading text-xl font-bold uppercase leading-tight">{vehicle.name}</h3>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 flex justify-between items-center border-t border-border/50">
                    <span className="text-sm font-medium text-muted-foreground capitalize flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                      {vehicle.fuel}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                      {vehicle.transmission}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center bg-muted/30 rounded-3xl border border-border/50">
            <h3 className="text-2xl font-heading font-bold uppercase mb-2">No Vehicles Found</h3>
            <p className="text-muted-foreground max-w-md">We couldn't find any vehicles matching your current filters. Try adjusting them to see more results.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setTypeFilter("all");
                setBrandFilter("all");
                setMaxPrice(1000);
              }}
              className="mt-6 px-6 py-2.5 bg-primary text-black font-bold uppercase text-sm rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function GalleryClient() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-2xl font-bold uppercase">Loading Gallery...</div>}>
      <GalleryContent />
    </Suspense>
  );
}
