import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import hero from "@/assets/hero-model.jpg";
import look2 from "@/assets/look-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Journal — Sakura Beauty" },
      { name: "description", content: "The Sakura story: a modern beauty house crafting petal-soft makeup with clean formulas and botanical pigments." },
      { property: "og:title", content: "Journal — Sakura Beauty" },
      { property: "og:description", content: "The Sakura story — quiet luxury, in bloom." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 py-12 sm:py-20">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Journal · No. 01</p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl mt-4 leading-[1.05]">
          A house in bloom.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Sakura began as a quiet idea — that beauty could feel softer, slower, and more honest.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-12 sm:mt-16 aspect-[16/9] overflow-hidden rounded-3xl bg-blossom"
      >
        <img src={hero} alt="Sakura editorial" className="h-full w-full object-cover" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 mt-12 sm:mt-16 text-base leading-relaxed">
        <p className="font-serif text-2xl leading-snug">
          Every formula is built around botanical pigments, suspended in feather-light textures that wear like skin.
        </p>
        <div className="space-y-4 text-muted-foreground">
          <p>
            We work with a small studio of chemists in Kyoto and Paris, refining each shade through hundreds of wear-tests until the colour feels inevitable.
          </p>
          <p>
            Our packaging is refillable, our pigments are clean, and our edits are deliberately small — the things you'll actually reach for, again and again.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mt-16 sm:mt-20">
        {[
          { k: "Founded", v: "2021, Kyoto" },
          { k: "Studio", v: "Paris · Tokyo" },
          { k: "Edit", v: "32 considered objects" },
        ].map((s) => (
          <div key={s.k} className="border-t border-border pt-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.k}</p>
            <p className="font-serif text-2xl mt-2">{s.v}</p>
          </div>
        ))}
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 aspect-[3/4] sm:aspect-[16/10] overflow-hidden rounded-3xl"
      >
        <img src={look2} alt="Studio look" className="h-full w-full object-cover" />
      </motion.figure>
    </article>
  );
}