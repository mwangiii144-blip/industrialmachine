import { useState } from "react";
import { Check, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { site, whatsappLink, type Product } from "@/data/site";

const availabilityStyles: Record<Product["availability"], string> = {
  "In Stock": "bg-success/15 text-success border-success/30",
  "Limited Stock": "bg-secondary/20 text-secondary border-secondary/40",
  "On Order": "bg-muted text-muted-foreground border-border",
};

export function ProductCard({ product }: { product: Product }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
      <div className="relative overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-4/3 w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute top-3 left-3 rounded-full border px-2.5 py-1 text-[11px] font-semibold",
            availabilityStyles[product.availability],
          )}
        >
          {product.availability}
        </span>
        <button
          type="button"
          onClick={() => setFavorite((value) => !value)}
          aria-label={favorite ? `Remove ${product.name} from favourites` : `Save ${product.name} to favourites`}
          aria-pressed={favorite}
          className="absolute top-3 right-3 grid size-9 place-items-center rounded-full border border-border bg-card/90 backdrop-blur transition-transform hover:scale-110"
        >
          <Heart
            className={cn(
              "size-4 transition-colors",
              favorite ? "fill-destructive text-destructive" : "text-muted-foreground",
            )}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="eyebrow text-[10px]">{product.category}</span>
        <h3 className="mt-2 font-display text-lg leading-snug font-bold text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4">
          <div className="min-w-0">
            <dt className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
              New price
            </dt>
            <dd className="font-display text-base leading-tight font-bold text-primary">
              {product.newPrice}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
              Refurbished
            </dt>
            <dd className="font-display text-base leading-tight font-bold text-secondary">
              {product.refurbishedPrice ?? "On request"}
            </dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild variant="success" size="sm" className="flex-1">
            <a
              href={whatsappLink(
                `Hello ${site.name}, I'm interested in the ${product.name} (${product.newPrice}). Is it available?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </Button>
          <ProductDetailsDialog product={product} />
        </div>
      </div>
    </article>
  );
}

function ProductDetailsDialog({ product }: { product: Product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex-1">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full rounded-xl border border-border bg-muted object-contain p-4"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-muted/50 p-4">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">New price</p>
            <p className="font-display text-xl font-bold text-primary">{product.newPrice}</p>
          </div>
          <div className="rounded-xl border border-border bg-muted/50 p-4">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">Refurbished price</p>
            <p className="font-display text-xl font-bold text-secondary">
              {product.refurbishedPrice ?? "On request"}
            </p>
          </div>
        </div>

        <FeatureList title="Features" items={product.features} />
        {product.models ? <FeatureList title="Popular models" items={product.models} /> : null}
        {product.bestFor ? <FeatureList title="Perfect for" items={product.bestFor} /> : null}

        <Button asChild variant="success" className="w-full">
          <a
            href={whatsappLink(`Hello ${site.name}, please send me details and pricing for the ${product.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-4" /> Enquire on WhatsApp
          </a>
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-2 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-success" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
