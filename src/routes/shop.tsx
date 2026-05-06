import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, type Category } from "@/data/products";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Sakura Beauty" },
      { name: "description", content: "Browse Sakura's edit of petal-soft lipsticks, glow foundations, and blossom blushes." },
      { property: "og:title", content: "Shop — Sakura Beauty" },
      { property: "og:description", content: "Browse Sakura's edit of petal-soft lipsticks, glow foundations, and blossom blushes." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The Edit</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-2">Shop the bloom</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                active === c
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:bg-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10"
      >
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-[4/5] w-full rounded-2xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            ))
          : filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </motion.div>
    </section>
  );
}