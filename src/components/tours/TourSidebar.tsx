import { sidebarData } from "@/data/tours";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SidebarSection({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="bg-white border border-border/50 shadow-lg mb-8 rounded-3xl overflow-hidden group">
      <div className="p-6 border-b border-border/50 bg-gray-50/50">
        <h4 className="font-heading text-lg font-bold text-gray-900 flex items-center justify-between">
          {title}
          <div className="w-2 h-2 rounded-full bg-primary" />
        </h4>
      </div>
      <div className="p-6 flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <Link 
            key={idx} 
            href="/tours"
            className="text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            {item}
          </Link>
        ))}
      </div>
      {title === "Packages by Destination" && (
        <div className="text-right p-4 pt-0 text-sm">
          <Link 
            href="/tours" 
            className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors group-hover:translate-x-1"
          >
            View More <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      )}
    </div>
  );
}

export function TourSidebar() {
  return (
    <div className="w-full">
      <SidebarSection title="Packages by Destination" items={sidebarData.destinations} />
      <SidebarSection title="Packages by Theme" items={sidebarData.themes} />
      {/* Newsletter Subscription */}
      <div className="bg-white border border-border/50 shadow-lg mt-8 rounded-3xl overflow-hidden p-6 text-center">
        <h4 className="font-heading text-lg font-bold text-gray-900 mb-2">
          Get Travel Updates
        </h4>
        <p className="text-sm text-gray-500 mb-4">
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
        </p>
        <div className="flex flex-col gap-3">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full rounded-full border-gray-300 focus-visible:ring-primary"
          />
          <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-transform hover:scale-105">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
