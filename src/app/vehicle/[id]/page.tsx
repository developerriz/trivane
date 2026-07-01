import { vehiclesData } from "@/data/vehicles";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BookingForm } from "@/components/BookingForm";
import { Gauge, Settings2, Users, Fuel } from "lucide-react";

export default async function VehicleDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicle = vehiclesData.find((v) => v.id === parseInt(id));

  if (!vehicle) {
    return (
      <main className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-bold mb-4 font-heading">Vehicle Not Found</h1>
          <p className="text-muted-foreground mb-8">The vehicle you are looking for does not exist or has been removed.</p>
          <Link 
            href="/#rentals" 
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <Link 
          href="/gallery"
          className="text-sm text-primary hover:underline mb-8 inline-block"
        >
          &larr; Back to Gallery
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image & Specs */}
          <div className="space-y-8">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted relative flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-card p-4 rounded-2xl border border-border/50 flex flex-col items-center justify-center gap-2">
                <Gauge className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Speed</span>
                <span className="font-bold">{vehicle.speed}</span>
              </div>
              <div className="bg-card p-4 rounded-2xl border border-border/50 flex flex-col items-center justify-center gap-2">
                <Settings2 className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Gearbox</span>
                <span className="font-bold">{vehicle.transmission}</span>
              </div>
              <div className="bg-card p-4 rounded-2xl border border-border/50 flex flex-col items-center justify-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Seats</span>
                <span className="font-bold">{vehicle.seats}</span>
              </div>
              <div className="bg-card p-4 rounded-2xl border border-border/50 flex flex-col items-center justify-center gap-2">
                <Fuel className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Fuel</span>
                <span className="font-bold">{vehicle.fuel}</span>
              </div>
            </div>
          </div>
          
          {/* Right: Details & Booking */}
          <div className="flex flex-col">
            <p className="text-primary font-medium tracking-wider uppercase mb-2">{vehicle.brand}</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{vehicle.name}</h1>
            
            <div className="flex items-end gap-2 mb-8">
              <span className="text-4xl font-bold">${vehicle.price}</span>
              <span className="text-muted-foreground pb-1">/ day</span>
            </div>
            
            <div className="prose prose-neutral dark:prose-invert mb-10 max-w-none text-muted-foreground">
              <p>
                Experience the thrill of driving the {vehicle.name}. Designed for 
                both comfort and performance, this {vehicle.category.slice(0, -1)} offers exceptional 
                handling and advanced features. Perfect for your next adventure or 
                business trip.
              </p>
            </div>
            
            <BookingForm vehicleName={vehicle.name} />
          </div>
        </div>
      </div>
    </main>
  );
}
