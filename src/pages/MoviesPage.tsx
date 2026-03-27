import MediaCard from "../components/MediaCard";
import { getMovies } from "../data/fake-data";

const movies = getMovies();

export default function MoviesPage() {
  return (
    <>
      <h1 className="text-3xl">Movies</h1>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {movies.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
