import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/Reveal";

type GalleryImage = { src: string; alt: string };

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {images.map((image, index) => (
          <Reveal key={image.src + index} delay={(index % 3) * 80} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(image)}
              className="group card-surface block w-full overflow-hidden hover-lift"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full bg-muted object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="block px-4 py-3 text-left text-sm text-muted-foreground">
                {image.alt}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none [&>button]:hidden">
          <DialogTitle className="sr-only">{active?.alt ?? "Gallery image"}</DialogTitle>
          {active ? (
            <figure className="overflow-hidden rounded-2xl bg-card">
              <img src={active.src} alt={active.alt} className="max-h-[75vh] w-full object-contain" />
              <figcaption className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-muted-foreground">
                {active.alt}
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border hover:text-primary"
                  aria-label="Close image viewer"
                >
                  <X className="size-4" />
                </button>
              </figcaption>
            </figure>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
