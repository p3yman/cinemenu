import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMediaBySlug, getFoodPairing, getMovies } from "@/lib/db/queries";
import MediaDetail from "@/components/MediaDetail";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const movies = await getMovies();
  return movies.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const movie = await getMediaBySlug(slug);
  return {
    title: movie ? `${movie.title} | cinemenu` : "Not Found | cinemenu",
  };
}

export default async function MovieDetailPage({ params }: Props) {
  const { slug } = await params;
  const movie = await getMediaBySlug(slug);

  if (!movie || movie.type !== "movie") {
    notFound();
  }

  const foodPairing = await getFoodPairing(movie.id);

  return <MediaDetail item={movie} foodPairing={foodPairing} />;
}
