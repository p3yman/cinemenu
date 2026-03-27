import MediaCard from "../components/MediaCard";
import { getTvShows } from "../data/fake-data";

const tvShows = getTvShows();

export default function TvShowsPage() {
  return (
    <>
      <h1 className="text-3xl">TV Shows</h1>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {tvShows.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
