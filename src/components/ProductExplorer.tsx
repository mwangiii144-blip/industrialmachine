import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/site";

export function ProductExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categoryOptions = useMemo(
    () => ["All", ...Array.from(new Set(products.map((product) => product.category)))],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.features.some((feature) => feature.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="card-surface flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
        <div className="relative min-w-0 flex-1">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search machines, brands or features…"
            aria-label="Search products"
            className="h-11 pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categoryOptions.map((option) => (
            <Button
              key={option}
              size="sm"
              variant={category === option ? "default" : "outline"}
              onClick={() => setCategory(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">
          No machines match that search. Try another brand or clear the filters.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <Reveal key={product.slug} delay={(index % 3) * 90} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
