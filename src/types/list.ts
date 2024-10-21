// // In your types file (e.g., types/list.ts or types.ts)

// import { ReactNode } from "react";
// import { TPlantDetail } from ".";

// export interface Variant {
//   name: string;
//   price: number;
//   stock: boolean;
// }

// export interface Product {
//   title: ReactNode;
//   imageUrl: string | undefined;
//   id: string; // Change to `_id` if that's your convention
//   name: string; // Change from `title` to `name` if needed
//   image: string; // Change from `imageUrl` to `image` if needed
//   price: number;
//   category: string;
//   expectedDispatch: string; // Change to `expected_dispatch_date` if needed
//   inStock: boolean; // This field should match
//   variants?: Variant[];
// }

// export interface UpdateProductModalProps {
//   visible: boolean;
//   onClose: () => void;
//   product?: Product | null; // Directly use `Product` type
//   onSubmit: (updatedProduct: Product) => void; // Use `Product` type for onSubmit
// }

// export interface CreatePlantResponse {
//   success: boolean;
//   message: string;
//   data?: any;
// }

// export interface TAddDetailsFormData {
//   name: string;
//   image: string;
//   price: number;
//   expected_dispatch_date: string;
//   add_to_cart: boolean;
// }
// export interface AddDetailsFormProps {
//   isOpen: boolean;
//   handleCancel: () => void;
//   handleOk: () => void;
//   onSubmit: (formData: any) => void;
//   product?: {
//     _id?: string;
//     categoryName?: string;
//     name: string;
//     image: string;
//     price: number;
//     expected_dispatch_date: string;
//     add_to_cart: boolean;
//     details?: TPlantDetail[];
//   };
// }
Type '(updatedProduct: TPlantsNew) => Promise<void>' is not assignable to type '(formData: TAddDetailsFormData) => void'.
  Types of parameters 'updatedProduct' and 'formData' are incompatible.
    Type 'TAddDetailsFormData' is missing the following properties from type 'TPlantsNew': id, submissionDatats(2322)
list.ts(115, 3): The expected type comes from property 'onSubmit' which is declared here on type 'IntrinsicAttributes & AddDetailsFormProps'
(property) AddDetailsFormProps.onSubmit: (formData: TAddDetailsFormData) => void
Fix this error
i give you type.ts file
import { ReactNode } from "react";
import { TPlantDetail } from ".";

// Define the variant type used for different product options
export interface Variant {
  name: string;
  price: number;
  stock: boolean; // Adjusted stock type to boolean
}

// Define the main product type for product-related forms and modals
export interface Product {
  title: ReactNode; // Title displayed, could also be the product name
  imageUrl: string | undefined; // URL of the product image
  id: string; // Product ID, adjust based on convention (_id or id)
  name: string; // Product name, change to name if needed
  image: string; // Product image, change from imageUrl to image
  price: number; // Product price
  category: string; // Category of the product
  expectedDispatch: string; // Adjust to match expected_dispatch_date if required
  inStock: boolean; // Is the product in stock
  variants?: Variant[]; // Optional variants field for different versions of the product
}

// Props used for the UpdateProductModal component
export interface UpdateProductModalProps {
  visible: boolean; // Modal visibility state
  onClose: () => void; // Function to handle modal close
  product?: Product | null; // Optional product data for editing
  onSubmit: (updatedProduct: Product) => void; // Callback to handle form submission
}

// Define the response structure after creating a plant
export interface CreatePlantResponse {
  success: boolean; // Indicate if the creation was successful
  message: string; // Response message
  data?: any; // Optional data payload
}

// Define the structure of the form data used for adding new details
export interface TAddDetailsFormData {
  name: string; // Plant name
  image: string; // Plant image URL
  price: number; // Price of the plant
  expected_dispatch_date: string; // Expected dispatch date
  add_to_cart: boolean; // Whether to add the item to the cart
}

// Props used for the AddDetailsForm component
// Props used for the AddDetailsForm component
export interface AddDetailsFormProps {
  isOpen: boolean; // Form visibility state
  handleCancel: () => void; // Function to handle form cancel
  handleOk: () => void; // Function to handle form submission
  onSubmit: (formData: TAddDetailsFormData) => void; // Submission callback with form data
  product?: {
    _id?: string; // Optional product ID
    categoryName?: string; // Optional product category name
    name: string; // Product name
    image: string; // Product image URL
    price: number; // Product price
    expected_dispatch_date: string; // Expected dispatch date
    add_to_cart: boolean; // Whether the product can be added to the cart
    details?: TPlantDetail[]; // Optional detailed plant information
  };
}

// Define the type for new plants being added to the system
export interface TPlantsNew {
  name: string; // Plant name
  image: string; // URL of the plant image
  price: number; // Price of the plant
  expected_dispatch_date: string; // Dispatch date for the plant
  add_to_cart: boolean; // Whether the plant can be added to the cart
  category?: string; // Optional category the plant belongs to
  details?: TPlantDetail[]; // Optional array of additional plant details
}

// Define the type for an existing plant in the system
export interface TPlants {
  _id: string; // Unique identifier for the plant
  name: string; // Plant name
  image: string; // URL of the plant image
  price: number; // Price of the plant
  expected_dispatch_date: string; // Expected dispatch date for the plant
  add_to_cart: boolean; // Whether the plant can be added to the cart
  inStock: boolean; // Whether the plant is in stock
  category: string; // Category the plant belongs to
  variants?: Variant[]; // Optional array of product variants
  details?: TPlantDetail[]; // Optional array of additional plant details
}