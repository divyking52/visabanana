export type Region = "All" | "Asia" | "Europe" | "Middle East" | "Africa" | "Americas" | "Oceania";

export type Destination = {
  code: string;
  name: string;
  tagline: string;
  region: Exclude<Region, "All">;
  price: number;
  validity: string;
  entry: string;
  note: string;
  processed: string;
  image: string;
  flag: string;
};

// [code, name, tagline, region, price (INR), validity, entry, note, visas processed]
const rows: [string, string, string, Destination["region"], number, string, string, string, string][] = [
  ["ae", "Dubai (UAE)", "Where Luxury Meets Desert", "Middle East", 7600, "30 Days", "Single Entry", "Fast processing", "18.4k"],
  ["vn", "Vietnam", "Timeless Beauty", "Asia", 4074, "90 days", "Single Entry", "Fast processing", "14.2k"],
  ["tr", "Turkey", "Where East Meets West", "Middle East", 6500, "30 Days", "Single Entry", "Fast processing", "11.7k"],
  ["id", "Indonesia", "Bali & Beyond", "Asia", 4000, "30 Days", "Single Entry", "Fast processing", "9.8k"],
  ["my", "Malaysia", "Petronas Towers & Street Food", "Asia", 500, "30 Days", "Single Entry", "Fast processing", "8.6k"],
  ["lk", "Sri Lanka", "The Pearl of the Indian Ocean", "Asia", 1500, "30 Days", "Single Entry", "Fast processing", "7.4k"],
  ["za", "South Africa", "Safaris, Cape Town & the Big Five", "Africa", 2500, "30 Days", "Multiple Entry", "Fast processing", "2.6k"],
  ["hk", "Hong Kong", "Asia's World City", "Asia", 500, "30 Days", "Single Entry", "Fast processing", "6.7k"],
  ["eg", "Egypt", "Pyramids, Pharaohs & the Nile", "Africa", 4500, "30 Days", "Single Entry", "Fast processing", "4.8k"],
  ["ke", "Kenya", "Safari Capital of the World", "Africa", 4400, "90 Days", "Single Entry", "Fast processing", "4.3k"],
  ["om", "Oman", "Arabia's Hidden Gem", "Middle East", 2800, "10 Days", "Single Entry", "Fast processing", "5.1k"],
  ["uz", "Uzbekistan", "Silk Road Splendour", "Asia", 2800, "30 Days", "Single Entry", "Fast processing", "3.1k"],
  ["ru", "Russia", "Palaces, Tundra & the Trans-Siberian", "Europe", 6400, "30 Days", "Single Entry", "Fast processing", "3.4k"],
  ["az", "Azerbaijan", "The Land of Fire", "Asia", 3500, "30 Days", "Single Entry", "Fast processing", "2.3k"],
  ["kh", "Cambodia", "Angkor Wat & Ancient Kingdoms", "Asia", 4100, "30 Days", "Single Entry", "Fast processing", "5.9k"],
  ["bh", "Bahrain", "Pearl of the Arabian Gulf", "Middle East", 4000, "14 Days", "Single Entry", "Fast processing", "3.7k"],
  ["qa", "Qatar", "The Jewel of the Gulf", "Middle East", 6099, "30 days per visit", "Multiple Entry", "Fast processing", "6.2k"],
  ["us", "United States", "Land of Opportunity", "Americas", 40500, "6 Months", "Multiple Entry", "Earliest Interview Appointment", "2.1k"],
  ["sc", "Seychelles", "Paradise Found in the Indian Ocean", "Africa", 2050, "30 Days", "Single Entry", "Fast processing", "2.9k"],
  ["fr", "France", "Eiffel, Escargot & Élégance", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["at", "Austria", "Alps, Palaces & Waltz", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["be", "Belgium", "Chocolate, Chateaux & Charm", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["hr", "Croatia", "Adriatic Coast & Ancient Walls", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["cz", "Czechia", "Fairytale Spires of Prague", "Europe", 13200, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["dk", "Denmark", "Hygge, Harbours & Design", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["ee", "Estonia", "Medieval Towers, Baltic Charm", "Europe", 13260, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["fi", "Finland", "Lakes, Saunas & Northern Lights", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["de", "Germany", "Autobahns, Beer & Castles", "Europe", 13300, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["gr", "Greece", "Islands, Ruins & Aegean Blue", "Europe", 16700, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["hu", "Hungary", "Thermal Baths & Danube Views", "Europe", 13100, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["is", "Iceland", "Glaciers, Geysers & Fire", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["it", "Italy", "Pasta, Piazzas & La Dolce Vita", "Europe", 13450, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["lv", "Latvia", "Art Nouveau Riga, Baltic Shores", "Europe", 13210, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["lt", "Lithuania", "Baroque Vilnius & Amber Coast", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["lu", "Luxembourg", "Fairytale Castles, Grand Duchy", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["mt", "Malta", "Sunlit Islands, Ancient Fortresses", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["nl", "Netherlands", "Canals, Tulips & Windmills", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["no", "Norway", "Fjords, Peaks & Midnight Sun", "Europe", 3500, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["pl", "Poland", "Old Towns & Amber Trails", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["pt", "Portugal", "Tiled Streets & Atlantic Coast", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["sk", "Slovakia", "Castles of the Tatras", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["si", "Slovenia", "Alpine Lakes & Green Capital", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["es", "Spain", "Flamenco, Fiestas & Sun", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["se", "Sweden", "Archipelagos & Design Capital", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["ch", "Switzerland", "Alps, Watches & Chocolate", "Europe", 13400, "90 days", "Single/Multiple Entry", "Earliest VFS Appointment", "7.3k"],
  ["gb", "United Kingdom", "Tea, History & The Thames", "Europe", 23000, "6 months", "Multiple Entry", "Earliest VFS Appointment", "2.1k"],
  ["au", "Australia", "G'day, Kangaroos & Coral Reefs", "Oceania", 18000, "3 Months", "Multiple Entry", "Fast processing", "2.1k"],
  ["nz", "New Zealand", "Hobbit Holes & Fiords", "Oceania", 28600, "6 Months", "Multiple Entry", "Fast processing", "2.1k"],
  ["ca", "Canada", "Maple Syrup, Moose & Mountains", "Americas", 17490, "6 Months", "Multiple Entry", "Earliest VFS Appointment", "5.5k"],
  ["cn", "China", "Ancient Wonder, Modern Marvel", "Asia", 10599, "30 Days", "Single Entry", "Fast processing", "2.1k"],
  ["jp", "Japan", "Tradition Meets Tomorrow", "Asia", 3300, "30 Days", "Single Entry", "Earliest VFS Appointment", "2.1k"],
];

export const destinations: Destination[] = rows.map(
  ([code, name, tagline, region, price, validity, entry, note, processed]) => ({
    code,
    name,
    tagline,
    region,
    price,
    validity,
    entry,
    note,
    processed,
    image: `/images/destinations/${code}.${["az", "bh", "qa"].includes(code) ? "png" : "jpg"}`,
    flag: `/flags/${code}.png`,
  }),
);

export const regions: Region[] = ["All", "Asia", "Europe", "Middle East", "Africa", "Americas", "Oceania"];

export const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export const findDestination = (code: string) => destinations.find((d) => d.code === code)!;
