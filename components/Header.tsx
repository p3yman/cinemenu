"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Film, Tv, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function Header() {
  const [dark, toggleTheme] = useTheme();
  const pathname = usePathname();

  const navLink = (href: string, label: string, icon: React.ReactNode) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");
    return (
      <Link
        href={href}
        className={`flex items-center gap-1.5 text-sm no-underline transition-colors ${isActive ? "text-accent" : "text-text hover:text-text-heading"}`}
      >
        {icon}
        {label}
      </Link>
    );
  };

  return (
    <header className="flex items-center justify-between border-b border-border px-5 py-4">
      <Link
        href="/"
        className="text-xl font-semibold tracking-tight text-text-heading no-underline"
      >
        🍿 cinemenu
      </Link>
      <nav className="flex items-center gap-4">
        {navLink("/movies", "Movies", <Film className="h-4 w-4" />)}
        {navLink("/tv-shows", "TV Shows", <Tv className="h-4 w-4" />)}
        <button
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="ml-1 rounded-lg border border-border p-1.5 text-text transition-colors hover:text-text-heading hover:bg-social-bg"
        >
          {dark ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </nav>
    </header>
  );
}
