import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card transition-transform hover:-translate-y-1 hover:text-primary"
        >
          <ArrowUp className="size-5" />
        </button>
      ) : null}
      <a
        href={whatsappLink(`Hello ${site.name}, I would like to enquire about a sewing machine.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-success px-4 py-3 font-semibold text-success-foreground shadow-lift transition-transform hover:-translate-y-1"
      >
        <MessageCircle className="size-5" />
        <span className="hidden text-sm sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}
