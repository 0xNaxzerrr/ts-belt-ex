// // Exercice 5: Appliquer des réductions de prix en fonction de critères dynamiquesObjectif : Tu reçois une fonction qui définit le critère de réduction, ainsi qu'un pourcentage de réduction. Tu dois appliquer cette réduction aux produits qui répondent aux critères et calculer le total des prix après réduction.Utilise Array.reduce (pour vérifier si un produit satisfait aux critères de réduction, appliquer la réduction et accumuler le prix total).

// // Exemples d'utilisation :
// // const discountCriteria = (product) => product.price > 100; // Réduction sur les produits à plus de 100
// // applyDiscount(products, discountCriteria, 10); // Utilisation avec une réduction de 10 %
// // Ces exercices combinent l'utilisation de reduce avec des fonctions dynamiques et des arguments passés en amont pour rendre la logique adaptable et beaucoup plus difficile. Chaque exercice nécessite de comprendre comment faire interagir reduce avec d'autres fonctions et de gérer les résultats de manière dynamique.
// const products = [
//   { name: 'Laptop', price: 1000, inStock: true },
//   { name: 'Mouse', price: 25, inStock: false },
//   { name: 'Keyboard', price: 75, inStock: true },
// ];

import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const fct = (
  products: Product[],
  criteria: (p: Product) => boolean,
  discountPercentage: number
): number => {
  return A.reduce(products, 0, (acc, product) => {
    const finalPrice = criteria(product)
      ? product.price * (1 - discountPercentage / 100)
      : product.price;
    return acc + finalPrice;
  });
};

export const ArrayFn30 = () => {
  const discountCriteria = (product: Product) => product.price > 100;
  const totalAfterDiscount = fct(products, discountCriteria, 10);
  console.log(totalAfterDiscount);
};
