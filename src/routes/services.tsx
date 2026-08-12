import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { services, site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Sewing Machine Services in Kenya | Coplex Industrial Machine" },
      {
        name: "description",
        content:
          "Sales, repairs, maintenance contracts, installation, spare parts, technical support, operator training and countrywide delivery for sewing machines in Kenya.",
      },
      { property: "og:title", content: "Sewing Machine Services in Kenya | Coplex Industrial Machine" },
      {
        property: "og:description",
        content:
          "Installation, servicing, spares and operator training handled in-house by experienced technicians.",
      },
    ],
  }),
  component: ServicesPage,
});

const process = [
  { step: "01", title: "Tell us the problem", text: "Call, WhatsApp or bring the machine to our Nairobi workshop." },
  { step: "02", title: "Free diagnosis", text: "We inspect and quote before any work begins — no surprises." },
  { step: "03", title: "Repair or service", text: "Genuine parts only, with the machine tested under load." },
  { step: "04", title: "Delivery & follow-up", text: "We return the machine and check in after two weeks." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything Your Machine Will Ever Need"
        description="We supply, install, service, repair and support domestic and industrial sewing machines for tailors, schools and garment factories across Kenya."
      >
        <Button asChild variant="hero" size="lg">
          <a
            href={whatsappLink(`Hello ${site.name}, I would like to book a service.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Service
          </a>
        </Button>
        <Button asChild variant="onDark" size="lg">
          <Link to="/contact">Talk to a Technician</Link>
        </Button>
      </PageHero>

      <section className="shell py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 4) * 80} className="h-full">
              <article className="card-surface flex h-full flex-col p-6 hover-lift">
                <span className="grid size-12 place-items-center rounded-xl bg-accent text-primary">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <h2 className="mt-4 font-display text-base font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="How it works"
            title="A Simple, Honest Process"
            description="No jargon and no padded invoices — you approve the quote before we touch a screw."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 90} as="li" className="h-full">
                <div className="card-surface h-full p-6 hover-lift">
                  <span className="font-display text-3xl font-extrabold text-secondary">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/repairs">
                See Repair Services <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
