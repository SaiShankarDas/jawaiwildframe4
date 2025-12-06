export type Category = 
  | "All"
  | "Leopards"
  | "Safari Tours"
  | "Village Life"
  | "Temples"
  | "Birds"
  | "Wildlife"
  | "Camping"
  | "Landscape"
  | "Farming"
  | "Vehicles";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Category;
  width?: string;
  height?: string;
}

export const CATEGORIES: Category[] = [
  "All",
  "Leopards",
  "Safari Tours",
  "Village Life",
  "Temples",
  "Birds",
  "Wildlife",
  "Camping",
  "Landscape",
  "Farming",
  "Vehicles"
];

// Using existing assets to populate the gallery to ~30 items
export const GALLERY_IMAGES: GalleryImage[] = [
  // --- LEOPARDS (Increased count) ---
  { id: 'l1', category: 'Leopards', alt: 'Leopard on Granite', src: '/images/leopard jawai.jpg' },
  { id: 'l2', category: 'Leopards', alt: 'Leopard Sighting', src: '/images/2.jpeg' },
  { id: 'l3', category: 'Leopards', alt: 'Leopard Resting', src: '/images/1.jpeg' },
  { id: 'l4', category: 'Leopards', alt: 'Cub in the Wild', src: '/images/leopard jawai.jpg' }, // Reusing for demo volume
  { id: 'l5', category: 'Leopards', alt: 'Leopard at Sunset', src: '/images/2.jpeg' },
  { id: 'l6', category: 'Leopards', alt: 'Guardian of the Hills', src: '/images/1.jpeg' },
  { id: 'l7', category: 'Leopards', alt: 'Stealthy Movement', src: '/images/8.jpeg' },

  // --- SAFARI TOURS (New Category) ---
  { id: 'st1', category: 'Safari Tours', alt: 'Jeep Safari', src: '/images/11.jpg' },
  { id: 'st2', category: 'Safari Tours', alt: 'Tracking Experience', src: '/images/jawai 4 (Large).jpg' },
  { id: 'st3', category: 'Safari Tours', alt: 'Morning Drive', src: '/images/jawai sunrise.jpg' },
  { id: 'st4', category: 'Safari Tours', alt: 'Guided Tour', src: '/images/shepherd jawai.jpg' },
  { id: 'st5', category: 'Safari Tours', alt: 'Sunset Safari', src: '/images/bush.jpg' },

  // --- VILLAGE LIFE ---
  { id: 'v1', category: 'Village Life', alt: 'Rabari Shepherd', src: '/images/shepherd jawai.jpg' },
  { id: 'v2', category: 'Village Life', alt: 'Village Morning', src: '/images/village walk.jpg' },
  { id: 'v3', category: 'Village Life', alt: 'Traditional Attire', src: '/images/5.jpeg' },
  { id: 'v4', category: 'Village Life', alt: 'Local Culture', src: '/images/10.jpeg' },
  { id: 'v5', category: 'Village Life', alt: 'Herding Flock', src: '/images/shepherd jawai.jpg' },

  // --- TEMPLES ---
  { id: 't1', category: 'Temples', alt: 'Hilltop Temple', src: '/images/6.jpeg' },
  { id: 't2', category: 'Temples', alt: 'Sacred Steps', src: '/images/village walk.jpg' },
  
  // --- BIRDS ---
  { id: 'b1', category: 'Birds', alt: 'Bird Watching', src: '/images/jawai 7.webp' },
  { id: 'b2', category: 'Birds', alt: 'Migratory Birds', src: '/images/jawai 7.webp' },
  { id: 'b3', category: 'Birds', alt: 'Lakeside Birds', src: '/images/jawai 4 (Large).jpg' },
  
  // --- WILDLIFE ---
  { id: 'w1', category: 'Wildlife', alt: 'Jawai Wildlife', src: '/images/8.jpeg' },
  { id: 'w2', category: 'Wildlife', alt: 'Nature Trails', src: '/images/11.jpg' },
  { id: 'w3', category: 'Wildlife', alt: 'Wild Encounters', src: '/images/2.jpeg' },

  // --- CAMPING ---
  { id: 'c1', category: 'Camping', alt: 'Luxury Tent Exterior', src: '/images/tents (Large).jpg' },
  { id: 'c2', category: 'Camping', alt: 'Campfire Night', src: '/images/4.jpeg' },
  { id: 'c3', category: 'Camping', alt: 'Comfort Stay', src: '/images/comfort stay.jpg' },
  { id: 'c4', category: 'Camping', alt: 'Tent Interior', src: '/images/3.jpeg' },
  { id: 'c5', category: 'Camping', alt: 'Bush Dinner', src: '/images/bush.jpg' },

  // --- LANDSCAPE ---
  { id: 'ls1', category: 'Landscape', alt: 'Granite Hills Sunset', src: '/images/jawai sunrise.jpg' },
  { id: 'ls2', category: 'Landscape', alt: 'Jawai Dam View', src: '/images/jawai 4 (Large).jpg' },
  { id: 'ls3', category: 'Landscape', alt: 'Starry Night', src: '/images/9.jpeg' },

  // --- VEHICLES ---
  { id: 'vh1', category: 'Vehicles', alt: 'Safari Jeep', src: '/images/11.jpg' },
  { id: 'vh2', category: 'Vehicles', alt: 'Ready for Safari', src: '/images/11.jpg' },
];
