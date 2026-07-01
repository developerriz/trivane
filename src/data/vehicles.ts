export type Vehicle = {
  id: number;
  type: "cars" | "bikes";
  category: string;
  brand: string;
  name: string;
  image: string;
  speed: string;
  transmission: string;
  seats: string;
  fuel: string;
  price: number;
};

export const vehiclesData: Vehicle[] = [
  // Cars Data
  {
    id: 1,
    type: "cars",
    category: "suvs",
    brand: "Skoda",
    name: "Skoda Kodiaq",
    image: "/mg-hagtor.png",
    speed: "210 km/h",
    transmission: "7 speed",
    seats: "7 seats",
    fuel: "Diesel",
    price: 150
  },
  {
    id: 2,
    type: "cars",
    category: "cars",
    brand: "MG",
    name: "MG Hector",
    image: "/Audi-s5.png",
    speed: "195 km/h",
    transmission: "Auto",
    seats: "5 seats",
    fuel: "Petrol",
    price: 120
  },
  {
    id: 3,
    type: "cars",
    category: "suvs", // Marking Urus as suv or car, suv fits Urus well
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    image: "/hero-car.png", 
    speed: "306 km/h",
    transmission: "8 speed",
    seats: "5 seats",
    fuel: "Petrol",
    price: 850
  },
  {
    id: 4,
    type: "cars",
    category: "cars",
    brand: "Toyota",
    name: "Toyota Camry",
    image: "/toyota camry.png",
    speed: "208 km/h",
    transmission: "Auto",
    seats: "5 seats",
    fuel: "Hybrid",
    price: 300
  },
  

  // Bikes Data
  {
    id: 101,
    type: "bikes",
    category: "cruisers",
    brand: "Royal Enfield",
    name: "Classic 350",
    image: "https://images.unsplash.com/photo-1558981420-c532902e58b4?auto=format&fit=crop&w=800&q=80",
    speed: "115 km/h",
    transmission: "5 speed",
    seats: "2 seats",
    fuel: "Petrol",
    price: 35
  },
  {
    id: 102,
    type: "bikes",
    category: "sports",
    brand: "KTM",
    name: "Duke 390",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    speed: "167 km/h",
    transmission: "6 speed",
    seats: "2 seats",
    fuel: "Petrol",
    price: 45
  },
  {
    id: 103,
    type: "bikes",
    category: "cruisers",
    brand: "Harley Davidson",
    name: "Iron 883",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    speed: "170 km/h",
    transmission: "5 speed",
    seats: "2 seats",
    fuel: "Petrol",
    price: 80
  },
  {
    id: 104,
    type: "bikes",
    category: "sports",
    brand: "Yamaha",
    name: "R15 V4",
    image: "/yamaha-r15.webp",
    speed: "150 km/h",
    transmission: "6 speed",
    seats: "2 seats",
    fuel: "Petrol",
    price: 40
  },
  {
    id: 105,
    type: "bikes",
    category: "scooters",
    brand: "Yamaha",
    name: "Ray ZR",
    image: "/yamaha-ray-zr_1.webp",
    speed: "90 km/h",
    transmission: "Auto",
    seats: "2 seats",
    fuel: "Petrol",
    price: 20
  },
  {
    id: 106,
    type: "bikes",
    category: "electric",
    brand: "Ather",
    name: "Ather 450X",
    image: "https://images.unsplash.com/photo-1571501538392-4cb65902e88a?auto=format&fit=crop&q=80&w=800",
    speed: "90 km/h",
    transmission: "Auto",
    seats: "2 seats",
    fuel: "Electric",
    price: 25
  },
];

export const carsData = vehiclesData.filter((v) => v.type === "cars");
export const bikesData = vehiclesData.filter((v) => v.type === "bikes");
