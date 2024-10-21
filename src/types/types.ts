// types.ts
export interface Product {
  _id?: string;
  categoryName?: string | undefined;
  id: string;
  name: string;
  price: number;
  image: string;
  expected_dispatch_date: string;
  in_stock: boolean;
}
