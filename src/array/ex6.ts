import { Product } from "./type";
import { A } from "@mobily/ts-belt";

// Exercice 6: Comparer des listes et tester l'inclusion Utilise Array.eq (pour comparer deux listes de produits).Utilise Array.includes (pour vérifier si un produit spécifique est inclus dans la liste)

const products1: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];
const products2: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Keyboard", price: 75, inStock: true },
];
export const ArrayFn6 = () => {
  const areEqual = A.eq(
    products1,
    products2,
    (a, b) =>
      a.name === b.name && a.price === b.price && a.inStock === b.inStock
  );

  const productToCheck: Product = {
    name: "Laptop",
    price: 1000,
    inStock: true,
  };
  const isProductIncluded = A.some(
    products1,
    (p) =>
      p.name === productToCheck.name &&
      p.price === productToCheck.price &&
      p.inStock === productToCheck.inStock
  );

  return [areEqual, productToCheck, isProductIncluded];
};
