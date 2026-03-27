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
