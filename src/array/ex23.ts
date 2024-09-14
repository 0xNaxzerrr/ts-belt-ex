// // Exercice 3: Générer un rapport des produits groupés par disponibilité et triés par prixObjectif : Tu veux créer un rapport des produits séparés en deux groupes : en stock et hors stock. Dans chaque groupe, les produits doivent être triés par prix croissant.Utilise Array.reduce (pour grouper les produits en fonction de leur disponibilité, puis appliquer un tri interne sur chaque groupe).

import { Product } from "./type";
import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: false },
];

export const ArrayFn23 = () => {
  const groupedProducts = A.reduce(
    products,
    { inStock: [] as Product[], outOfStock: [] as Product[] },
    (acc, product) => {
      if (product.inStock) {
        acc.inStock.push(product);
      } else {
        acc.outOfStock.push(product);
      }
      return acc;
    }
  );

  groupedProducts.inStock = Array.from(
    A.sortBy(groupedProducts.inStock, (p) => p.price)
  );
  groupedProducts.outOfStock = Array.from(
    A.sortBy(groupedProducts.outOfStock, (p) => p.price)
  );
  console.log(groupedProducts.inStock);
  console.log(groupedProducts.outOfStock);
};
