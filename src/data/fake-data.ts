import type { MediaItem } from "../types";

const poster = (slug: string) =>
  `https://picsum.photos/seed/${slug}/300/450`;
const backdrop = (slug: string) =>
  `https://picsum.photos/seed/${slug}-bg/720/300`;

export const movies: MediaItem[] = [
  {
    id: "m1",
    slug: "the-grand-budapest-hotel",
    title: "The Grand Budapest Hotel",
    year: 2014,
    type: "movie",
    genre: ["Comedy", "Drama"],
    rating: 8.1,
    posterUrl: poster("the-grand-budapest-hotel"),
    backdropUrl: backdrop("the-grand-budapest-hotel"),
    overview:
      "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's golden years under an exceptional concierge.",
    director: "Wes Anderson",
    runtime: "1h 40m",
  },
  {
    id: "m2",
    slug: "blade-runner-2049",
    title: "Blade Runner 2049",
    year: 2017,
    type: "movie",
    genre: ["Sci-Fi", "Drama"],
    rating: 8.0,
    posterUrl: poster("blade-runner-2049"),
    backdropUrl: backdrop("blade-runner-2049"),
    overview:
      "Young blade runner K's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    director: "Denis Villeneuve",
    runtime: "2h 44m",
  },
  {
    id: "m3",
    slug: "parasite",
    title: "Parasite",
    year: 2019,
    type: "movie",
    genre: ["Thriller", "Drama"],
    rating: 8.5,
    posterUrl: poster("parasite"),
    backdropUrl: backdrop("parasite"),
    overview:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    director: "Bong Joon-ho",
    runtime: "2h 12m",
  },
  {
    id: "m4",
    slug: "spirited-away",
    title: "Spirited Away",
    year: 2001,
    type: "movie",
    genre: ["Animation", "Fantasy"],
    rating: 8.6,
    posterUrl: poster("spirited-away"),
    backdropUrl: backdrop("spirited-away"),
    overview:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    director: "Hayao Miyazaki",
    runtime: "2h 5m",
  },
  {
    id: "m5",
    slug: "the-matrix",
    title: "The Matrix",
    year: 1999,
    type: "movie",
    genre: ["Sci-Fi", "Action"],
    rating: 8.7,
    posterUrl: poster("the-matrix"),
    backdropUrl: backdrop("the-matrix"),
    overview:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth — the life he knows is the elaborate deception of an evil cyber-intelligence.",
    director: "The Wachowskis",
    runtime: "2h 16m",
  },
  {
    id: "m6",
    slug: "moonlight",
    title: "Moonlight",
    year: 2016,
    type: "movie",
    genre: ["Drama"],
    rating: 7.4,
    posterUrl: poster("moonlight"),
    backdropUrl: backdrop("moonlight"),
    overview:
      "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
    director: "Barry Jenkins",
    runtime: "1h 51m",
  },
];

export const tvShows: MediaItem[] = [
  {
    id: "t1",
    slug: "breaking-bad",
    title: "Breaking Bad",
    year: 2008,
    type: "tv-show",
    genre: ["Crime", "Drama"],
    rating: 9.5,
    posterUrl: poster("breaking-bad"),
    backdropUrl: backdrop("breaking-bad"),
    overview:
      "A high school chemistry teacher diagnosed with terminal lung cancer turns to manufacturing methamphetamine to secure his family's future.",
    creator: "Vince Gilligan",
    seasons: 5,
  },
  {
    id: "t2",
    slug: "severance",
    title: "Severance",
    year: 2022,
    type: "tv-show",
    genre: ["Sci-Fi", "Thriller"],
    rating: 8.7,
    posterUrl: poster("severance"),
    backdropUrl: backdrop("severance"),
    overview:
      "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.",
    creator: "Dan Erickson",
    seasons: 2,
  },
  {
    id: "t3",
    slug: "the-bear",
    title: "The Bear",
    year: 2022,
    type: "tv-show",
    genre: ["Comedy", "Drama"],
    rating: 8.6,
    posterUrl: poster("the-bear"),
    backdropUrl: backdrop("the-bear"),
    overview:
      "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop after a heartbreaking death in his family.",
    creator: "Christopher Storer",
    seasons: 3,
  },
  {
    id: "t4",
    slug: "shogun",
    title: "Shogun",
    year: 2024,
    type: "tv-show",
    genre: ["Drama", "History"],
    rating: 8.7,
    posterUrl: poster("shogun"),
    backdropUrl: backdrop("shogun"),
    overview:
      "In Japan in the year 1600, a collision of civilizations leads to a dramatic saga of war, passion, and power.",
    creator: "Rachel Kondo & Justin Marks",
    seasons: 1,
  },
  {
    id: "t5",
    slug: "fleabag",
    title: "Fleabag",
    year: 2016,
    type: "tv-show",
    genre: ["Comedy", "Drama"],
    rating: 8.7,
    posterUrl: poster("fleabag"),
    backdropUrl: backdrop("fleabag"),
    overview:
      "A dry-witted woman, known only as Fleabag, has no filter as she navigates life and love in London while trying to cope with tragedy.",
    creator: "Phoebe Waller-Bridge",
    seasons: 2,
  },
  {
    id: "t6",
    slug: "dark",
    title: "Dark",
    year: 2017,
    type: "tv-show",
    genre: ["Sci-Fi", "Mystery"],
    rating: 8.8,
    posterUrl: poster("dark"),
    backdropUrl: backdrop("dark"),
    overview:
      "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    creator: "Baran bo Odar & Jantje Friese",
    seasons: 3,
  },
];

export const allMedia: MediaItem[] = [...movies, ...tvShows];

export function getMediaBySlug(slug: string): MediaItem | undefined {
  return allMedia.find((item) => item.slug === slug);
}

export function getMovies(): MediaItem[] {
  return movies;
}

export function getTvShows(): MediaItem[] {
  return tvShows;
}

export function getFeatured(): MediaItem[] {
  return [movies[0], tvShows[0], movies[2], tvShows[1], movies[3], tvShows[2]];
}
