import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, Scissors } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/spare-parts", label: "Spare Parts" },
  { to: "/repairs", label: "Repairs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/90 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-background/70 backdrop-blur"
      }`}
    >
      <div className="hidden bg-primary text-primary-foreground lg:block">
        <div className="shell flex h-9 items-center justify-between text-xs">
          <p className="opacity-90">Genuine machines • Countrywide delivery • Warranty on every sale</p>
          <a href={site.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:underline">
            <Phone className="size-3.5" /> {site.phone}
          </a>
        </div>
      </div>

      <nav className="shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-18">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-soft">
            <Scissors className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight font-bold text-foreground">
              {site.name}
            </span>
            <span className="hidden truncate text-[11px] text-muted-foreground sm:block">
              {site.tagline}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          <ul className="hidden items-center xl:flex">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-primary bg-accent" }}
                  className="rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Get a Quote</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetTitle className="border-b border-border px-6 py-5 font-display text-lg">
                {site.name}
              </SheetTitle>
              <ul className="flex flex-col p-4">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: link.to === "/" }}
                      activeProps={{ className: "text-primary bg-accent" }}
                      className="block rounded-lg px-3 py-3 font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-4">
                <Button asChild variant="hero" className="w-full">
                  <a href={site.phoneHref}>Call {site.phone}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
