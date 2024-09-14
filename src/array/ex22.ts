// // Exercice 2: Calculer le total de la quantité de chaque produit en regroupant par catégoriesObjectif : Chaque produit a une catégorie et une quantité associée. Tu veux calculer la somme des quantités pour chaque catégorie distincte.Utilise Array.reduce (pour accumuler les quantités par catégorie dans un objet, en vérifiant l'existence de la catégorie et en y ajoutant les quantités).

// // make the new type of a product

import { A } from "@mobily/ts-belt";

type Product = {
  name: string;
  price: number;
  category: string;
  quantity: number;
};

const products: Product[] = [
  { name: "Laptop", price: 1000, category: "Electronics", quantity: 2 },
  { name: "Mouse", price: 25, category: "Accessories", quantity: 5 },
  { name: "Monitor", price: 200, category: "Electronics", quantity: 1 },
  { name: "Keyboard", price: 75, category: "Accessories", quantity: 3 },
];

export const ArrayFn22 = () => {
  const quantitiesByCategory = A.reduce(
    products,
    {} as Record<string, number>,
    (acc, product) => {
      const { category, quantity } = product;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += quantity;
      return acc;
    }
  );
  console.log(quantitiesByCategory);
};
