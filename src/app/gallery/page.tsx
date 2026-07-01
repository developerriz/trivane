import { GalleryClient } from "@/components/GalleryClient";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <GalleryClient />
      <Footer />
    </main>
  );
}
