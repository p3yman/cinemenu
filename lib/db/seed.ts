import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { media, foodPairings } from "./schema";
import {
  movies,
  tvShows,
  getFoodPairing,
} from "../data/fake-data";

const dbPath = process.env.DB_PATH ?? "cinemenu.db";
const sqlite = new Database(dbPath);
sqlite.pragma("journal_mode = WAL");

// Create tables
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS media (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    year INTEGER NOT NULL,
    type TEXT NOT NULL,
    genre TEXT NOT NULL,
    rating REAL NOT NULL,
    poster_url TEXT NOT NULL,
    backdrop_url TEXT NOT NULL,
    overview TEXT NOT NULL,
    director TEXT,
    creator TEXT,
    seasons INTEGER,
    runtime TEXT
  );

  CREATE TABLE IF NOT EXISTS food_pairings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    media_id TEXT NOT NULL UNIQUE REFERENCES media(id),
    items TEXT NOT NULL,
    generated_at TEXT NOT NULL
  );
`);

const db = drizzle(sqlite, { schema: { media, foodPairings } });

// Clear existing data
sqlite.exec("DELETE FROM food_pairings");
sqlite.exec("DELETE FROM media");

const allMedia = [...movies, ...tvShows];

// Insert media
for (const item of allMedia) {
  db.insert(media)
    .values({
      id: item.id,
      slug: item.slug,
      title: item.title,
      year: item.year,
      type: item.type,
      genre: JSON.stringify(item.genre),
      rating: item.rating,
      posterUrl: item.posterUrl,
      backdropUrl: item.backdropUrl,
      overview: item.overview,
      director: item.director ?? null,
      creator: item.creator ?? null,
      seasons: item.seasons ?? null,
      runtime: item.runtime ?? null,
    })
    .run();
}

// Insert food pairings
for (const item of allMedia) {
  const pairing = getFoodPairing(item.id);
  if (pairing) {
    db.insert(foodPairings)
      .values({
        mediaId: pairing.mediaId,
        items: JSON.stringify(pairing.items),
        generatedAt: new Date().toISOString(),
      })
      .run();
  }
}

console.log(
  `Seeded ${allMedia.length} media items and ${allMedia.length} food pairings`,
);
sqlite.close();
