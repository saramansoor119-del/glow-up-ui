import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import heroModel from "@/assets/hero-model.jpg";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakura — Quiet luxury makeup, in bloom" },
      { name: "description", content: "Petal-soft lipsticks, weightless foundations and dreamy blushes — crafted in small batches." },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-blossom" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 pb-16 sm:pb-20 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-6 sm:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/70 backdrop-blur border border-border text-[10px] sm:text-xs uppercase tracking-[0.18em]">
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary" /> Spring 2026 — In bloom
          </span>
          <h1 className="mt-4 sm:mt-6 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Beauty, <em className="text-primary not-italic">softly</em> reimagined.
          </h1>
          <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            A petal-light edit of lipsticks, second-skin foundations and dreamy blushes — crafted in small botanical batches.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium hover:bg-primary transition-colors"
            >
              Shop the collection
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/tutorials" className="text-xs sm:text-sm underline-offset-4 hover:underline">
              Watch tutorials →
            </Link>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 fill-primary text-primary" />
              ))}
              <span className="ml-2">4.9 / 25k reviews</span>
            </div>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Clean · Cruelty-free</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] rounded-xl sm:rounded-[2rem] overflow-hidden shadow-petal">
            <img
              src={heroModel}
              alt="Sakura beauty editorial"
              width={1080}
              height={1350}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-4 md:-left-10 bg-card/90 backdrop-blur border border-border rounded-lg sm:rounded-2xl px-3 sm:px-5 py-3 sm:py-4 shadow-petal max-w-[180px] sm:max-w-[220px]"
          >
            <p className="text-[10px] sm:text-xs text-muted-foreground">Bestseller</p>
            <p className="font-serif text-base sm:text-lg leading-tight mt-1">Velvet Bloom in Rosé</p>
            <p className="text-[10px] sm:text-xs mt-1">$32 · 12 shades</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedStrip() {
  const items = ["Clean formulas", "Botanical pigments", "Refillable design", "Cruelty-free", "Made in small batches"];
  return (
    <div className="border-y border-border bg-card/40 overflow-hidden">
      <div className="flex gap-6 sm:gap-8 md:gap-12 py-3 sm:py-4 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
            ✿ {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function Magazine() {
  const looks = [
    { img: look1, label: "The Edit", title: "A petal-pink ritual" },
    { img: look2, label: "Trending", title: "Soft glam in bloom" },
    { img: look3, label: "How-to", title: "Five-minute glow" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 md:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div>
          <p className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">Trending looks</p>
          <h2 className="mt-2 sm:mt-3 font-serif text-2xl sm:text-4xl md:text-5xl">In bloom this week</h2>
        </div>
        <Link to="/tutorials" className="hidden md:inline text-sm hover:underline underline-offset-4">
          See all stories →
        </Link>
      </div>
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 group relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl"
        >
          <img src={looks[0].img} alt={looks[0].title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-background">
            <p className="text-[9px] sm:text-xs uppercase tracking-[0.25em] opacity-80">{looks[0].label}</p>
            <h3 className="mt-1 sm:mt-2 font-serif text-lg sm:text-3xl md:text-4xl">{looks[0].title}</h3>
          </div>
        </motion.div>
        <div className="lg:col-span-5 grid gap-4 sm:gap-6">
          {looks.slice(1).map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl"
            >
              <img src={l.img} alt={l.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 text-background">
                <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.25em] opacity-80">{l.label}</p>
                <h3 className="mt-0.5 sm:mt-1 font-serif text-base sm:text-2xl">{l.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const featured = products.slice(0, 4);
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div>
          <p className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">The collection</p>
          <h2 className="mt-2 sm:mt-3 font-serif text-2xl sm:text-4xl md:text-5xl">Featured petals</h2>
        </div>
        <Link to="/shop" className="hidden md:inline text-sm hover:underline underline-offset-4">
          Shop everything →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-x-6 sm:gap-y-12">
        {featured.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { quote: "Velvet Bloom is the lipstick I've been searching for my whole life. Soft, weightless, devastating.", name: "Mireille A.", loc: "Paris" },
    { quote: "Silk Veil makes my skin look like it's lit from within. Genuine cult product.", name: "Hana K.", loc: "Tokyo" },
    { quote: "The packaging alone is poetry. The formulas? Unmatched.", name: "Sofia R.", loc: "Milan" },
  ];
  return (
    <section className="bg-blossom/60 py-12 sm:py-18 md:py-24 mt-8 sm:mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground text-center">Whispered, then loved</p>
        <h2 className="mt-2 sm:mt-3 font-serif text-2xl sm:text-4xl md:text-5xl text-center">Petal stories</h2>
        <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl sm:rounded-2xl md:rounded-3xl bg-card border border-border p-4 sm:p-6 md:p-8"
            >
              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="font-serif text-sm sm:text-lg md:text-xl leading-snug">"{r.quote}"</blockquote>
              <figcaption className="mt-4 sm:mt-6 text-[9px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {r.name} · {r.loc}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <FeaturedStrip />
      <Featured />
      <Magazine />
      <Testimonials />
    </>
  );
}
