import type { Metadata } from "next";
import MediaCard from "@/components/MediaCard";
import { getTvShows } from "@/lib/db/queries";

export const metadata: Metadata = { title: "TV Shows | cinemenu" };

export default async function TvShowsPage() {
  const tvShows = await getTvShows();

  return (
    <>
      <h1 className="text-3xl">TV Shows</h1>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {tvShows.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
