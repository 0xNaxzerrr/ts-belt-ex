// // Exercice 3: Fusionner et copier des listes
// Utilise Array.concat (pour combiner deux listes de produits).Utilise Array.concatMany (pour ajouter plusieurs listes de produits).Utilise Array.copy (pour créer une copie de la liste combinée).

import { Product } from "./type";
import { A, pipe } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];
const accessories: Product[] = [
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

export const ArrayFn3 = () => {
  const concat = A.concat(products, accessories);
  const concatMany = A.concatMany([concat]);
  const copy = A.copy(concatMany);

  return [concat, concatMany, copy];
};
