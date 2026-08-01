import butterflyImg from "@/assets/image.png.asset.json";
import jukiImg from "@/assets/image-2.png.asset.json";
import sirubaImg from "@/assets/image-3.png.asset.json";
import jackImg from "@/assets/image-4.png.asset.json";
import domesticImg from "@/assets/image-5.png.asset.json";
import jackShowroomImg from "@/assets/image-6.png.asset.json";
import jukiRowImg from "@/assets/image-7.png.asset.json";
import mssImg from "@/assets/image-8.png.asset.json";
import kansaiImg from "@/assets/image-9.png.asset.json";
import kansaiHeadImg from "@/assets/image-10.png.asset.json";
import flatlockImg from "@/assets/flatlock.jpg";
import buttonholeImg from "@/assets/buttonhole.jpg";
import embroideryImg from "@/assets/embroidery.jpg";
import sparePartsImg from "@/assets/spare-parts.jpg";

export const site = {
  name: "SewMachine",
  tagline: "Sewing Machine Sales, Spares & Service",
  phone: "+254 717 707 330",
  phoneHref: "tel:+254717707330",
  whatsapp: "254717707330",
  email: "sales@sewmachine.co.ke",
  address: "Uhuru Market, Jogoo Road, Nairobi, Kenya",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:30 AM – 5:00 PM" },
    { day: "Sunday & Public Holidays", time: "Closed (phone support only)" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Uhuru%20Market%20Jogoo%20Road%20Nairobi%20Kenya&output=embed",
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const images = {
  butterfly: butterflyImg.url,
  juki: jukiImg.url,
  siruba: sirubaImg.url,
  jack: jackImg.url,
  domestic: domesticImg.url,
  jackShowroom: jackShowroomImg.url,
  jukiRow: jukiRowImg.url,
  mss: mssImg.url,
  kansai: kansaiImg.url,
  kansaiHead: kansaiHeadImg.url,
  flatlock: flatlockImg,
  buttonhole: buttonholeImg,
  embroidery: embroideryImg,
  spareParts: sparePartsImg,
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  newPrice: string;
  refurbishedPrice?: string;
  availability: "In Stock" | "Limited Stock" | "On Order";
  features: string[];
  bestFor?: string[];
  models?: string[];
};

export const products: Product[] = [
  {
    slug: "butterfly-manual",
    name: "Butterfly Manual Sewing Machine",
    category: "Domestic Machines",
    image: images.butterfly,
    description:
      "Manual sewing machine supplied complete with a wooden table and cast-iron treadle stand — the dependable classic for home tailoring.",
    newPrice: "KSh 15,000",
    refurbishedPrice: "KSh 7,000",
    availability: "In Stock",
    features: ["Durable cast-iron stand", "Easy maintenance", "Reliable straight stitch", "No electricity required"],
    bestFor: ["Home sewing", "Students", "Tailors"],
  },
  {
    slug: "juki-lockstitch",
    name: "Juki Lockstitch Machine",
    category: "Industrial Machines",
    image: images.juki,
    description:
      "Single-needle industrial lockstitch machine built for all-day production sewing, supplied with a complete table and motor.",
    newPrice: "KSh 35,000",
    refurbishedPrice: "KSh 25,000",
    availability: "In Stock",
    features: ["Straight stitch", "Industrial motor", "High speed", "Complete table", "Professional quality"],
    bestFor: ["Tailoring shops", "Garment factories"],
  },
  {
    slug: "siruba-overlock",
    name: "Siruba Overlock Machine",
    category: "Overlock Machines",
    image: images.siruba,
    description:
      "Heavy-duty overlock machine for clean, professional edge finishing on knits and woven fabrics.",
    newPrice: "KSh 40,000",
    refurbishedPrice: "KSh 30,000",
    availability: "In Stock",
    features: ["4-thread", "5-thread", "Heavy-duty", "Professional edge finishing"],
    bestFor: ["Fashion designers", "Garment factories"],
  },
  {
    slug: "jack-industrial",
    name: "Jack Industrial Machine",
    category: "Industrial Machines",
    image: images.jack,
    description:
      "Modern direct-drive industrial machines that run quietly and cut power bills — our fastest-moving industrial range.",
    newPrice: "KSh 45,000+",
    refurbishedPrice: "KSh 32,000+",
    availability: "In Stock",
    features: ["Direct drive", "Quiet operation", "Energy efficient", "Digital control panel"],
    models: ["Jack F5", "Jack A2B", "Jack W4"],
  },
  {
    slug: "mss-industrial",
    name: "MSS Industrial Machine",
    category: "Industrial Machines",
    image: images.mss,
    description:
      "Strongly built, affordable industrial straight-stitch machine — an excellent first factory machine.",
    newPrice: "KSh 25,000",
    refurbishedPrice: "KSh 15,000",
    availability: "In Stock",
    features: ["Strong construction", "Affordable", "Reliable", "Easy to service"],
    bestFor: ["Startups", "Small workshops"],
  },
  {
    slug: "kansai-special",
    name: "Kansai Special Multi-Needle",
    category: "Industrial Machines",
    image: images.kansai,
    description:
      "Multi-needle industrial machine for waistband stitching, elastic sewing and high-volume production lines.",
    newPrice: "KSh 100,000 – 150,000",
    availability: "Limited Stock",
    features: ["Multi-needle", "Waistband stitching", "Elastic sewing", "Industrial production"],
  },
  {
    slug: "flatlock-interlock",
    name: "Flatlock (Interlock) Machine",
    category: "Flatlock Machines",
    image: images.flatlock,
    description:
      "Coverstitch flatlock machine for hemming t-shirts and stretch fabrics with a factory-grade finish.",
    newPrice: "KSh 40,000 – 55,000",
    availability: "In Stock",
    features: ["Hem stitching", "Ideal for t-shirts", "Stretch fabrics", "Professional finishing"],
  },
  {
    slug: "buttonhole-machine",
    name: "Buttonhole Machine",
    category: "Buttonhole Machines",
    image: images.buttonhole,
    description:
      "Automatic buttonhole machine engineered for heavy-duty, repeatable factory production.",
    newPrice: "KSh 100,000 – 120,000",
    availability: "On Order",
    features: ["Automatic buttonholes", "Heavy-duty", "Factory production", "Consistent quality"],
  },
  {
    slug: "embroidery-machine",
    name: "Computerized Embroidery Machine",
    category: "Embroidery Machines",
    image: images.embroidery,
    description:
      "Computerized embroidery machine for logos, branding and multi-colour designs. Commercial models available on order.",
    newPrice: "From KSh 70,000",
    availability: "On Order",
    features: ["Computerized embroidery", "Logo stitching", "Multi-color embroidery", "Commercial models available"],
  },
];

export const categories = [
  {
    name: "Domestic Machines",
    description: "Home and student machines that are simple, sturdy and easy to maintain.",
    image: images.domestic,
  },
  {
    name: "Industrial Machines",
    description: "High-speed lockstitch and direct-drive machines for production sewing.",
    image: images.jukiRow,
  },
  {
    name: "Overlock Machines",
    description: "3, 4 and 5-thread overlockers for clean professional edge finishing.",
    image: images.siruba,
  },
  {
    name: "Embroidery Machines",
    description: "Computerized embroidery for logos, branding and multi-colour work.",
    image: images.embroidery,
  },
  {
    name: "Flatlock Machines",
    description: "Coverstitch machines for hems on t-shirts and stretch fabrics.",
    image: images.flatlock,
  },
  {
    name: "Buttonhole Machines",
    description: "Automatic buttonhole and bar-tack machines for factory output.",
    image: images.buttonhole,
  },
  {
    name: "Accessories",
    description: "Tables, stands, LED lamps, servo motors, scissors and cutting tools.",
    image: images.jackShowroom,
  },
  {
    name: "Spare Parts",
    description: "Genuine needles, bobbins, hooks, belts, feet and motors in stock.",
    image: images.spareParts,
  },
];

export const services = [
  { title: "Sewing Machine Sales", icon: "ShoppingBag", description: "New and refurbished domestic and industrial machines, supplied countrywide." },
  { title: "Machine Repairs", icon: "Wrench", description: "Fast diagnosis and repair for all major brands, in workshop or on site." },
  { title: "Machine Maintenance", icon: "Settings", description: "Scheduled servicing contracts that keep production lines running." },
  { title: "Installation", icon: "PlugZap", description: "Table assembly, motor fitting, timing and testing at your premises." },
  { title: "Spare Parts", icon: "Cog", description: "Genuine needles, hooks, bobbins, belts, feet and motors always in stock." },
  { title: "Technical Support", icon: "Headset", description: "Phone and WhatsApp support from technicians who know your machine." },
  { title: "Machine Training", icon: "GraduationCap", description: "Practical operator training for beginners, tailors and factory teams." },
  { title: "Home & Business Delivery", icon: "Truck", description: "Door-to-door delivery to every county in Kenya." },
];

export const whyChooseUs = [
  { title: "Genuine Machines", icon: "BadgeCheck", description: "Sourced from authorised suppliers — no imitations." },
  { title: "Affordable Prices", icon: "Tag", description: "Honest pricing with new and refurbished options." },
  { title: "Expert Technicians", icon: "Wrench", description: "Over a decade of hands-on industrial experience." },
  { title: "Fast Repairs", icon: "Zap", description: "Most common faults fixed the same day." },
  { title: "Warranty Support", icon: "ShieldCheck", description: "Every machine sold is covered and backed up." },
  { title: "Countrywide Delivery", icon: "Truck", description: "Nairobi, Mombasa, Kisumu, Eldoret and beyond." },
  { title: "Friendly Service", icon: "HeartHandshake", description: "Advice first — we help you buy the right machine." },
  { title: "Trusted by Tailors", icon: "Users", description: "500+ customers from home sewers to factories." },
];

export const testimonials = [
  {
    name: "Grace Wanjiru",
    role: "Tailor, Nakuru",
    quote:
      "I bought a refurbished Juki lockstitch and it has run daily for two years without trouble. The delivery to Nakuru was quick and the price was fair.",
  },
  {
    name: "Brian Otieno",
    role: "Production Manager, Nairobi",
    quote:
      "They installed eight Jack F5 machines in our factory and trained our operators. Downtime dropped and the servicing team responds the same day.",
  },
  {
    name: "Amina Hassan",
    role: "Fashion Designer, Mombasa",
    quote:
      "The Siruba overlock gives my knitwear a proper factory finish. They also stock the needles and hooks I need, which is rare.",
  },
  {
    name: "Peter Kimani",
    role: "Tailoring School Owner, Thika",
    quote:
      "We equipped our whole class with Butterfly machines. Sturdy, affordable and the technicians came to service them for free after three months.",
  },
];

export const faqs = [
  { q: "Do you sell refurbished machines?", a: "Yes. Every refurbished machine is stripped, cleaned, re-timed and tested by our technicians before sale, and comes with a service warranty." },
  { q: "Do you offer delivery?", a: "We deliver countrywide. Nairobi deliveries are usually same or next day; upcountry orders go by courier or bus parcel service." },
  { q: "Can I pay on delivery?", a: "Yes, for deliveries within Nairobi. For upcountry orders we ask for a deposit and the balance on delivery. M-Pesa, cash and bank transfer are accepted." },
  { q: "Do you repair machines?", a: "We repair domestic and industrial machines of all major brands — Juki, Jack, Siruba, Kansai, Butterfly, Brother and more, in our workshop or on site." },
  { q: "Do you sell spare parts?", a: "We stock genuine needles, bobbins, rotary hooks, belts, presser feet, servo motors and electrical parts for the machines we sell." },
  { q: "Do you provide training?", a: "Yes. We offer practical operator training for beginners and factory teams, either at our showroom or at your premises." },
];

export const posts = [
  { slug: "best-sewing-machines-for-beginners", title: "Best Sewing Machines for Beginners in Kenya", excerpt: "Start with a machine you can actually maintain. Here is what we recommend for first-time sewers and students.", date: "12 June 2026", readTime: "6 min read", category: "Buying Guide", image: images.domestic },
  { slug: "how-to-maintain-your-machine", title: "How to Maintain Your Sewing Machine", excerpt: "Simple daily and weekly routines — oiling, lint removal and needle changes — that double the life of your machine.", date: "28 May 2026", readTime: "5 min read", category: "Maintenance", image: images.spareParts },
  { slug: "industrial-vs-domestic", title: "Industrial vs Domestic Machines: Which Do You Need?", excerpt: "Speed, cost, power draw and durability compared, so you buy for the work you actually do.", date: "9 May 2026", readTime: "7 min read", category: "Comparison", image: images.jukiRow },
  { slug: "choosing-the-right-machine", title: "Choosing the Right Sewing Machine", excerpt: "Fabric type, output volume and budget — a practical checklist before you spend a shilling.", date: "21 April 2026", readTime: "6 min read", category: "Buying Guide", image: images.jack },
  { slug: "common-sewing-machine-problems", title: "5 Common Sewing Machine Problems and Fixes", excerpt: "Skipped stitches, thread breaks and noisy motors — what causes them and when to call a technician.", date: "3 April 2026", readTime: "8 min read", category: "Repairs", image: images.kansaiHead },
];

export const galleryImages = [
  { src: images.jukiRow, alt: "Rows of new industrial lockstitch machines in our warehouse" },
  { src: images.jackShowroom, alt: "Jack F5 direct-drive machine on display in the showroom" },
  { src: images.mss, alt: "Refurbished industrial machine heads ready for dispatch" },
  { src: images.kansai, alt: "Kansai Special multi-needle machine threaded for testing" },
  { src: images.domestic, alt: "Domestic zigzag sewing machine wrapped for delivery" },
  { src: images.kansaiHead, alt: "Close-up of a Kansai Special sewing head under service" },
  { src: images.butterfly, alt: "Butterfly manual sewing machine with wooden table and treadle stand" },
  { src: images.siruba, alt: "Siruba overlock machine with digital control panel" },
  { src: images.juki, alt: "Juki DDL lockstitch machine head" },
  { src: images.spareParts, alt: "Genuine sewing machine spare parts laid out on a workbench" },
];
