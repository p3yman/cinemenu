import { useState } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-md">
      <svg
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies & TV shows..."
        className="w-full rounded-lg border border-border bg-bg py-2.5 pl-10 pr-4 text-sm text-text-heading placeholder:text-text outline-none transition-colors focus:border-accent-border"
      />
    </div>
  );
}
