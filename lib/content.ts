import { Boxes, CreditCard, Mail, MapPin, PhoneCall, ShoppingCart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Feature = {
    title: string;
    description: string;
    bullets: string[];
    image: string;
    icon: string;
};

export type Callout = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export type Stat = {
    label: string;
    value: string;
    iconSrc: string;
};

export type FaqItem = {
    id: string;
    question: string;
    answer: string;
};

export type WhyAmezaItem = {
    title: string;
    description: string;
    icon: string;
};

export type ContactItem = {
    label: string;
    value: string;
    icon: LucideIcon;
};

type NavItem = {
    label: string;
    href: string;
};

export const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export const whyAmezaItems: WhyAmezaItem[] = [
    {
        title: "Our Mission",
        description: "To empower retailers with intelligent, integrated solutions that drive efficiency and growth.",
        icon: "/lucide_mountain-snow.png",
    },
    {
        title: "Innovation",
        description: "To empower retailers with intelligent, integrated solutions that drive efficiency and growth.",
        icon: "/lucide_rocket.png",
    },
    {
        title: "Expertise",
        description: "Deep retail industry knowledge combined with technical excellence.",
        icon: "/lucide_laptop.png",
    },
    {
        title: "Global Reach",
        description: "Serving retailers worldwide with scalable, reliable solutions.",
        icon: "/lucide_globe-2.png",
    },
];

export const features: Feature[] = [
    {
        title: "Smart Pricing Solutions",
        description: "AI-powered dynamic pricing with real-time market analysis, demand forecasting, and competitive intelligence.",
        bullets: ["Dynamic pricing", "Demand forecasting", "Competitor analysis", "Revenue optimization"],
        image: "/1.png",
        icon: "/ikonn1.png",
    },
    {
        title: "POS System",
        description: "Complete point-of-sale solutions with payment processing, customer management, and analytics.",
        bullets: ["Payment processing", "Customer management", "Sales analytics", "Multi-location support"],
        image: "/2.png",
        icon: "/ikonn2.png",
    },
    {
        title: "Inventory Management",
        description: "Automated inventory tracking with predictive analytics and supply chain optimization.",
        bullets: ["Automated tracking", "Predictive analytics", "Supply chain optimization", "Multi-channel sync"],
        image: "/3.png",
        icon: "/ikonn3.png",
    },
    {
        title: "End-to-End Solutions",
        description: "Complete retail transformation from front-end customer experience to back-end operations management.",
        bullets: ["Full-stack integration", "Scalable architecture", "Custom workflows", "Ongoing optimization"],
        image: "/4.png",
        icon: "/ikonn1.png",
    },
    {
        title: "Integration Services",
        description: "Seamless integration with existing systems and third-party applications.",
        bullets: ["API integration", "Custom solutions", "Data migration", "24/7 support"],
        image: "/5.png",
        icon: "/ikonn1.png",
    },
    {
        title: "Business Analytics",
        description: "Advanced analytics and reporting tools for data-driven business decisions.",
        bullets: ["Sales reporting", "Customer insights", "Performance metrics", "Custom dashboards"],
        image: "/6.png",
        icon: "/ikonn1.png",
    },
];

export const ctaBullets: Callout[] = [
    {
        title: "Smart Pricing",
        description: "Stay competitive with intelligent pricing that adapts to market conditions",
        icon: ShoppingCart,
    },
    {
        title: "Seamless Payments",
        description: "Accept payments effortlessly with modern checkout solutions",
        icon: CreditCard,
    },
    {
        title: "Inventory Management",
        description: "Smart tracking and automated processes",
        icon: Boxes,
    },
];

export const faqItems: FaqItem[] = [
    {
        id: "mission",
        question: "What is Ameza’s mission?",
        answer: "AMEZA is revolutionizing the retail industry with cutting-edge smart retail solutions. We deliver comprehensive systems that seamlessly integrate pricing, inventory, and point-of-sale operations to create a unified retail ecosystem that drives efficiency and growth.",
    },
    {
        id: "what-is-ameza",
        question: "What is Ameza?",
        answer: "Ameza is a unified retail system combining a modern POS, electronic shelf labels (ESL), and cloud management into one platform. No integrations. No multiple vendors. Everything works seamlessly.",
    },
    {
        id: "difference",
        question: "What makes Ameza different from other POS or ESL providers?",
        answer: "We offer one unified system—no separate POS, ESL gateway, or pricing integrations. Designed specifically for small & independent grocery stores, Ameza features an offline-capable POS, the lowest hardware costs in the industry, real-time price sync, and simple onboarding.",
    },
    {
        id: "installation",
        question: "How long does installation take?",
        answer: "Most stores can be fully installed in 3–5 hours depending on tag count. We pre-configure all hardware before shipping to make the process as fast as possible.",
    },
    {
        id: "connectivity",
        question: "How do ESL tags connect?",
        answer: "Tags use low-energy Bluetooth (BLE) to communicate with an Ameza gateway. This means no complex wiring, no repeaters, and minimal maintenance.",
    },
    {
        id: "battery-life",
        question: "How long do the tag batteries last?",
        answer: "Typically 3–5 years, depending on how frequently you update your prices.",
    },
    {
        id: "gateway-capacity",
        question: "How many ESL tags can one gateway support?",
        answer: "Each gateway supports up to 2,000 tags within a store, making it scalable for various inventory sizes.",
    },
    {
        id: "freezer-support",
        question: "Do the tags work in refrigerators or freezers?",
        answer: "Yes, we offer specific freezer-safe models that are rated for low temperatures to ensure reliability in all environments.",
    },
    {
        id: "offline-mode",
        question: "What happens if the internet goes down?",
        answer: "The POS keeps running offline, continues scanning items, and stores all data locally until the connection is restored. ESL updates sync automatically when the connection returns.",
    },
    {
        id: "integrations",
        question: "Does Ameza integrate with scales, receipt printers, and barcode scanners?",
        answer: "Yes, all standard peripherals are supported out-of-the-box. Ameza POS is built specifically for grocery environments.",
    },
    {
        id: "pricing-updates",
        question: "How is pricing updated?",
        answer: "You can update prices from the Ameza dashboard or directly on the POS terminal. All changes sync instantly to your ESL tags.",
    },
    {
        id: "cost",
        question: "How much does Ameza cost?",
        answer: "Pricing depends on the number of tags and store size. Most small grocery stores spend between $5,000–$10,000, which includes all hardware and monthly software fees.",
    },
    {
        id: "contract",
        question: "Is there a contract?",
        answer: "No, we operate on a month-to-month basis. You can cancel anytime.",
    },
    {
        id: "support",
        question: "What support is included?",
        answer: "We include 24/7 email support along with fast hardware replacement if needed.",
    },
];

export const stats: Stat[] = [
    { label: "Retail Partners", value: "50+", iconSrc: "/Vector.png" },
    { label: "Uptime", value: "99.9%", iconSrc: "/vector2.png" },
    { label: "Payments Processed", value: "$2.5M+", iconSrc: "/vector3.png" },
];

export const contactItems: ContactItem[] = [
    {
        label: "Email",
        value: "myildiz@amezasolutions.com",
        icon: Mail,
    },
    {
        label: "Phone Number",
        value: "+1 617 906 13 07",
        icon: PhoneCall,
    },
    {
        label: "Address",
        value: "3300 Wells Branch Pkwy Austin, Texas, USA",
        icon: MapPin,
    },
];

export const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
];

export const resourceLinks = [
    { label: "Why Ameza ?", href: "#why-ameza" },
    { label: "Customer Portal", href: "#" },
    { label: "FAQ", href: "#faq" },
];

export const socialLinks = [
    { name: "Facebook", src: "/facebook.png", href: "#" },
    { name: "LinkedIn", src: "/Linkedin.png", href: "https://www.linkedin.com/company/ameza-solutions/" },
];
