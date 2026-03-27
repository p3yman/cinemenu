import SearchInput from "../components/SearchInput";
import MediaCard from "../components/MediaCard";
import { getFeatured } from "../data/fake-data";

const featured = getFeatured();

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 py-16 text-center">
        <h1 className="m-0 text-4xl">
          What should you eat<br />while watching?
        </h1>
        <p className="text-text">
          Find the perfect meal for your next movie night.
        </p>
        <SearchInput />
      </section>

      <section className="pb-8">
        <h2>Featured</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          {featured.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
