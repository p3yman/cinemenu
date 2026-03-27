import { useParams, Link } from "react-router";
import { getMediaBySlug } from "../data/fake-data";

export default function MovieDetailPage() {
  const { slug } = useParams();
  const movie = slug ? getMediaBySlug(slug) : undefined;

  if (!movie) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl">Movie not found</h1>
        <Link to="/movies" className="text-accent">
          Back to movies
        </Link>
      </div>
    );
  }

  return (
    <article>
      <div className="overflow-hidden rounded-lg bg-social-bg">
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          className="h-48 w-full object-cover"
        />
      </div>

      <div className="mt-5">
        <h1 className="m-0 text-3xl">{movie.title}</h1>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-text">
          <span>{movie.year}</span>
          <span>·</span>
          <span>{movie.runtime}</span>
          <span>·</span>
          <span>{movie.genre.join(", ")}</span>
          <span className="ml-auto">★ {movie.rating}</span>
        </div>

        {movie.director && (
          <p className="mt-3 text-sm text-text">
            Directed by{" "}
            <span className="text-text-heading">{movie.director}</span>
          </p>
        )}

        <p className="mt-4 leading-relaxed">{movie.overview}</p>
      </div>
    </article>
  );
}
