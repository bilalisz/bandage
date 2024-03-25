import { Product, ProductListResponse } from "@/types/products";

const baseUrl = "https://dummyjson.com";

export const getProducts = async (
  req: any
): Promise<ProductListResponse | undefined> => {
  const res = await fetch(
    `${baseUrl}/products?limit=${req.limit}&skip=${req.skip}`
  );

  if (res.status === 404) {
    return undefined;
  }
  return await res.json();
};
export const getProductDetail = async (
  id: string
): Promise<Product | undefined> => {
  const res = await fetch(`${baseUrl}/products/${id}`);

  if (res.status === 404) {
    return undefined;
  }
  return await res.json();
};
