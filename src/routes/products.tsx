import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ProductExplorer } from "@/components/ProductExplorer";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Sewing Machines for Sale in Kenya | SewPro Kenya" },
      {
        name: "description",
        content:
          "Browse Juki, Jack, Siruba, Kansai, MSS and Butterfly sewing machines with new and refurbished prices in Kenyan shillings. Search and filter by category.",
      },
      { property: "og:title", content: "Sewing Machines for Sale in Kenya | SewPro Kenya" },
      {
        property: "og:description",
        content:
          "Domestic, industrial, overlock, flatlock, buttonhole and embroidery machines with transparent KSh pricing.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product catalog"
        title="Sewing Machines & Prices"
        description="Every machine below is priced in Kenyan shillings, new and refurbished where available. Search by brand or filter by category, then enquire on WhatsApp for current stock."
      />
      <section className="shell py-14 sm:py-20">
        <ProductExplorer />
      </section>
    </>
  );
}
