import { Star, Calendar, Clock, Layers, User } from "lucide-react";
import type { MediaItem, FoodPairing } from "@/lib/types";

type Props = {
  item: MediaItem;
  foodPairing?: FoodPairing;
};

export default function MediaDetail({ item, foodPairing }: Props) {
  const mains = foodPairing?.items.filter((f) => f.category === "main") ?? [];
  const snacks = foodPairing?.items.filter((f) => f.category === "snack") ?? [];
  const typeEmoji = item.type === "movie" ? "🎬" : "📺";

  return (
    <article>
      {/* Backdrop hero */}
      <div className="relative -mx-5 -mt-6 overflow-hidden">
        <img
          src={item.backdropUrl}
          alt=""
          className="h-64 w-full object-cover max-sm:h-44"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
      </div>

      {/* Poster + title */}
      <div className="relative -mt-20 flex gap-5">
        <img
          src={item.posterUrl}
          alt={item.title}
          className="h-44 w-28 shrink-0 rounded-lg border border-border object-cover shadow-card"
        />
        <div className="mt-auto pb-1">
          <h1 className="m-0 text-2xl">
            {typeEmoji} {item.title}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-text">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {item.year}
            </span>
            {item.runtime && (
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {item.runtime}
              </span>
            )}
            {item.seasons && (
              <span className="flex items-center gap-1">
                <Layers className="h-3.5 w-3.5" /> {item.seasons} season
                {item.seasons !== 1 ? "s" : ""}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-current text-amber-400" />{" "}
              {item.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Genre pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {item.genre.map((g) => (
          <span
            key={g}
            className="rounded-full bg-accent-bg px-3 py-0.5 text-xs text-accent"
          >
            {g}
          </span>
        ))}
      </div>

      {/* Director / Creator */}
      {(item.director || item.creator) && (
        <p className="mt-3 flex items-center gap-1 text-sm text-text">
          <User className="h-3.5 w-3.5" />
          {item.director ? "Directed" : "Created"} by{" "}
          <span className="text-text-heading">
            {item.director || item.creator}
          </span>
        </p>
      )}

      {/* Overview */}
      <section className="mt-5">
        <h2>Overview</h2>
        <p className="leading-relaxed">{item.overview}</p>
      </section>

      {/* Food suggestions */}
      {foodPairing && (
        <section className="mt-8">
          <h2>🍽️ What to Eat</h2>

          {mains.length > 0 && (
            <div className="mt-4">
              <h3 className="m-0 text-sm font-semibold uppercase tracking-wide text-text">
                Main Courses
              </h3>
              <div className="mt-2 space-y-3">
                {mains.map((f) => (
                  <div
                    key={f.name}
                    className="rounded-lg border border-border bg-code-bg p-4"
                  >
                    <div className="flex items-center gap-2 font-medium text-text-heading">
                      <span className="text-xl">{f.emoji}</span>
                      {f.name}
                    </div>
                    <p className="mt-1 text-sm">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {snacks.length > 0 && (
            <div className="mt-5">
              <h3 className="m-0 text-sm font-semibold uppercase tracking-wide text-text">
                Snacks & Drinks
              </h3>
              <div className="mt-2 space-y-3">
                {snacks.map((f) => (
                  <div
                    key={f.name}
                    className="rounded-lg border border-border bg-code-bg p-4"
                  >
                    <div className="flex items-center gap-2 font-medium text-text-heading">
                      <span className="text-xl">{f.emoji}</span>
                      {f.name}
                    </div>
                    <p className="mt-1 text-sm">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
    </article>
  );
}
