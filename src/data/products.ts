import lipstick from "@/assets/product-lipstick.jpg";
import foundation from "@/assets/product-foundation.jpg";
import blush from "@/assets/product-blush.jpg";
import mascara from "@/assets/product-mascara.jpg";

export type Category = "Lips" | "Face" | "Eyes" | "Cheeks";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: Category;
  image: string;
  shade?: string;
  bestseller?: boolean;
}

export const products: Product[] = [
  { id: "1", name: "Velvet Bloom Lipstick", tagline: "Cherry rose, satin matte", price: 32, category: "Lips", image: lipstick, shade: "Rosé No. 04", bestseller: true },
  { id: "2", name: "Silk Veil Foundation", tagline: "Weightless second-skin glow", price: 48, category: "Face", image: foundation, shade: "Porcelain 02" },
  { id: "3", name: "Petal Flush Blush", tagline: "Sheer buildable rose", price: 28, category: "Cheeks", image: blush, shade: "Sakura", bestseller: true },
  { id: "4", name: "Midnight Lash Mascara", tagline: "Volumising carbon black", price: 26, category: "Eyes", image: mascara, shade: "Noir" },
  { id: "5", name: "Glossed Petal Balm", tagline: "Hydrating tinted shine", price: 22, category: "Lips", image: lipstick, shade: "Bare Pink" },
  { id: "6", name: "Cloud Skin Powder", tagline: "Soft-focus finishing veil", price: 38, category: "Face", image: foundation, shade: "Translucent" },
  { id: "7", name: "Blossom Cheek Stick", tagline: "Cream-to-powder flush", price: 30, category: "Cheeks", image: blush, shade: "Peony" },
  { id: "8", name: "Featherline Liner", tagline: "Precision liquid liner", price: 24, category: "Eyes", image: mascara, shade: "Espresso" },
];

export const categories: ("All" | Category)[] = ["All", "Lips", "Face", "Eyes", "Cheeks"];