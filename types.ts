export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  company?: string;
  description: string;
  coverImage: string;
  context: string;
  dataset?: string;
  features?: string[];
  tools: string[];
  images: string[];
  repoLink?: string;
  liveLink?: string;
  downloadableFiles?: Array<{ name: string; url: string }>;
  embedUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string; // URL or icon name
}
