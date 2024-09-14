// // Exercice 5: Créer une structure imbriquée des produits groupés par disponibilité et nomObjectif : Tu veux organiser les produits dans une structure imbriquée où les produits sont d’abord regroupés par disponibilité (en stock ou non), puis par nom de produit, tout en accumulant la quantité de chaque produit dans chaque groupe.Utilise Array.reduce (pour créer une structure imbriquée qui regroupe d'abord les produits par disponibilité, puis par nom, en additionnant la quantité de chaque produit).
import { A } from "@mobily/ts-belt";

interface Product {
  name: string;
  price: number;
  inStock: boolean;
  quantity: number;
}

interface GroupedProducts {
  [productName: string]: {
    totalQuantity: number;
    products: Product[];
  };
}

interface GroupedByStock {
  inStock?: GroupedProducts;
  outOfStock?: GroupedProducts;
}

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true, quantity: 2 },
  { name: "Laptop", price: 950, inStock: true, quantity: 1 },
  { name: "Mouse", price: 25, inStock: false, quantity: 5 },
  { name: "Keyboard", price: 75, inStock: true, quantity: 3 },
  { name: "Mouse", price: 20, inStock: false, quantity: 2 },
];

export const groupProducts = (products: Product[]): GroupedByStock => {
  return A.reduce(products, {} as GroupedByStock, (acc, product) => {
    const stockKey = product.inStock ? "inStock" : "outOfStock";

    if (!acc[stockKey]) {
      acc[stockKey] = {};
    }

    const stockGroup = acc[stockKey] as GroupedProducts;

    if (!stockGroup[product.name]) {
      stockGroup[product.name] = { totalQuantity: 0, products: [] };
    }
    const productGroup = stockGroup[product.name]!;

    productGroup.totalQuantity += product.quantity;
    productGroup.products.push(product);

    return acc;
  });
};

export const ArrayFn25 = () => {
  const groupedProducts = groupProducts(products);
  console.log(groupedProducts);
};
