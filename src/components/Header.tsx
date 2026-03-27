import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-border px-5 py-4">
      <Link to="/" className="text-xl font-semibold tracking-tight text-text-heading no-underline">
        cinemenu
      </Link>
      <nav className="flex gap-4">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `text-sm no-underline transition-colors ${isActive ? "text-accent" : "text-text hover:text-text-heading"}`
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/tv-shows"
          className={({ isActive }) =>
            `text-sm no-underline transition-colors ${isActive ? "text-accent" : "text-text hover:text-text-heading"}`
          }
        >
          TV Shows
        </NavLink>
      </nav>
    </header>
  );
}
