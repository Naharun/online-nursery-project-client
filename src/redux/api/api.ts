import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCategory } from "../../types/index"; // Import types

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["getPlants"],
  endpoints: (builder) => ({
    getPlants: builder.query<TCategory[], void>({
      query: () => `plants`,
      providesTags: ["getPlants"],
    }),
    createPlants: builder.mutation<void, TCategory>({
      query: (data) => ({
        url: "plants",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getPlants"],
    }),

    // Delete plant
    deletePlant: builder.mutation({
      query: (id) => ({
        url: `/plants/${id}`,
        method: "DELETE",
      }),
    }),

    // Delete details of a plant
    deleteDetail: builder.mutation({
      query: ({ plantId, detailId }) => ({
        url: `/plants/${plantId}/details/${detailId}`,
        method: "DELETE",
      }),
    }),

    // Update plant
    updatePlant: builder.mutation({
      query: ({ id, body }) => ({
        url: `/plants/${id}`,
        method: "PUT",
        body,
      }),
    }),

    // Update plant details
    updateDetail: builder.mutation({
      query: ({ id, body }) => ({
        url: `/plants/${id}/details`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

// Export the hooks
export const {
  useGetPlantsQuery,
  useCreatePlantsMutation,
  useDeletePlantMutation,
  useDeleteDetailMutation,
  useUpdatePlantMutation,
  useUpdateDetailMutation,
} = baseApi as any;
