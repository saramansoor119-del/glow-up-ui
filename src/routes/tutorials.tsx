import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import hero from "@/assets/hero-model.jpg";

export const Route = createFileRoute("/tutorials")({
  head: () => ({
    meta: [
      { title: "Tutorials — Sakura Beauty" },
      { name: "description", content: "Editorial makeup tutorials: petal lips, soft glow, and blossom flush, taught by Sakura artists." },
      { property: "og:title", content: "Tutorials — Sakura Beauty" },
      { property: "og:description", content: "Editorial makeup tutorials taught by Sakura artists." },
    ],
  }),
  component: TutorialsPage,
});

const tutorials = [
  { title: "The Petal Lip", duration: "4 min", level: "Beginner", image: look1 },
  { title: "Cloud Skin Glow", duration: "7 min", level: "Intermediate", image: look2 },
  { title: "Blossom Flush", duration: "5 min", level: "Beginner", image: look3 },
  { title: "Editorial Eye", duration: "9 min", level: "Advanced", image: hero },
  { title: "Soft Smoke", duration: "6 min", level: "Intermediate", image: look2 },
  { title: "Bare Bloom", duration: "3 min", level: "Beginner", image: look1 },
];

function TutorialsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
      <header className="max-w-2xl mb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Studio</p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-2">Tutorials in bloom</h1>
        <p className="mt-4 text-muted-foreground">
          Slow, considered routines from our artists — designed for the way you actually get ready.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {tutorials.map((t, i) => (
          <motion.article
            key={t.title + i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-blossom">
              <motion.img
                src={t.image}
                alt={t.title}
                loading="lazy"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-background/90 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-5 w-5 fill-foreground text-foreground ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-background text-xs">
                <span className="px-2.5 py-1 rounded-full bg-background/20 backdrop-blur uppercase tracking-wide">
                  {t.level}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {t.duration}
                </span>
              </div>
            </div>
            <h3 className="mt-4 font-serif text-xl">{t.title}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}