import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | SewPro Kenya" },
      {
        name: "description",
        content:
          "Terms covering pricing, payment, delivery, warranty and returns for sewing machines, spare parts and repair services from SewPro Kenya.",
      },
      { property: "og:title", content: "Terms of Service | SewPro Kenya" },
      {
        property: "og:description",
        content: "Pricing, payment, delivery, warranty and returns terms.",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "Pricing",
    body: "Prices shown on this website are indicative showroom prices in Kenyan shillings and may change with stock and exchange rates. A written quote is valid for 14 days.",
  },
  {
    title: "Payment",
    body: "We accept M-Pesa, cash and bank transfer. Upcountry orders require a deposit before dispatch, with the balance payable on delivery.",
  },
  {
    title: "Delivery",
    body: "Nairobi deliveries are typically same or next day. Upcountry orders travel by courier or parcel service and delivery timelines depend on the carrier.",
  },
  {
    title: "Warranty",
    body: "New machines carry the manufacturer warranty. Refurbished machines carry a workmanship warranty from us. Warranty excludes damage from misuse, wrong voltage, or repairs by third parties.",
  },
  {
    title: "Returns",
    body: "Report any fault on arrival within 48 hours. Machines returned must be complete and in original condition. Needles, oil and consumables are non-returnable.",
  },
  {
    title: "Repairs",
    body: "Repair quotes are given after diagnosis and must be approved before work begins. Machines uncollected after 60 days may be sold to recover storage and repair costs.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated 1 July 2026. These terms apply to machines, spare parts and services purchased from us."
      />
      <section className="shell py-14 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="font-display text-xl font-bold text-foreground">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
            </article>
          ))}
          <p className="leading-relaxed text-muted-foreground">
            Need clarification? Call{" "}
            <a href={site.phoneHref} className="font-medium text-primary hover:underline">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
