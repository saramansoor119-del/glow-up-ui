import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/tutorials", label: "Tutorials" },
  { to: "/about", label: "Journal" },
] as const;

const shopCategories = ["Lips", "Face", "Eyes", "Cheeks"] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-lg sm:text-2xl tracking-tight">
            Sakura<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
          {links.map((l) => {
            if (l.to === "/shop") {
              return (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <Link
                    to={l.to}
                    className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors"
                    activeProps={{ className: "text-foreground font-medium" }}
                  >
                    {l.label} <ChevronDown className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </Link>
                  <AnimatePresence>
                    {shopOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-48 sm:w-56"
                      >
                        <div className="rounded-lg sm:rounded-xl border border-border bg-card shadow-petal p-2">
                          {shopCategories.map((c) => (
                            <Link
                              key={c}
                              to="/shop"
                              className="block px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm hover:bg-secondary transition-colors"
                            >
                              {c}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={l.to}
                to={l.to}
                className="text-foreground/80 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            aria-label="Bag"
            className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-border bg-card/60 flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[9px] sm:text-[10px] flex items-center justify-center font-medium">
              2
            </span>
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-border flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Menu className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-2 sm:gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm sm:text-base py-2"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
