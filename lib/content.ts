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
        id: "deployment",
        question: "How quickly can we deploy Ameza?",
        answer: "test",
    },
    {
        id: "support",
        question: "Do you provide onboarding and support?",
        answer: "test",
    },
    {
        id: "integration",
        question: "Can Ameza integrate with our existing tools?",
        answer: "test",
    },
];

export const stats: Stat[] = [
    { label: "Retail Partners", value: "50+", iconSrc: "/vector.png" },
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
