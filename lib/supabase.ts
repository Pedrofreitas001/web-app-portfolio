import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          company: string | null;
          description: string;
          cover_image: string;
          context: string;
          dataset: string | null;
          tools: string[];
          images: string[];
          repo_link: string | null;
          live_link: string | null;
          featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          category: string;
          company?: string | null;
          description: string;
          cover_image: string;
          context: string;
          dataset?: string | null;
          tools: string[];
          images: string[];
          repo_link?: string | null;
          live_link?: string | null;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          category?: string;
          company?: string | null;
          description?: string;
          cover_image?: string;
          context?: string;
          dataset?: string | null;
          tools?: string[];
          images?: string[];
          repo_link?: string | null;
          live_link?: string | null;
          featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
