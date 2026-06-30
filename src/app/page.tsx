import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VehicleRange } from "@/components/VehicleRange";
import { AppPromo } from "@/components/AppPromo";
import { DreamCar } from "@/components/DreamCar";
import { Blog } from "@/components/Blog";
import { AppBanner } from "@/components/AppBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <VehicleRange />
        <AppPromo />
        <DreamCar />
        <Blog />
        <AppBanner />
      </main>
      <Footer />
    </>
  );
}
