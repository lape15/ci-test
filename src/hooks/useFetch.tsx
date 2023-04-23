import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export const useFetch = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState<Product[]>([]);

  const fetchData = async () => {
    setLoad(true);
    const json = await fetch("https://dummyjson.com/products");
    const { products }: { products: Array<Product> } = await json.json();
    setLoad(false);
    setData(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    load,
  };
};
