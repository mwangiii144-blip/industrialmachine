import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | SewMachine Showroom & Workshop" },
      {
        name: "description",
        content:
          "Photos of our sewing machine showroom, new stock, refurbished machines, repairs in progress and customer installations across Kenya.",
      },
      { property: "og:title", content: "Gallery | SewMachine Showroom & Workshop" },
      {
        property: "og:description",
        content: "Industrial and domestic machines, workshop photos and customer installations.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Machines, Workshop & Customer Projects"
        description="A look at the stock on our floor, the machines on our benches and the setups we have delivered. Click any photo to view it full size."
      />
      <section className="shell py-14 sm:py-20">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}
