import { Globe, Rocket, School, Sprout, Satellite } from "lucide-react";

export const pioneers = [
  {
    name: "Dr. Vikram Sarabhai",
    role: "Father of the Indian Space Program",
    img: "sarabhai.webp",
  },
  {
    name: "Prof. Satish Dhawan",
    role: "Former Chairman, ISRO",
    img: "dhawan.jpg",
  },
  {
    name: "Dr. A. P. J. Abdul Kalam",
    role: "Missile Scientist & Former President",
    img: "kalam.jpg",
  },
  {
    name: "Dr. U. R. Rao",
    role: "Satellite Program Pioneer",
    img: "rao.jpg",
  },
  {
    name: "Dr. Nambi Narayana",
    role: "Aerospace Pioneer",
    img: "narayana.jpeg",
  },
];

export const missions = [
  {
    id: "M1",
    date: "1st Jan, 2026",
    name: "CHANDRAYAAN 3",
    status: "Completed",
    type: "Lunar",
    info: "Info Info Info Info Info ",
    img: "ch3.png",
  },
  {
    id: "M2",
    date: "1st Jan, 2026",
    name: "ADITYA-L1",
    status: "Ongoing",
    type: "Solar",
    info: "Info Info Info Info Info ",
    img: "aditya.png",
  },
  {
    id: "M3",
    date: "1st Jan, 2026",
    name: "GAGANYAAN",
    status: "Upcoming",
    type: "Spaceflight",
    info: "Info Info Info Info Info ",
    img: "gagan.png",
  },
  {
    id: "M4",
    date: "1st Jan, 2026",
    name: "NISAR",
    status: "Upcoming",
    type: "Earth Observation",
    info: "Info Info Info Info Info ",
    img: "https://images.unsplash.com/photo-1457364887197-9150188c107b",
  },
  {
    id: "M5",
    date: "1st Jan, 2026",
    name: "XPoSat",
    status: "Completed",
    type: "Space Science",
    info: "Info Info Info Info Info ",
    img: "https://images.unsplash.com/photo-1460186136353-977e9d6085a1",
  },
  {
    id: "M6",
    date: "1st Jan, 2026",
    name: "GSAT-20",
    status: "Upcoming",
    type: "Communications",
    info: "Info Info Info Info Info ",
    img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4",
  },
];

export const keyPoints = [
  { title: "54+", para: "YEARS OF SPACE EXPLORATION" },
  { title: "85%", para: "SUCCESSFUL RATE" },
  { title: "124", para: "SUCCESSFUL MISSIONS" },
  { title: "569", para: "TOTAL SATELLITES LAUNCHED" },
];

export const tabs = [
  { id: 1, tab: "Home", to: "/home" },
  { id: 2, tab: "About", to: "/about" },
  { id: 3, tab: "Missions", to: "/missions" },
  { id: 4, tab: "Careers", to: "/carreer" },
  { id: 5, tab: "Contact", to: "/contact" },
];

export const timeline = [
  {
    year: "1969",
    title: "ISRO Founded",
    description:
      "The Indian Space Research Organisation was established under the leadership of Dr. Vikram Sarabhai.",
  },
  {
    year: "1975",
    title: "Aryabhata",
    description: "India's first satellite, Aryabhata, was launched into space.",
  },
  {
    year: "2008",
    title: "Chandrayaan-1",
    description:
      "India's first lunar mission confirmed the presence of water molecules on the Moon.",
  },
  {
    year: "2014",
    title: "Mars Orbiter Mission",
    description:
      "India became the first nation to reach Mars orbit in its maiden attempt.",
  },
  {
    year: "2023",
    title: "Chandrayaan-3",
    description:
      "India became the first country to successfully land near the Moon's south pole.",
  },
];
export const vehicles = [
  { img: "pslv.png", full: "Polar Satellite Lauch Vehicle", cap: "107 Kg" },
  {
    img: "gslv.png",
    full: "Geosynchronous Satellite Launch Vehicle",
    cap: "107 Kg",
  },
  { img: "lvm3.png", full: "Launch Vehicle Mark-3", cap: "107 Kg" },
  { img: "hrlv.png", full: "Human-Rated Launch Vehicle", cap: "107 Kg" },
];

export const contributes = [
  {
    id: 1,
    title: "Disaster Management",
    para: "Providing real-time satellite data for flood, cyclone, and fire monitoring.",
    icon: <Globe size={45} strokeWidth={1.5} />,
    link: "https://share.google/KeZG2cyhpQRdv17HT",
  },
  {
    id: 2,
    title: "Tele-Education",
    para: "Connecting rural India with quality education via satellite communication.",
    icon: <School size={45} strokeWidth={1.5} />,
    link: "https://share.google/CbaWt8dUWCNxgPsoi",
  },
  {
    id: 3,
    title: "Agriculture",
    para: "Helping farmers with crop yield prediction and soil health monitoring.",
    icon: <Sprout size={45} strokeWidth={1.5} />,
    link: "https://share.google/heI1SsSDybG39a8DN",
  },
  {
    id: 4,
    title: "Navigation",
    para: "Powering NavIC, India's own Global Positioning System for precise positioning and timing.",
    icon: <Satellite size={45} strokeWidth={1.5} />,
    link: "https://share.google/r8JSJWw6Zb5y847qf",
  },
  {
    id: 5,
    title: "Defense",
    para: "Strengthening national security with usingadvanced surveillance satellites.",
    icon: <Rocket size={45} strokeWidth={1.5} />,
    link: "https://share.google/emZYbqgPcxehkmfrB",
  },
];
