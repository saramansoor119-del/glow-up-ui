import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 md:mt-32 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-16 grid gap-8 sm:gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <h3 className="font-serif text-2xl sm:text-3xl">Sakura.</h3>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Quiet luxury makeup, crafted in small batches with botanical pigments and clean formulas.
          </p>
          <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
            {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-medium mb-3 sm:mb-4">Shop</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground transition-colors">All products</Link></li>
            <li><Link to="/shop" className="hover:text-foreground transition-colors">Lips</Link></li>
            <li><Link to="/shop" className="hover:text-foreground transition-colors">Face</Link></li>
            <li><Link to="/shop" className="hover:text-foreground transition-colors">Eyes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-medium mb-3 sm:mb-4">House</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">Journal</Link></li>
            <li><Link to="/tutorials" className="hover:text-foreground transition-colors">Tutorials</Link></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Stockists</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 sm:py-6 text-center text-[10px] sm:text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sakura Beauty. Petal-soft since today.
      </div>
    </footer>
  );
}
