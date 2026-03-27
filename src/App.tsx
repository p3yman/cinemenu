import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TvShowsPage from "./pages/TvShowsPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import TvShowDetailPage from "./pages/TvShowDetailPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movies", element: <MoviesPage /> },
      { path: "/tv-shows", element: <TvShowsPage /> },
      { path: "/movies/:slug", element: <MovieDetailPage /> },
      { path: "/tv-shows/:slug", element: <TvShowDetailPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
