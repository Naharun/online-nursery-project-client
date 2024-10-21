// export interface TPlantDetail {
//   _id?: string;
//   image: string;
//   name: string;
//   price: string;
//   add_to_cart: boolean;
//   expected_dispatch_date: string;
// }

// // Define the structure for each category of plants
// export interface TCategoryItem {
//   [x: string]: any;
//   pots: any;
//   seeds: any;
//   gifts: any;
//   season: any;
//   flowers: any;
//   gardenDecor: any;
//   name: string;
//   image: string;
//   details: TPlantDetail[];
// }

// // Define the structure for the main category response
// export interface TCategory {
//   [x: string]: any;
//   _id: number;
//   flowers?: TCategoryItem[];
//   gardenDecor?: TCategoryItem[];
//   gifts?: TCategoryItem[];
//   pots?: TCategoryItem[];
//   season?: TCategoryItem[];
//   seeds?: TCategoryItem[];
// }

// // export interface TPlants {
// //   id?: string;
// //   image: string;
// //   name: string;
// //   _id: string;
// //   details: TPlantDetail[];
// // }
// export interface TPlants {
//   id?: string;
//   _id: string;
//   name: string;
//   image: string;
//   price: number;
//   expected_dispatch_date: string;
//   add_to_cart: boolean;
//   details?: TPlantDetail[];
// }

// export interface TPlantsNew {
//   id: string;
//   submissionData: TPlants;
// }

// // Define the response type for the API
// export interface TApiResponse {
//   data: TCategory[];
// }
// Define the structure for plant details
export interface TPlantDetail {
  _id?: string;
  image: string;
  name: string;
  price: string;
  add_to_cart: boolean;
  expected_dispatch_date: string;
}

// Define the structure for each category of plants
export interface TCategoryItem {
  [x: string]: any;
  pots: any;
  seeds: any;
  gifts: any;
  season: any;
  flowers: any;
  gardenDecor: any;
  name: string;
  image: string;
  details: TPlantDetail[];
}

// Define the structure for the main category response
export interface TCategory {
  [x: string]: any;
  _id: number;
  flowers?: TCategoryItem[];
  gardenDecor?: TCategoryItem[];
  gifts?: TCategoryItem[];
  pots?: TCategoryItem[];
  season?: TCategoryItem[];
  seeds?: TCategoryItem[];
}

// Define the structure for plants
export interface TPlants {
  id?: string;
  _id: string;
  name: string;
  image: string;
  price: number;
  expected_dispatch_date: string;
  add_to_cart: boolean;
  details?: TPlantDetail[];
  categoryName?: string;
}

// Define the structure for new plant submission
export interface TPlantsNew {
  id: string;
  submissionData: TPlants;
}

// Define the response type for the API
export interface TApiResponse {
  data: TCategory[];
}
