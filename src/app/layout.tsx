import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { VehicleProvider } from "@/context/VehicleContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

import { OfflineOverlay } from "@/components/OfflineOverlay";

export const metadata: Metadata = {
  title: "Trivane - Premium Car & Bike Rental",
  description: "Modern premium vehicle rental services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, syncopate.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <OfflineOverlay />
        <VehicleProvider>{children}</VehicleProvider>
      </body>
    </html>
  );
}
