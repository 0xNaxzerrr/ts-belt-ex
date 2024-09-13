import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

export const ArrayFn5 = () => {
  const firstProductDeleted = A.drop(products, 1);
  const twoFirstProductsDeleted = A.dropExactly(products, 2);
  const productsOutOfStock = A.dropWhile(
    products,
    (product) => product.inStock
  );

  return [firstProductDeleted, twoFirstProductsDeleted, productsOutOfStock];
};
