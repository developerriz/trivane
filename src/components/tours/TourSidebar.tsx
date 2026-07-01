import { sidebarData } from "@/data/tours";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      <SidebarSection title="Packages by Activity" items={sidebarData.activities} />
      
      {/* WhatsApp Floating Button Placeholder */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="#" 
          className="bg-[#25D366] hover:bg-[#20b858] text-white rounded-full py-4 px-8 flex items-center gap-3 font-bold shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-105"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.893-4.448 9.893-9.892 0-5.447-4.446-9.892-9.893-9.892-5.452 0-9.894 4.449-9.894 9.892 0 1.986.515 3.62 1.404 5.056zm3.792-8.824c-.181-.406-.37-.419-.537-.425-.151-.005-.327-.005-.503-.005-.177 0-.463.066-.704.331-.241.265-.921.902-.921 2.198s.943 2.548 1.074 2.724c.131.176 1.838 2.871 4.542 3.992.645.267 1.147.427 1.54.546.649.196 1.239.168 1.704.102.525-.075 1.611-.66 1.838-1.296.226-.636.226-1.181.158-1.296-.068-.115-.246-.182-.501-.309-.257-.127-1.512-.746-1.747-.831-.235-.084-.405-.127-.581.138-.176.265-.658.831-.809 1-.151.169-.302.19-.558.063-.257-.127-1.079-.398-2.056-1.267-.76-.677-1.272-1.514-1.423-1.78-.151-.265-.016-.409.112-.536.115-.113.257-.302.384-.452.127-.151.17-.257.255-.429.085-.172.043-.322-.02-.45-.064-.127-.582-1.405-.798-1.921z"/></svg>
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
