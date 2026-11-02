export interface StoryScene {
  id: number;
  actLabel: string;
  badge: string;
  theme: string;
  title: string;
  narrative: string;
  quoteSpeaker: string;
  quote: string;
  takeaway: string;
  nextBtnLabel: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface ReflectivePillar {
  icon: string;
  title: string;
  description: string;
}

export interface BentoFeature {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface Founder {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  quote: string;
  bio: string;
  badge: string;
}

export interface PrincipleValue {
  number: string;
  title: string;
  description: string;
}
