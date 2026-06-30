import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <img src="/logo.png" alt="Trivane Logo" className="h-10 w-auto object-contain" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider max-w-sm">
              Stay up to date on all the latest news.
            </h3>
          </div>
          <div className="flex w-full max-w-md border-b border-white/30 pb-2 relative">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent w-full outline-none text-white placeholder:text-gray-500"
            />
            <button className="text-primary absolute right-0 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 tracking-wider uppercase text-white">Rental</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#cars" className="hover:text-primary transition-colors">Bike Rental</Link></li>
              <li><Link href="#bikes" className="hover:text-primary transition-colors">Self Drive Car</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Scooty Rental</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 tracking-wider uppercase text-white">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Tour Operators</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 tracking-wider uppercase text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <li>Apurba Sinha Path, House No 46, Zoo Tiniali, Guwahati, Assam - 781003, India</li>
              <li>Mobile : +91-9613204198</li>
              <li>E-mail : <a href="mailto:trivaneassam@gmail.com" className="hover:text-primary transition-colors">trivaneassam@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 tracking-wider uppercase text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} TRIVANE RENTALS</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
