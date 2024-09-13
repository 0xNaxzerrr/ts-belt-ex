// // Exercice 10: Insérer des produits à des positions spécifiquesUtilise Array.insertAt (pour insérer un produit à l'indice 1).Utilise Array.prependToAll (pour ajouter un produit à chaque élément d'une liste).Utilise Array.append (pour ajouter un produit à la fin de la liste)

import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const ArrayFn10 = () => {
  const newProduct: Product = { name: "Monitor", price: 200, inStock: true };
  const updatedProductsAtIndex = A.insertAt(products, 1, newProduct);
  const productToPrepend: Product = {
    name: "Accessory",
    price: 15,
    inStock: true,
  };
  const prependedProducts = A.prependToAll(products, productToPrepend);

  const productToAppend: Product = {
    name: "Headphones",
    price: 50,
    inStock: false,
  };
  const appendedProducts = A.append(products, productToAppend);

  return [
    updatedProductsAtIndex,
    productToPrepend,
    prependedProducts,
    appendedProducts,
  ];
};
