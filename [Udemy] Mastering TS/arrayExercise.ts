const ages: [] = [];

const gameBoard: string[][] = [[]];

type Product = {
  name: string;
  price: number;
};

const items: Product[] = [
  {
    name: "Coffee",
    price: 10,
  },
  {
    name: "tea",
    price: 200,
  },
  {
    name: "roti",
    price: 67,
  },
  {
    name: "Curd",
    price: 56,
  },
];
const getTotal = (products: Product[]): number => {
  return products.reduce(
    (preValue, { price }: { price: number }): number => preValue + price,
    0
  ); // Need to understand this better
};

console.log(`Total is: ${getTotal(items)}`);
