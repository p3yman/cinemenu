"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Film, Tv, Loader2 } from "lucide-react";
import type { MediaItem } from "@/lib/types";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    clearTimeout(debounceRef.current);

    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
        setIsOpen(data.length > 0);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => results.length > 0 && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder="Search movies & TV shows..."
        className="w-full rounded-lg border border-border bg-bg py-2.5 pl-10 pr-10 text-sm text-text-heading placeholder:text-text outline-none transition-colors focus:border-accent-border"
      />
      {isLoading && (
        <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-text" />
      )}

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 w-full overflow-hidden rounded-lg border border-border bg-bg shadow-card">
          {results.map((item) => {
            const href =
              item.type === "movie"
                ? `/movies/${item.slug}`
                : `/tv-shows/${item.slug}`;
            return (
              <Link
                key={item.id}
                href={href}
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
                className="flex items-center gap-3 px-4 py-3 text-sm no-underline transition-colors hover:bg-social-bg"
              >
                {item.type === "movie" ? (
                  <Film className="h-4 w-4 shrink-0 text-text" />
                ) : (
                  <Tv className="h-4 w-4 shrink-0 text-text" />
                )}
                <span className="text-text-heading">{item.title}</span>
                <span className="ml-auto text-xs text-text">{item.year}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
