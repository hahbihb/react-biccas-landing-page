import { Activity, ChartPie, Handshake } from "lucide-react";

export const about = [
  {
    id: "0",
    icon: "/images/feature-1.png",
    title: "Publishing",
    text: "Plan, collaborate, and publishing your contetn that drives meaningful engagement and growth for your brand",
    icon: <Activity size={20} />,
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    title: "Analytics",
    text: "Analyze your performance and create georgeous reports",
    icon: <ChartPie size={20} />,
  },
  {
    id: "2",
    icon: "/images/feature-3.png",
    title: "Engagement",
    text: "Quickly navigate and engage you with your audience",
    icon: <Handshake size={20} />,
  },
];

export const features = [
  {
    id: "0",
    picture: "/features-img-1.png",
    title: "Collaboration teams",
    desc: "Collaborate with your team in real time and keep everyone in the loop",
  },
  {
    id: "1",
    picture: "/features-img-2.png",
    title: "Cloud Storage",
    desc: "No nedd to worry about storage because we provide storage up to 2 TB",
  },
  {
    id: "2",
    picture: "/features-img-3.png",
    title: "Daily Analytics",
    desc: "Get detailed insights on how your content is performing",
  },
];

export const plans = [
  {
    id: "0",
    title: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    caption: "Have a go  and test your  superpowers",
    features: [
      "1GB Cloud storage",
      "2 Users",
      "2 Files",
      "Public Share & Comments",
      "Chat Support",
      "New Income Apps",
    ],
    btnText: "Sign Up For Free",
  },
  {
    id: "1",
    title: "Pro",
    priceMonthly: 10,
    priceYearly: 8,
    caption: "Experiment the power of infinite possibilities",
    features: [
      "All Starter features",
      "100GB additional storage",
      "4 Users",
      "All Apps",
      "Unlimited Editable exports",
      "Folders and Collaboration",
      "All incoming Apps",
    ],
    btnText: "Subscribe to Pro",
  },
  {
    id: "2",
    title: "Business",
    priceMonthly: 18,
    priceYearly: 14,
    caption: "Unveil new superpowers and join the Design Leaque",
    features: [
      "All the features of pro plan",
      "Unlimited storage",
      "Account Success Manager",
      "Single Sign-On (SSO)",
      "CO-Conception program",
      "Real-Time Collaboration",
    ],
    btnText: "Subscribe to Business",
  },
];

export const testimonials = [
  {
    id: "0",
    name: "Jessica Saunders",
    role: "Globalnomads",
    avatarUrl: "/testimonial-img-1.png",
    comment:
      "Biccas's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  },
  {
    id: "1",
    name: "Mark Erixon",
    role: "Vid capital intl",
    avatarUrl: "/testimonial-img-2.png",
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: "2",
    name: "Melanie Hurst",
    role: "Cyberleap",
    avatarUrl: "/testimonial-img-3.png",
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: "3",
    name: "Alicia Barker",
    role: "Cyberleap",
    avatarUrl: "/testimonial-img-4.png",
    comment:
      "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  },
];
