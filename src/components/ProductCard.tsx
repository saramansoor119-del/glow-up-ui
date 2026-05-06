import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cart";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const add = useCart((s) => s.add);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-blossom">
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-[11px] tracking-wide uppercase">
            Bestseller
          </span>
        )}
        <button
          aria-label="Add to bag"
          onClick={() => add(product)}
          className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg leading-tight">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{product.tagline}</p>
          {product.shade && (
            <p className="text-xs text-muted-foreground/70 mt-1 italic">{product.shade}</p>
          )}
        </div>
        <span className="text-sm font-medium whitespace-nowrap">${product.price}</span>
      </div>
    </motion.article>
  );
}
