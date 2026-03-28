import type { Metadata } from "next";
import MediaCard from "@/components/MediaCard";
import { getMovies } from "@/lib/db/queries";

export const metadata: Metadata = { title: "Movies | cinemenu" };

export default async function MoviesPage() {
  const movies = await getMovies();

  return (
    <>
      <h1 className="text-3xl">Movies</h1>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {movies.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
