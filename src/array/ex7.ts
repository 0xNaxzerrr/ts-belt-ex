import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
  { name: "Headphones", price: 50, inStock: false },
];

export const ArrayFn7 = () => {
  const inStockProducts = A.filter(products, (product) => product.inStock);
  const productsAtEvenIndices = A.filterWithIndex(
    products,
    (product, value) => value.price % 2 === 0
  );

  const transformedProducts = A.filterMap(products, (product) =>
    product.inStock ? { ...product, price: product.price * 0.9 } : null
  );

  return [inStockProducts, productsAtEvenIndices, transformedProducts];
};
