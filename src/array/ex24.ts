// // Exercice 4: Créer un tableau d’objets résumant la quantité totale et le prix moyen par catégorieObjectif : Chaque produit appartient à une catégorie, tu veux calculer la quantité totale et le prix moyen pour chaque catégorie.Utilise Array.reduce (pour accumuler les produits par catégorie, calculer la somme des prix et des quantités, puis retourner le prix moyen et la quantité totale pour chaque catégorie).

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

type CategorySummary = {
  category: string;
  totalQuantity: number;
  averagePrice: number;
};

export const ArrayFn24 = () => {
  const categorySummary = A.reduce(
    products,
    {} as Record<
      string,
      { totalQuantity: number; totalPrice: number; count: number }
    >,
    (acc, product) => {
      const { category, price, quantity } = product;

      if (!acc[category]) {
        acc[category] = { totalQuantity: 0, totalPrice: 0, count: 0 };
      }

      acc[category]!.totalQuantity += quantity;
      acc[category]!.totalPrice += price * quantity;
      acc[category]!.count += quantity;

      return acc;
    }
  );

  const result: CategorySummary[] = Object.keys(categorySummary).map(
    (category) => {
      const { totalQuantity, totalPrice, count } = categorySummary[category]!;
      return {
        category,
        totalQuantity,
        averagePrice: totalPrice / count,
      };
    }
  );
  console.log(result);
};
