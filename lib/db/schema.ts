import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const media = sqliteTable("media", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  year: integer("year").notNull(),
  type: text("type").notNull(), // "movie" | "tv-show"
  genre: text("genre").notNull(), // JSON array
  rating: real("rating").notNull(),
  posterUrl: text("poster_url").notNull(),
  backdropUrl: text("backdrop_url").notNull(),
  overview: text("overview").notNull(),
  director: text("director"),
  creator: text("creator"),
  seasons: integer("seasons"),
  runtime: text("runtime"),
});

export const foodPairings = sqliteTable("food_pairings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  mediaId: text("media_id")
    .notNull()
    .unique()
    .references(() => media.id),
  items: text("items").notNull(), // JSON array of FoodSuggestion
  generatedAt: text("generated_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});
