import type { MediaItem, FoodPairing } from "../types";
export type { MediaItem, FoodPairing };

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
  {
    id: "m7",
    slug: "the-truman-show",
    title: "The Truman Show",
    year: 1998,
    type: "movie",
    genre: ["Comedy", "Drama", "Sci-Fi"],
    rating: 8.2,
    posterUrl: poster("the-truman-show"),
    backdropUrl: backdrop("the-truman-show"),
    overview:
      "An insurance salesman discovers his whole life is actually a reality TV show. As Truman Burbank starts to suspect that his perfect seaside town of Seahaven is not what it seems, he fights to discover the truth and escape the elaborate set.",
    director: "Peter Weir",
    runtime: "1h 43m",
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

export function getFeaturedMovies(): MediaItem[] {
  return movies.slice(0, 3);
}

export function getFeaturedTvShows(): MediaItem[] {
  return tvShows.slice(0, 3);
}

const foodPairings = new Map<string, FoodPairing>([
  [
    "m1",
    {
      mediaId: "m1",
      items: [
        { name: "Viennese Schnitzel", description: "Crispy golden schnitzel with a lemon wedge, just like the hotel's dining room would serve.", emoji: "🍖", category: "main" },
        { name: "Beef Goulash", description: "Rich Hungarian-style stew — the kind Gustave would approve of between adventures.", emoji: "🍲", category: "main" },
        { name: "Mendl's Courtesan au Chocolat", description: "Layered pastry tower with chocolate and cream, inspired by the film's iconic bakery.", emoji: "🧁", category: "snack" },
        { name: "Austrian Apple Strudel", description: "Flaky pastry wrapped around warm cinnamon apples. Elegant yet cozy.", emoji: "🥧", category: "snack" },
      ],
    },
  ],
  [
    "m2",
    {
      mediaId: "m2",
      items: [
        { name: "Protein Noodle Bowl", description: "Futuristic ramen-style noodles in a dark broth — dystopian comfort food.", emoji: "🍜", category: "main" },
        { name: "Grilled Synthetic Steak", description: "A perfectly seared steak. Is it real? Does it matter? Pairs well with existential questions.", emoji: "🥩", category: "main" },
        { name: "Cricket Flour Chips", description: "Crunchy protein chips — the snack of choice in 2049.", emoji: "🦗", category: "snack" },
        { name: "Whiskey on the Rocks", description: "Deckard's drink of choice. Sip slowly while contemplating memories.", emoji: "🥃", category: "snack" },
      ],
    },
  ],
  [
    "m3",
    {
      mediaId: "m3",
      items: [
        { name: "Jjapaguri (Ram-don)", description: "The iconic noodle dish from the film — instant noodles elevated with premium sirloin.", emoji: "🍝", category: "main" },
        { name: "Korean Fried Chicken", description: "Ultra-crispy double-fried chicken glazed in gochujang sauce. A class struggle in every bite.", emoji: "🍗", category: "main" },
        { name: "Tteokbokki", description: "Chewy rice cakes swimming in sweet-spicy red sauce — classic Korean street food.", emoji: "🌶️", category: "snack" },
        { name: "Honey Butter Chips", description: "Korea's most addictive snack. You won't be able to stop.", emoji: "🍯", category: "snack" },
      ],
    },
  ],
  [
    "m4",
    {
      mediaId: "m4",
      items: [
        { name: "Onigiri Rice Balls", description: "Simple, comforting rice triangles with various fillings — the food that powers Chihiro's courage.", emoji: "🍙", category: "main" },
        { name: "Steamed Pork Buns", description: "Fluffy bao buns filled with savory pork — worthy of the spirit world's finest bathhouse.", emoji: "🥟", category: "main" },
        { name: "Dango", description: "Sweet rice dumplings on a stick — the colorful treat from No-Face's feast.", emoji: "🍡", category: "snack" },
        { name: "Matcha Mochi", description: "Pillowy green tea rice cakes. Magical and chewy.", emoji: "🍵", category: "snack" },
      ],
    },
  ],
  [
    "m5",
    {
      mediaId: "m5",
      items: [
        { name: "Steak (Juicy & Delicious)", description: "Cypher's dream meal — ignorance is bliss, and this steak is phenomenal.", emoji: "🥩", category: "main" },
        { name: "Lo Mein Noodles", description: "Slippery noodles from the noodle shop in the city. Take the blue bowl or the red bowl.", emoji: "🍜", category: "main" },
        { name: "Blue Pill Candy", description: "Blueberry hard candies. Choose wisely.", emoji: "💊", category: "snack" },
        { name: "Bullet-Time Popcorn", description: "Classic buttered popcorn — dodge every kernel that falls.", emoji: "🍿", category: "snack" },
      ],
    },
  ],
  [
    "m6",
    {
      mediaId: "m6",
      items: [
        { name: "Cuban Black Beans & Rice", description: "Soulful and nourishing — the cornerstone of Miami home cooking.", emoji: "🫘", category: "main" },
        { name: "Fried Plantains with Jerk Chicken", description: "Sweet caramelized plantains alongside spiced chicken. Three acts, one plate.", emoji: "🍗", category: "main" },
        { name: "Key Lime Pie", description: "Tart and creamy — a slice of Miami on your plate.", emoji: "🥧", category: "snack" },
        { name: "Mango Slices with Tajín", description: "Fresh mango dusted with chili-lime spice. Simple and unforgettable.", emoji: "🥭", category: "snack" },
      ],
    },
  ],
  [
    "m7",
    {
      mediaId: "m7",
      items: [
        { name: "Seahaven Tuna Casserole", description: "A picture-perfect suburban casserole — sponsored by your friendly neighborhood product placement.", emoji: "🐟", category: "main" },
        { name: "All-American Meatloaf", description: "The kind of wholesome dinner Meryl would serve with a smile. Everything is fine. Everything is always fine.", emoji: "🍖", category: "main" },
        { name: "Hot Cocoa (Truman's Favorite)", description: "A warm mug of cocoa — the official drink of never leaving your hometown.", emoji: "☕", category: "snack" },
        { name: "Fiji Water & Vitamin D Gummies", description: "Stay hydrated and sun-kissed! Just like the studio lights intended.", emoji: "💧", category: "snack" },
        { name: "Unscripted Popcorn", description: "The only unscripted thing in Truman's world. Extra butter, no hidden cameras.", emoji: "🍿", category: "snack" },
      ],
    },
  ],
  [
    "t1",
    {
      mediaId: "t1",
      items: [
        { name: "Heisenburger", description: "A towering green-chile cheeseburger from New Mexico. Say my name.", emoji: "🍔", category: "main" },
        { name: "Los Pollos Hermanos Chicken", description: "Crispy fried chicken with a secret recipe. Don't ask what's in the batter.", emoji: "🍗", category: "main" },
        { name: "Blue Rock Candy", description: "Crystal-blue candy that's 99.1% pure. For educational purposes only.", emoji: "💎", category: "snack" },
        { name: "Tortilla Chips & Guac", description: "Southwestern staple. Best enjoyed while nervously watching someone knock.", emoji: "🥑", category: "snack" },
      ],
    },
  ],
  [
    "t2",
    {
      mediaId: "t2",
      items: [
        { name: "Lumon Cafeteria Meatloaf", description: "Perfectly bland institutional meatloaf. Your outie would never understand.", emoji: "🍖", category: "main" },
        { name: "Egg Bar Sandwich", description: "A clean, corporate egg sandwich. Pairs well with departmental loyalty.", emoji: "🥚", category: "main" },
        { name: "Waffle Party Waffles", description: "Crispy waffles — the ultimate Lumon reward. You've earned it.", emoji: "🧇", category: "snack" },
        { name: "Melon Bar", description: "A melon-flavored treat from the vending machine. Taste the severance.", emoji: "🍈", category: "snack" },
      ],
    },
  ],
  [
    "t3",
    {
      mediaId: "t3",
      items: [
        { name: "Italian Beef Sandwich", description: "Dripping with jus, giardiniera on top. The heart and soul of The Beef.", emoji: "🥖", category: "main" },
        { name: "Risotto al Limone", description: "Carmy's fine-dining side — silky lemon risotto that demands perfection.", emoji: "🍋", category: "main" },
        { name: "Chocolate Soufflé", description: "Marcus's masterpiece. Timing is everything — don't open the oven early.", emoji: "🍫", category: "snack" },
        { name: "Chicago-Style Hot Dog", description: "Loaded with mustard, relish, onions, sport peppers. No ketchup. Ever.", emoji: "🌭", category: "snack" },
      ],
    },
  ],
  [
    "t4",
    {
      mediaId: "t4",
      items: [
        { name: "Grilled Unagi", description: "Perfectly glazed freshwater eel over rice — a dish worthy of a feudal lord's table.", emoji: "🐟", category: "main" },
        { name: "Miso Soup with Tofu", description: "Warm, savory broth to sip between political intrigue and samurai standoffs.", emoji: "🍲", category: "main" },
        { name: "Mochi Rice Cakes", description: "Soft, chewy rice cakes — a refined treat between sword fights.", emoji: "🍡", category: "snack" },
        { name: "Sake Flight", description: "Three cups of premium sake. Drink to alliances and betrayals.", emoji: "🍶", category: "snack" },
      ],
    },
  ],
  [
    "t5",
    {
      mediaId: "t5",
      items: [
        { name: "Fish & Chips", description: "Proper British comfort food wrapped in newspaper. Fleabag would approve.", emoji: "🐟", category: "main" },
        { name: "Bangers & Mash", description: "Sausages and creamy mashed potatoes. Messy, honest, and deeply satisfying.", emoji: "🌭", category: "main" },
        { name: "Gin & Tonic", description: "The drink that gets you through awkward family dinners and hot priests.", emoji: "🍸", category: "snack" },
        { name: "Victoria Sponge Cake", description: "A slice of perfectly understated British elegance.", emoji: "🍰", category: "snack" },
      ],
    },
  ],
  [
    "t6",
    {
      mediaId: "t6",
      items: [
        { name: "Bratwurst with Sauerkraut", description: "Classic German sausage — the kind you'd eat before the apocalypse swallows your timeline.", emoji: "🌭", category: "main" },
        { name: "Kartoffelpuffer", description: "Crispy German potato pancakes with applesauce. Comfort food across all timelines.", emoji: "🥔", category: "main" },
        { name: "Black Forest Cake", description: "Dark chocolate, cherries, and cream. As layered and complex as the show's timeline.", emoji: "🍫", category: "snack" },
        { name: "Pretzel with Mustard", description: "A warm Bavarian pretzel. The perfect snack for unraveling temporal paradoxes.", emoji: "🥨", category: "snack" },
      ],
    },
  ],
]);

export function getFoodPairing(mediaId: string): FoodPairing | undefined {
  return foodPairings.get(mediaId);
}
