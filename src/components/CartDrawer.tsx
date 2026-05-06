import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/cart";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, subtotal, clear } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [done, setDone] = useState(false);

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setDone(true);
      clear();
      setTimeout(() => {
        setDone(false);
        setOpen(false);
      }, 2200);
    }, 1400);
  };

  const total = subtotal();
  const shipping = total > 0 && total < 75 ? 6 : 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-[60]"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-background z-[70] flex flex-col border-l border-border shadow-petal"
          >
            <div className="flex items-center justify-between px-5 sm:px-6 h-16 border-b border-border">
              <h2 className="font-serif text-xl">Your Bag</h2>
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-full hover:bg-secondary flex items-center justify-center"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {done ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/15 flex items-center justify-center">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl">Order placed</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Thank you, beauty. A confirmation will bloom in your inbox shortly.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="font-serif text-xl">Your bag is empty</p>
                <p className="text-sm text-muted-foreground">
                  Discover our latest blooms in the shop.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm"
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 space-y-4">
                  {items.map((i) => (
                    <div key={i.id} className="flex gap-4">
                      <div className="h-24 w-20 rounded-lg overflow-hidden bg-blossom shrink-0">
                        <img src={i.image} alt={i.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex justify-between gap-2">
                          <h4 className="font-serif text-sm leading-tight">{i.name}</h4>
                          <span className="text-sm font-medium whitespace-nowrap">
                            ${(i.price * i.qty).toFixed(0)}
                          </span>
                        </div>
                        {i.shade && (
                          <p className="text-xs text-muted-foreground italic mt-0.5">{i.shade}</p>
                        )}
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center border border-border rounded-full">
                            <button
                              onClick={() => setQty(i.id, i.qty - 1)}
                              className="h-7 w-7 flex items-center justify-center hover:bg-secondary rounded-full"
                              aria-label="Decrease"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-xs w-6 text-center">{i.qty}</span>
                            <button
                              onClick={() => setQty(i.id, i.qty + 1)}
                              className="h-7 w-7 flex items-center justify-center hover:bg-secondary rounded-full"
                              aria-label="Increase"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => remove(i.id)}
                            className="text-xs text-muted-foreground hover:text-foreground"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border px-5 sm:px-6 py-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t border-border">
                    <span>Total</span>
                    <span>${(total + shipping).toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    disabled={checkingOut}
                    className="w-full h-12 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
                  >
                    {checkingOut ? "Processing…" : "Checkout"}
                  </button>
                  <p className="text-[11px] text-center text-muted-foreground">
                    Demo checkout — no payment will be processed.
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}