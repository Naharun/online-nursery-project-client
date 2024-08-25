import { createAsyncThunk } from "@reduxjs/toolkit";

// Define Flower and FlowerDetails types
interface Flower {
  name: string;
  image: string;
}

interface FlowerDetails {
  name: string;
  image: string;
  price: string;
  expected_dispatch_date: string;
  add_to_cart: boolean;
}

// Fetch all flowers
export const fetchFlowers = createAsyncThunk<Flower[]>(
  "flowers/fetchFlowers",
  async () => {
    const response = await fetch("/api/flowers");
    const data = await response.json();
    return data as Flower[];
  }
);

// Fetch flower details by name
export const fetchFlowerDetails = createAsyncThunk<FlowerDetails[], string>(
  "flowers/fetchFlowerDetails",
  async (flowerName: string) => {
    const response = await fetch(`/api/flowers/${flowerName}`);
    const data = await response.json();
    return data as FlowerDetails[];
  }
);
