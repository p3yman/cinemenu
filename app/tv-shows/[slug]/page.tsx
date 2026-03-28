import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMediaBySlug, getFoodPairing, getTvShows } from "@/lib/db/queries";
import MediaDetail from "@/components/MediaDetail";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const shows = await getTvShows();
  return shows.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const show = await getMediaBySlug(slug);
  return {
    title: show ? `${show.title} | cinemenu` : "Not Found | cinemenu",
  };
}

export default async function TvShowDetailPage({ params }: Props) {
  const { slug } = await params;
  const show = await getMediaBySlug(slug);

  if (!show || show.type !== "tv-show") {
    notFound();
  }

  const foodPairing = await getFoodPairing(show.id);

  return <MediaDetail item={show} foodPairing={foodPairing} />;
}
