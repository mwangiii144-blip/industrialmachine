import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { useCountUp } from "@/hooks/use-reveal";
import {
  categories,
  faqs,
  galleryImages,
  posts,
  products,
  services,
  site,
  whatsappLink,
  whyChooseUs,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SewPro Kenya | Sewing Machines, Spare Parts & Repairs" },
      {
        name: "description",
        content:
          "Buy new and refurbished Juki, Jack, Siruba, Kansai and Butterfly sewing machines in Kenya. Genuine spare parts, expert repairs, training and countrywide delivery.",
      },
      { property: "og:title", content: "SewPro Kenya | Sewing Machines, Spare Parts & Repairs" },
      {
        property: "og:description",
        content:
          "New and refurbished domestic and industrial sewing machines with genuine spares, repairs and countrywide delivery across Kenya.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <GalleryPreview />
      <Faq />
      <BlogPreview />
      <ContactCta />
    </>
  );
}

function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.25, 140));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={heroImage}
          alt="Modern tailoring workshop lined with industrial sewing machines"
          width={1920}
          height={1088}
          className="h-[125%] w-full object-cover"
          style={{ transform: `translate3d(0, -${offset}px, 0)` }}
        />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-hero" />

      <div className="shell relative py-20 text-primary-foreground sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">New & refurbished • Nationwide delivery</span>
            <h1 className="mt-4 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
              Quality Sewing Machines for Every Need
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">
              Supply of new and refurbished sewing machines for homes, tailoring businesses,
              fashion designers, and garment factories throughout Kenya.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/products">
                  Shop Machines <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <a
                  href={whatsappLink(`Hello ${site.name}, I would like a quote for a sewing machine.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Quote
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "500+ Happy Customers", note: "Across all 47 counties" },
            { title: "New & Refurbished", note: "Machines for every budget" },
            { title: "Genuine Spare Parts", note: "Always in stock" },
            { title: "Repair Services", note: "Workshop & on-site" },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 110}>
              <div className="float-y rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 backdrop-blur-md" style={{ animationDelay: `${index * 0.6}s` }}>
                <p className="font-display text-lg font-bold">{item.title}</p>
                <p className="mt-1 text-sm opacity-80">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Happy customers" },
  { value: 13, suffix: " yrs", label: "In the trade" },
  { value: 9, suffix: "", label: "Machine categories" },
  { value: 47, suffix: "", label: "Counties served" },
];

function Stats() {
  return (
    <section className="shell -mt-10 sm:-mt-12">
      <div className="card-surface grid grid-cols-2 gap-6 p-8 shadow-card lg:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div className="text-center">
      <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
        <span ref={ref}>{current}</span>
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function Categories() {
  return (
    <section className="shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Browse by category"
        title="Featured Categories"
        description="From a first machine for a student to a full production line, every category below is stocked, serviced and supported by our own technicians."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <Reveal key={category.name} delay={(index % 4) * 80} className="h-full">
            <article className="card-surface group flex h-full flex-col overflow-hidden hover-lift">
              <div className="overflow-hidden bg-muted">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-bold text-foreground">{category.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <Button asChild variant="ghost" size="sm" className="mt-4 self-start px-0 text-primary">
                  <Link to="/products">
                    Explore <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="bg-muted/60 py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Product catalog"
          title="Machines in Stock Right Now"
          description="Every price below is the walk-in showroom price. Refurbished machines are stripped, re-timed and tested before they leave us."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product, index) => (
            <Reveal key={product.slug} delay={(index % 3) * 90} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/products">
              View Full Catalog <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="What we do"
        title="Sales, Service and Everything After"
        description="We do not disappear after the sale. Installation, servicing, spares and operator training are all handled in-house."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={(index % 4) * 80} className="h-full">
            <article className="card-surface flex h-full flex-col p-6 hover-lift">
              <span className="grid size-12 place-items-center rounded-xl bg-accent text-primary">
                <Icon name={service.icon} className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why choose us</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Eight Reasons Tailors Keep Coming Back
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 4) * 80} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1.5 hover:bg-primary-foreground/15">
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                  <Icon name={reason.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Customer stories"
        title="Trusted by Tailors Across Kenya"
        description="Home sewers, fashion houses and garment factories — here is what they say about buying and servicing with us."
      />
      <TestimonialCarousel />
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="bg-muted/60 py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Our Showroom & Workshop"
          description="Fresh stock, machines under service and customer installations."
        />
        <div className="mt-12">
          <GalleryGrid images={galleryImages.slice(0, 6)} />
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/gallery">
              See Full Gallery <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="shell py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Still unsure? Call or WhatsApp us — we would rather talk you into the right machine than sell you the wrong one."
        />
        <Reveal>
          <Accordion type="single" collapsible className="card-surface px-5">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left font-display text-base font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="bg-muted/60 py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="From the blog"
          title="Guides, Tips and Machine Know-How"
          description="Written by our technicians from what they see on the bench every day."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <Reveal key={post.slug} delay={(index % 3) * 90} className="h-full">
              <article className="card-surface group flex h-full flex-col overflow-hidden hover-lift">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="aspect-16/10 w-full bg-muted object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-5">
                  <span className="eyebrow text-[10px]">{post.category}</span>
                  <h3 className="mt-2 font-display text-base font-bold text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {post.date} • {post.readTime}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">
              Read the Blog <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="shell py-20 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 text-primary-foreground sm:p-12">
          <div aria-hidden className="absolute -top-20 -right-16 size-72 rounded-full bg-secondary/25 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to buy or need a repair?</h2>
              <p className="mt-3 max-w-xl opacity-85">
                Tell us what you sew and your budget. We will recommend the right machine, quote you
                honestly and deliver it to your door.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {["Free buying advice", "Same-day Nairobi delivery", "Warranty on every machine", "M-Pesa accepted"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm opacity-90">
                      <Check className="size-4 shrink-0 text-secondary" /> {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={site.phoneHref}>
                  <Phone className="size-4" /> {site.phone}
                </a>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/contact">Send a Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
