export type MediaType = "movie" | "tv-show";

export type MediaItem = {
  id: string;
  slug: string;
  title: string;
  year: number;
  type: MediaType;
  genre: string[];
  rating: number;
  posterUrl: string;
  backdropUrl: string;
  overview: string;
  director?: string;
  creator?: string;
  seasons?: number;
  runtime?: string;
};

export type FoodCategory = "main" | "snack";

export type FoodSuggestion = {
  name: string;
  description: string;
  emoji: string;
  category: FoodCategory;
};

export type FoodPairing = {
  mediaId: string;
  items: FoodSuggestion[];
};
