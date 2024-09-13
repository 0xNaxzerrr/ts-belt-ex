// // Exercice 8: Trouver des produits selon des critèresUtilise Array.find (pour trouver le produit dont le nom est Keyboard).Utilise Array.getIndexBy (pour trouver l'indice du produit dont le prix est 1000).Utilise Array.get (pour récupérer le produit à l'indice 2)

import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const ArrayFn8 = () => {
  const foundProduct = A.find(
    products,
    (product) => product.name === "Keyboard"
  );

  const indexOfExpensiveProduct = A.getIndexBy(
    products,
    (product) => product.price === 1000
  );

  const productAtIndex2 = A.get(products, 2);

  return [
    foundProduct,indexOfExpensiveProduct, productAtIndex2
  ]
};
