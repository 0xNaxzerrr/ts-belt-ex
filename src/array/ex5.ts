// // Exercice 5: Supprimer des produits selon des critèresUtilise Array.drop (pour retirer le premier produit de la liste).Utilise Array.dropExactly (pour retirer exactement deux produits depuis le début).Utilise Array.dropWhile (pour retirer les produits tant qu'ils sont en stock)
import { A, pipe } from "@mobily/ts-belt";

import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];
export const ArrayFn5 = () => {};
