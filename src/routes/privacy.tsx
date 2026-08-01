import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | SewMachine" },
      {
        name: "description",
        content:
          "How SewMachine collects, uses and protects the personal information you share when enquiring about sewing machines, spares or repairs.",
      },
      { property: "og:title", content: "Privacy Policy | SewMachine" },
      {
        property: "og:description",
        content: "How we handle and protect your personal information.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "Information we collect",
    body: "We collect only what you give us: your name, phone number, email address and the details of your enquiry. We do not buy contact lists or track you across other websites.",
  },
  {
    title: "How we use it",
    body: "Your details are used to answer your enquiry, prepare quotes, arrange delivery or servicing, and — if you subscribe — to send occasional offers and maintenance tips.",
  },
  {
    title: "Sharing",
    body: "We share your delivery address with couriers only when it is needed to get your machine to you. We never sell your personal information.",
  },
  {
    title: "Retention",
    body: "Purchase and service records are kept for warranty and repair history. You may ask us to delete your marketing contact details at any time.",
  },
  {
    title: "Your rights",
    body: "Under the Kenya Data Protection Act you may request a copy of the data we hold about you, ask for corrections, or withdraw consent to marketing.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated 1 July 2026. This policy explains what we do with the information you share with us."
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
            Questions about this policy? Email{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-primary hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
