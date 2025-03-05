
export interface Profile {
  id: string;
  updated_at?: string | null;
  created_at?: string | null;
  username?: string | null;
  full_name?: string | null;
  avatar_url?: string | null;
  cover_url?: string | null;
  website?: string | null;
  email?: string | null;
  bio?: string | null;
  status?: string | null;
  city?: string | null;
  instagram_url?: string | null;
  relationship_status?: "single" | "dating" | "widowed" | null;
  birth_date?: string | null;
  has_active_stories?: boolean;
  has_viewed_stories?: boolean;
  phone?: string | null;
  location_id?: string | null;
  
  // Address fields
  street?: string | null;
  house_number?: string | null;
  postal_code?: string | null;
  
  // Fields for basic info update tracking
  basic_info_updated_at?: string | null;
}
