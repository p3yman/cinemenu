import { useParams, Link } from "react-router";
import { getMediaBySlug } from "../data/fake-data";

export default function TvShowDetailPage() {
  const { slug } = useParams();
  const show = slug ? getMediaBySlug(slug) : undefined;

  if (!show) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl">TV Show not found</h1>
        <Link to="/tv-shows" className="text-accent">
          Back to TV shows
        </Link>
      </div>
    );
  }

  return (
    <article>
      <div className="overflow-hidden rounded-lg bg-social-bg">
        <img
          src={show.backdropUrl}
          alt={show.title}
          className="h-48 w-full object-cover"
        />
      </div>

      <div className="mt-5">
        <h1 className="m-0 text-3xl">{show.title}</h1>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-text">
          <span>{show.year}</span>
          <span>·</span>
          <span>
            {show.seasons} season{show.seasons !== 1 ? "s" : ""}
          </span>
          <span>·</span>
          <span>{show.genre.join(", ")}</span>
          <span className="ml-auto">★ {show.rating}</span>
        </div>

        {show.creator && (
          <p className="mt-3 text-sm text-text">
            Created by{" "}
            <span className="text-text-heading">{show.creator}</span>
          </p>
        )}

        <p className="mt-4 leading-relaxed">{show.overview}</p>
      </div>
    </article>
  );
}
