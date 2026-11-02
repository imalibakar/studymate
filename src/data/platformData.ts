import { NavLink, ReflectivePillar, BentoFeature, Founder, PrincipleValue } from "@/types";

export const BRAND_ASSETS = {
  logo: "https://lh3.googleusercontent.com/aida/AEtjO1UGnplaHNFaBuykf99JNccqrlzsEb-yCENf3G_pKh6QxL7Z5i5L2EiE0z7kD5prZSOjS5rwazJ_ZWG09zx3SOf6rL1M1tD47liM8FjLFr_wpPvJ1FfVye2LeDL1G8npyq_qfHCq6A7ihcDNwynVCHiY_cFLdrxXABKy91pYBx3sC9Nx9_Zdolg98NMeACrjrwWpqJkEXMqWIFSLmL3bPA6duyB_dF5yrrYYq7gav6GZqGhR_KrCWJ4x4I8",
  heroImage: "https://lh3.googleusercontent.com/aida/AEtjO1UNZbA40xF0OxgxSbtpQ_ldB6dhnGTNs9qMd-mE9tWfP8uE65TaoGnmiwcxdCmGl02kZ0xw3ayPWaBaSCpmaoolb_Jc2Gf8FW6bF4VsITV1zE5TCOlpbamHLn8fYuExLApxh5pGg5Zk4bhSzuR0GTUNnld6rnSGRcFIbFmWJzGCixAqvkLXBBZngLkYq9W5c78NF-tHRx4hmdCj8GChK1Mrb1BVq_3q759edn_1fyf3-3XRZdf65DgYT1BZ",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero", icon: "home" },
  { label: "Our Vision", href: "#our-vision", icon: "visibility" },
  { label: "Importance of Ilm", href: "#importance-of-ilm", icon: "menu_book" },
  { label: "Story of Two Friends", href: "#story-ilm", icon: "auto_stories" },
  { label: "Co-Founders", href: "#founders", icon: "group" },
];

export const ILM_PILLARS: ReflectivePillar[] = [
  {
    icon: "light_mode",
    title: "Clarity in Practice",
    description:
      "Moving beyond rote ritual into heartfelt worship, guided by clear understanding of sacred commandments.",
  },
  {
    icon: "self_improvement",
    title: "Elevation of Character",
    description:
      "True knowledge softens the heart, refining akhlaaq (manners) toward family, teachers, and communities.",
  },
  {
    icon: "family_restroom",
    title: "Preservation for Generations",
    description:
      "Imparting an unbroken chain of truth, values, and devotion seamlessly from parents to youth.",
  },
];

export const BENTO_FEATURES: BentoFeature[] = [
  {
    icon: "menu_book",
    title: "Quran Learning",
    description:
      "A welcoming path for learners who want to build their relationship with the Quran through tajweed and understanding.",
    tag: "Foundation of recitation",
  },
  {
    icon: "school",
    title: "Learning with Trusted Ustaads",
    description:
      "A vision for learning with teachers chosen with care, authentic knowledge, and profound respect.",
    tag: "Guided mentorship",
  },
  {
    icon: "groups",
    title: "Islamic Education for Every Generation",
    description:
      "Islamic learning should remain approachable and adaptable through different stages of life, from childhood to adulthood.",
    tag: "Whole family enrichment",
  },
  {
    icon: "all_inclusive",
    title: "Lifelong Learning",
    description:
      "Encouraging consistency, curiosity, and continued spiritual growth over a lifetime.",
    tag: "Enduring spiritual journey",
  },
];

export const FOUNDERS: Founder[] = [
  {
    name: "Ali Bakar",
    role: "Co-Founder",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAViVQfODsDP5uzw41o16CXzEGbpyPctgZMjZvExYy-o7mOAIaKEFF8oSSL86_RYkYis2hhm9YYW-tcWUrzDuux0kpyStfjPWAqknGM6FYCp0dME2q6ZeYVh3VEjicyb9ja5VDlisxychBP7qFmOHffx8G83AQnLfQmXnVK9ed_joE-p5bGH8jIF8gm944CUPKMPAkvMbsTYDvWZS6ZWyvLGxzoEFJScrGXIh7E_eWlalv3Fi6izP8Wag",
    imageAlt: "Ali Bakar - Co-Founder of StudyMate",
    quote:
      "“Growing up, learning Islam shaped the way I see the world. With StudyMate, my hope is simply to make that same learning feel approachable and encouraging for children, parents, and anyone taking their first steps in knowledge.”",
    bio: "Ali cares deeply about how learners experience knowledge — ensuring lessons are taught with warmth, patience, and understanding, so that families feel supported every step of the way.",
    badge: "Learner Experience & Accessibility",
  },
  {
    name: "Md Hasil",
    role: "Co-Founder",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYit9BYHmJFfm9GTS-omwoXhVOxp4ZHcxGSjE5Xr-Hys5ziAZfcLmgjdn7a56Wpa4fxBRJGNMHBfYZmWvYsGFdRb2V-Wgn6P2C2kad_bYROrgzrccRKtGYHybwrqx6YwfQXxthGjoTwcz5x28-MUeRJuxqLGnRUB8B2PT9cQn3mH67n2o6L0lLucwMmmWGE62S0dcE0M3tI__Yeaodnre8xXwTtFNZYyMuh2_dLZrKzgzCNh-b0DnwCw",
    imageAlt: "Md Hasil - Co-Founder of StudyMate",
    quote:
      "“True learning happens when there is genuine trust between students and teachers. For me, StudyMate is about creating an environment where trusted ustaads are respected and students can learn with peace of mind.”",
    bio: "Hasil is dedicated to building StudyMate with integrity and purpose — focusing on creating a steady, dependable foundation where teachers and learners can connect with complete sincerity.",
    badge: "Trust, Community & Integrity",
  },
];

export const CORE_VALUES: PrincipleValue[] = [
  {
    number: "01",
    title: "Sincerity (Ikhlas)",
    description:
      "Approach every step of learning with sincere intentions solely for the pleasure of Allah and the illumination of the soul.",
  },
  {
    number: "02",
    title: "Trust (Amanah)",
    description:
      "Treat learners, families, and teachers with utmost care, honesty, and transparency in every educational exchange.",
  },
  {
    number: "03",
    title: "Respect (Adab)",
    description:
      "Honor knowledge, preserve the sacred dignity of teachers, and nurture every single learner with genuine gentleness.",
  },
  {
    number: "04",
    title: "Consistency (Istiqamah)",
    description:
      "Value steady, continuous effort and lifelong pursuit of knowledge over hurried completion or temporary vanity.",
  },
];
