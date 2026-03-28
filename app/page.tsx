import Link from "next/link";
import SearchInput from "@/components/SearchInput";
import MediaCard from "@/components/MediaCard";
import { getFeaturedMovies, getFeaturedTvShows } from "@/lib/db/queries";

export default async function HomePage() {
  const [featuredMovies, featuredTvShows] = await Promise.all([
    getFeaturedMovies(),
    getFeaturedTvShows(),
  ]);

  return (
    <>
      <section className="flex flex-col items-center gap-4 py-16 text-center">
        <h1 className="m-0 font-hero text-5xl max-sm:text-3xl">
          🎬 What should you eat
          <br />
          while watching? 🍿
        </h1>
        <p className="text-text">
          Find the perfect meal for your next movie night.
        </p>
        <SearchInput />
      </section>

      <section className="pb-8">
        <h2>🎥 Featured Movies</h2>
        <div className="mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {featuredMovies.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link
            href="/movies"
            className="inline-block rounded-full border border-accent-border bg-accent-bg px-5 py-2 text-sm font-medium text-accent no-underline transition-colors hover:bg-accent hover:text-white"
          >
            I'll see more movies
          </Link>
        </div>
      </section>

      <section className="pb-8">
        <h2>📺 Featured TV Shows</h2>
        <div className="mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {featuredTvShows.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link
            href="/tv-shows"
            className="inline-block rounded-full border border-accent-border bg-accent-bg px-5 py-2 text-sm font-medium text-accent no-underline transition-colors hover:bg-accent hover:text-white"
          >
            More TV shows
          </Link>
        </div>
      </section>
    </>
  );
}
