"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import type { MediaItem } from "@/lib/types";

export default function MediaCard({ item }: { item: MediaItem }) {
  const href =
    item.type === "movie"
      ? `/movies/${item.slug}`
      : `/tv-shows/${item.slug}`;

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-border bg-bg no-underline transition-all duration-200 hover:scale-[1.03] hover:shadow-card"
    >
      <div className="aspect-[2/3] overflow-hidden bg-social-bg">
        <img
          src={item.posterUrl}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h3 className="m-0 text-sm font-medium text-text-heading">
          {item.title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-text">
          <span>{item.year}</span>
          <span>·</span>
          <span>{item.genre[0]}</span>
          <span className="ml-auto flex items-center gap-0.5">
            <Star className="h-3 w-3 fill-current text-amber-400" />
            {item.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
