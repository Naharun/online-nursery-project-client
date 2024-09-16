export interface TPlantDetail {
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

// Define the response type for the API
export interface TApiResponse {
  data: TCategory[];
}
