import { eq, like, sql } from "drizzle-orm";
import { unstable_cache } from "next/cache";
import { db } from "./client";
import { media, foodPairings } from "./schema";
import type { MediaItem, FoodPairing, FoodSuggestion } from "../types";

function rowToMediaItem(row: typeof media.$inferSelect): MediaItem {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    year: row.year,
    type: row.type as MediaItem["type"],
    genre: JSON.parse(row.genre) as string[],
    rating: row.rating,
    posterUrl: row.posterUrl,
    backdropUrl: row.backdropUrl,
    overview: row.overview,
    director: row.director ?? undefined,
    creator: row.creator ?? undefined,
    seasons: row.seasons ?? undefined,
    runtime: row.runtime ?? undefined,
  };
}

function rowToFoodPairing(
  row: typeof foodPairings.$inferSelect,
): FoodPairing {
  return {
    mediaId: row.mediaId,
    items: JSON.parse(row.items) as FoodSuggestion[],
  };
}

// --- Cached queries ---

export const getMovies = unstable_cache(
  async (): Promise<MediaItem[]> => {
    const rows = await db
      .select()
      .from(media)
      .where(eq(media.type, "movie"))
      .orderBy(media.title);
    return rows.map(rowToMediaItem);
  },
  ["all-movies"],
  { revalidate: 60, tags: ["media"] },
);

export const getTvShows = unstable_cache(
  async (): Promise<MediaItem[]> => {
    const rows = await db
      .select()
      .from(media)
      .where(eq(media.type, "tv-show"))
      .orderBy(media.title);
    return rows.map(rowToMediaItem);
  },
  ["all-tv-shows"],
  { revalidate: 60, tags: ["media"] },
);

export const getFeaturedMovies = unstable_cache(
  async (): Promise<MediaItem[]> => {
    const rows = await db
      .select()
      .from(media)
      .where(eq(media.type, "movie"))
      .limit(3);
    return rows.map(rowToMediaItem);
  },
  ["featured-movies"],
  { revalidate: 60, tags: ["media"] },
);

export const getFeaturedTvShows = unstable_cache(
  async (): Promise<MediaItem[]> => {
    const rows = await db
      .select()
      .from(media)
      .where(eq(media.type, "tv-show"))
      .limit(3);
    return rows.map(rowToMediaItem);
  },
  ["featured-tv-shows"],
  { revalidate: 60, tags: ["media"] },
);

export const getMediaBySlug = unstable_cache(
  async (slug: string): Promise<MediaItem | undefined> => {
    const rows = await db
      .select()
      .from(media)
      .where(eq(media.slug, slug))
      .limit(1);
    return rows[0] ? rowToMediaItem(rows[0]) : undefined;
  },
  ["media-by-slug"],
  { tags: ["media"] },
);

export const getFoodPairing = unstable_cache(
  async (mediaId: string): Promise<FoodPairing | undefined> => {
    const rows = await db
      .select()
      .from(foodPairings)
      .where(eq(foodPairings.mediaId, mediaId))
      .limit(1);
    return rows[0] ? rowToFoodPairing(rows[0]) : undefined;
  },
  ["food-pairing"],
  { tags: ["food-pairings"] },
);

// --- Uncached queries ---

export async function searchMedia(query: string): Promise<MediaItem[]> {
  const rows = await db
    .select()
    .from(media)
    .where(like(media.title, `%${query}%`))
    .orderBy(sql`${media.rating} desc`)
    .limit(10);
  return rows.map(rowToMediaItem);
}
