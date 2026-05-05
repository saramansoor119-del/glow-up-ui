import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <h3 className="font-serif text-3xl">Sakura.</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Quiet luxury makeup, crafted in small batches with botanical pigments and clean formulas.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop">All products</Link></li>
            <li><Link to="/shop">Lips</Link></li>
            <li><Link to="/shop">Face</Link></li>
            <li><Link to="/shop">Eyes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-4">House</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about">Journal</Link></li>
            <li><Link to="/tutorials">Tutorials</Link></li>
            <li><a href="#">Stockists</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sakura Beauty. Petal-soft since today.
      </div>
    </footer>
  );
}