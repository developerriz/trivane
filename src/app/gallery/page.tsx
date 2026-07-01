import { GalleryClient } from "@/components/GalleryClient";
import { Header } from "@/components/Header";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <GalleryClient />
    </main>
  );
}
