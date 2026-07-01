export interface Tour {
  id: string;
  title: string;
  duration: string;
  destinations: string;
  activities: string;
  themes: string;
  image: string;
}

export const toursData: Tour[] = [
  {
    id: "assam-tour",
    title: "Assam Tour",
    duration: "6 Nights / 7 Days",
    destinations: "Jorhat, Guwahati, Kaziranga, Sivasagar, Brahmaputra River",
    activities: "Jungle Safari, Jeep Safari, Sightseeing",
    themes: "Wildlife, Hill Stations & Valleys",
    image: "https://images.unsplash.com/photo-1596423735880-5f2a689b903e?auto=format&fit=crop&q=80&w=800", // Rhino placeholder
  },
  {
    id: "assam-wildlife",
    title: "Assam Wildlife Tour",
    duration: "12 Nights / 13 Days",
    destinations: "Jorhat, Guwahati, Sonitpur, Kaziranga, Nameri National Park",
    activities: "Jungle Safari",
    themes: "Wildlife",
    image: "https://images.unsplash.com/photo-1582845873215-58784fcce58f?auto=format&fit=crop&q=80&w=800", // Wildlife placeholder
  },
  {
    id: "arunachal-tour",
    title: "Arunachal Tour",
    duration: "5 Nights / 6 Days",
    destinations: "Bomdila, Guwahati, Tawang, Dirang",
    activities: "Trekking, Sightseeing",
    themes: "Hill Stations & Valleys",
    image: "https://images.unsplash.com/photo-1522221659725-b44c20790bf0?auto=format&fit=crop&q=80&w=800", // Monastery placeholder
  }
];

export const sidebarData = {
  destinations: [
    "Guwahati Tours", "Kaziranga Tours", "Dawki Tours", "Jorhat Tours", 
    "Cherrapunji Tours", "Shillong Tours", "Sivasagar Tours", "Tawang Tours", 
    "Dirang Tours", "Bomdila Tours"
  ],
  themes: [
    "Hill Stations & Valleys Tours", "Wildlife Tours"
  ],
  activities: [
    "Jungle Safari Tours", "Jeep Safari Tours", "Sightseeing Tours", 
    "Trekking Tours", "Mountain Biking Tours", "Mountaineering Tours"
  ]
};
