import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { images, site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/spare-parts")({
  head: () => ({
    meta: [
      { title: "Genuine Sewing Machine Spare Parts in Kenya | SewMachine" },
      {
        name: "description",
        content:
          "Genuine needles, bobbins, rotary hooks, belts, presser feet, servo motors and electrical spares for Juki, Jack, Siruba, Kansai and Butterfly machines.",
      },
      { property: "og:title", content: "Genuine Sewing Machine Spare Parts in Kenya" },
      {
        property: "og:description",
        content:
          "Needles, hooks, bobbins, belts, feet and motors in stock for domestic and industrial sewing machines.",
      },
    ],
  }),
  component: SparePartsPage,
});

const partGroups = [
  {
    title: "Needles & Bobbins",
    items: ["DBx1 / DPx5 industrial needles", "Domestic HAx1 needles", "Steel & aluminium bobbins", "Bobbin cases"],
    price: "From KSh 50",
  },
  {
    title: "Hooks & Feed",
    items: ["Rotary hooks", "Feed dogs", "Needle plates", "Loopers for overlock"],
    price: "From KSh 900",
  },
  {
    title: "Presser Feet & Attachments",
    items: ["Zipper feet", "Binder & hemmer sets", "Teflon feet", "Edge guides"],
    price: "From KSh 250",
  },
  {
    title: "Motors & Electricals",
    items: ["Servo motors", "Clutch motors", "LED work lamps", "Foot pedals & switches"],
    price: "From KSh 4,500",
  },
  {
    title: "Belts & Drive",
    items: ["V-belts", "Timing belts", "Pulleys", "Bushes & bearings"],
    price: "From KSh 350",
  },
  {
    title: "Tables, Stands & Care",
    items: ["Complete tables", "Cast-iron stands", "Machine oil", "Covers & brushes"],
    price: "From KSh 200",
  },
];

function SparePartsPage() {
  return (
    <>
      <PageHero
        eyebrow="Spare parts"
        title="Genuine Parts, Always in Stock"
        description="We keep the fast-moving parts on the shelf so your machine is not sitting idle. Bring the old part or the machine model number and we will match it."
      >
        <Button asChild variant="hero" size="lg">
          <a
            href={whatsappLink(`Hello ${site.name}, I'm looking for a spare part. Here is my machine model:`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask for a Part
          </a>
        </Button>
      </PageHero>

      <section className="shell py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.spareParts}
              alt="Genuine sewing machine spare parts laid out on a workbench"
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Why genuine matters</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground">
              Cheap parts cost more in downtime
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A counterfeit hook or a soft needle will wear your feed dog, shred thread and put your
              machine back on the bench within weeks. Everything we sell is sourced from authorised
              suppliers and fitted correctly if you want us to do it.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {["Authorised suppliers only", "Fitting available in-store", "Parts for all major brands", "Countrywide courier"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-success" /> {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="What we stock"
            title="Parts by Category"
            description="Prices vary by brand and model — send us your machine model on WhatsApp for an exact quote."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partGroups.map((group, index) => (
              <Reveal key={group.title} delay={(index % 3) * 90} className="h-full">
                <article className="card-surface flex h-full flex-col p-6 hover-lift">
                  <h3 className="font-display text-lg font-bold text-foreground">{group.title}</h3>
                  <ul className="mt-4 flex-1 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" /> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-border pt-4 font-display font-bold text-primary">
                    {group.price}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
