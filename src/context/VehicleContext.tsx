"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type VehicleType = "cars" | "bikes";

interface VehicleContextType {
  activeVehicle: VehicleType;
  setActiveVehicle: (vehicle: VehicleType) => void;
}

const VehicleContext = createContext<VehicleContextType | undefined>(undefined);

export function VehicleProvider({ children }: { children: ReactNode }) {
  const [activeVehicle, setActiveVehicle] = useState<VehicleType>("cars");

  return (
    <VehicleContext.Provider value={{ activeVehicle, setActiveVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicle() {
  const context = useContext(VehicleContext);
  if (context === undefined) {
    throw new Error("useVehicle must be used within a VehicleProvider");
  }
  return context;
}
