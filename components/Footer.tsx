import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-5 py-6 text-center text-xs text-text">
      <p>
        Cinemenu pairs your screen time with the perfect meal.
        <br />
        No actual chefs were harmed in the making of this app.
      </p>
      <p className="mt-2 flex items-center justify-center gap-1">
        Built with <Heart className="h-3 w-3 fill-current text-accent" /> by Peyman
      </p>
    </footer>
  );
}
