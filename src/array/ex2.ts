// // Exercice 2: Ajouter des produits et récupérer un élément à une position donnéeUtilise Array.prepend (pour ajouter le produit Monitor au début de la liste).Utilise Array.append (pour ajouter le produit Keyboard à la fin de la liste).Utilise Array.at (pour récupérer le produit à l'indice 2).

import { Product } from "./type";
import { A, pipe } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Headphones", price: 50, inStock: true },
];

export const ArrayFn2 = () => {
  const one = A.prepend(products, {
    name: "Monitor",
    price: 400,
    inStock: true,
  });
  const two = A.append(one, {
    name: "Keyboard",
    price: 250,
    inStock: false,
  });

  const three = A.at(products, 2);
  return [one, two, three];
};
