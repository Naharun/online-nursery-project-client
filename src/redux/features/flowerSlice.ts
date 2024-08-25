import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFlowers, fetchFlowerDetails } from "./flowerActions";

interface FlowerState {
  flowers: Flower[];
  flowerDetails: FlowerDetails[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: FlowerState = {
  flowers: [],
  flowerDetails: null,
  loading: false,
  error: null,
};

const flowerSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFlowers.fulfilled,
        (state, action: PayloadAction<Flower[]>) => {
          state.flowers = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchFlowers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch flowers";
      })
      .addCase(fetchFlowerDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFlowerDetails.fulfilled,
        (state, action: PayloadAction<FlowerDetails[]>) => {
          state.flowerDetails = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchFlowerDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch flower details";
      });
  },
});

export default flowerSlice.reducer;
