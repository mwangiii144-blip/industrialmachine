import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { site } from "@/data/site";
import logoAsset from "@/assets/logo.png.asset.json";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const productLinks = [
  { to: "/products", label: "Domestic Machines" },
  { to: "/products", label: "Industrial Machines" },
  { to: "/products", label: "Overlock Machines" },
  { to: "/products", label: "Embroidery Machines" },
  { to: "/spare-parts", label: "Spare Parts" },
] as const;

const serviceLinks = [
  { to: "/services", label: "Sales & Supply" },
  { to: "/repairs", label: "Machine Repairs" },
  { to: "/services", label: "Maintenance" },
  { to: "/services", label: "Installation" },
  { to: "/services", label: "Operator Training" },
] as const;

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-primary-foreground/15 p-0.5">
              <img
                src={logoAsset.url}
                alt={`${site.name} logo`}
                className="size-full rounded-[10px] object-cover"
                loading="lazy"
              />
            </span>
            <span className="font-display text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-80">
            Supplying, servicing and repairing domestic and industrial sewing machines across Kenya
            since 2013. Genuine machines, honest prices and technicians who answer the phone.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 opacity-70" />
              <a href={site.phoneHref} className="hover:underline">{site.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 opacity-70" />
              <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0 opacity-70" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>

        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="Products" links={productLinks} />
        <FooterColumn title="Services" links={serviceLinks} />
      </div>

      <div className="shell border-t border-primary-foreground/15 py-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <h3 className="font-display text-base font-semibold">Newsletter</h3>
            <p className="mt-1 text-sm opacity-75">
              Machine offers, maintenance tips and new stock alerts. No spam.
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              toast.success("You're subscribed", {
                description: `We'll send offers and tips to ${email}.`,
              });
              setEmail("");
            }}
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              className="border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button type="submit" variant="hero">
              <Send className="size-4" /> Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="shell flex flex-col gap-4 border-t border-primary-foreground/15 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="opacity-75">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 transition-opacity hover:opacity-100"
            >
              {social.label}
            </a>
          ))}
          <Link to="/privacy" className="opacity-75 transition-opacity hover:opacity-100">
            Privacy Policy
          </Link>
          <Link to="/terms" className="opacity-75 transition-opacity hover:opacity-100">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { to: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold tracking-wide uppercase opacity-90">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link, index) => (
          <li key={`${link.to}-${index}`}>
            <Link to={link.to} className="opacity-75 transition-opacity hover:opacity-100">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
