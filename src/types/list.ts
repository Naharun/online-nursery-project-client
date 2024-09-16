// In your types file (e.g., types/list.ts or types.ts)

import { ReactNode } from "react";
import { TPlantDetail } from ".";

export interface Variant {
  name: string;
  price: number;
  stock: boolean;
}

// export interface Product {
//   id: string;
//   title: string;
//   imageUrl: string;
//   price: number;
//   category: string;
//   expectedDispatch: string; // Add this field for the expected dispatch date
//   inStock: boolean; // Add this field for stock status
//   variants?: Variant[]; // If your product has variants
// }
// export interface UpdateProductModalProps {
//   visible: boolean;
//   onClose: () => void;
//   product: {
//     inStock: boolean;
//     _id: string;
//     name: string;
//     image: string;
//     price: number;
//     category: string;
//   };
//   onSubmit: (updatedProduct: any) => void;
// }
export interface Product {
  title: ReactNode;
  imageUrl: string | undefined;
  id: string; // Change to `_id` if that's your convention
  name: string; // Change from `title` to `name` if needed
  image: string; // Change from `imageUrl` to `image` if needed
  price: number;
  category: string;
  expectedDispatch: string; // Change to `expected_dispatch_date` if needed
  inStock: boolean; // This field should match
  variants?: Variant[];
}

export interface UpdateProductModalProps {
  visible: boolean;
  onClose: () => void;
  product?: Product | null; // Directly use `Product` type
  onSubmit: (updatedProduct: Product) => void; // Use `Product` type for onSubmit
}

export interface CreatePlantResponse {
  success: boolean;
  message: string;
  data?: any; // Adjust based on the actual data structure if needed
}
// Define the form data structure based on TPlant or similar types

export interface TAddDetailsFormData {
  name: string;
  image: string;
  price: number;
  expected_dispatch_date: string;
  add_to_cart: boolean;
}
export interface AddDetailsFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
  product?: {
    name: string;
    image: string;
    price: number;
    expected_dispatch_date: string;
    add_to_cart: boolean;
    details?: TPlantDetail[]; // Optional details for editing products
  };
}
