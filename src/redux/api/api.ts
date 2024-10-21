// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { TCategory } from "../../types/index"; // Import types

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://online-nursery-project-server.vercel.app/api/" }),
//   tagTypes: ["getPlants"],
//   endpoints: (builder) => ({
//     getPlants: builder.query<TCategory[], void>({
//       query: () => `plants`,
//       providesTags: ["getPlants"],
//     }),
//     createPlants: builder.mutation<void, TCategory>({
//       query: (data) => ({
//         url: "plants",
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["getPlants"],
//     }),

//     // Delete plant
//     deletePlant: builder.mutation({
//       query: (id) => ({
//         url: `/plants/${id}`,
//         method: "DELETE",
//       }),
//     }),

//     // Delete details of a plant
//     deleteDetail: builder.mutation({
//       query: ({ plantId, detailId }) => ({
//         url: `/plants/${plantId}/details/${detailId}`,
//         method: "DELETE",
//       }),
//     }),

//     // Update plant
//     updatePlant: builder.mutation({
//       query: ({ id, data }) => ({
//         url: `/plants/${id}`,
//         method: "PUT",
//         body: data,
//       }),
//     }),

//     // Update plant details
//     updateDetail: builder.mutation({
//       query: ({ id, data }) => ({
//         url: `/plants/${id}/details`,
//         method: "PUT",
//         body: data,
//       }),
//     }),
//   }),
// });

// // Export the hooks
// export const {
//   useGetPlantsQuery,
//   useCreatePlantsMutation,
//   useDeletePlantMutation,
//   useDeleteDetailMutation,
//   useUpdatePlantMutation,
//   useUpdateDetailMutation,
// } = baseApi as any;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCategory, TPlants } from "../../types/index"; // Import types
import { TCartItem } from "../../types/cartItem"; // Assuming you have this type for cart

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://online-nursery-project-server.vercel.app/api/",
  }),
  tagTypes: ["getPlants", "Cart"], // Add 'Cart' as a tag type
  endpoints: (builder) => ({
    // Existing plant-related endpoints
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
    // deletePlant: builder.mutation<void, string>({
    //   query: (id) => ({
    //     url: `/plants/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["getPlants"],
    // }),
    // deleteDetail: builder.mutation<
    //   void,
    //   { plantId: string; detailId: string; categoryName: string }
    // >({
    //   query: ({ plantId, detailId, categoryName }) => ({
    //     url: `/plants/${plantId}/${categoryName}/details/${detailId}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["getPlants"],
    // }),

    updatePlant: builder.mutation<void, { id: string; data: any }>({
      query: ({ id, data }) => ({
        url: `/plants/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getPlants"],
    }),
    updateDetail: builder.mutation<void, { id: string; data: any }>({
      query: ({ id, data }) => ({
        url: `/plants/${id}/details`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getPlants"],
    }),
    deletePlant: builder.mutation<void, { category: string; name: string }>({
      query: ({ category, name }) => ({
        url: `plants`,
        method: "DELETE",
        body: { category, name },
      }),
      invalidatesTags: ["getPlants"],
    }),

    deletePlantDetail: builder.mutation<
      void,
      { category: string; plantName: string; detailName: string }
    >({
      query: ({ category, plantName, detailName }) => ({
        url: `plants/details`,
        method: "DELETE",
        body: { category, plantName, detailName },
      }),
      invalidatesTags: ["getPlants"],
    }),

    // In api.ts
    updateEditPlant: builder.mutation<void, { id: string; data: TCategory }>({
      query: ({ id, data }) => ({
        url: `plants/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getPlants"],
    }),
    // Mutation for updating a specific plant detail inside a category
    updateEditPlantDetail: builder.mutation<
      void,
      { id: string; categoryName: string; detailId: string; data: TPlants }
    >({
      query: ({ id, categoryName, detailId, data }) => ({
        url: `plants/${id}/category/${categoryName}/details/${detailId}`, // Match the new route format
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getPlants"],
    }),

    // Cart-related API operations
    addToCart: builder.mutation<void, { userId: string; item: TCartItem }>({
      query: (data) => ({
        url: "cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    getCartItems: builder.query<TCartItem[], string>({
      query: (userId) => `cart/${userId}`,
      providesTags: ["Cart"],
    }),
    removeFromCart: builder.mutation<void, { userId: string; itemId: string }>({
      query: ({ userId, itemId }) => ({
        url: `cart/${userId}/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    clearCart: builder.mutation<void, string>({
      query: (userId) => ({
        url: `cart/clear/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    checkout: builder.mutation<void, string>({
      query: (userId) => ({
        url: `cart/checkout/${userId}`,
        method: "POST",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

// Export the hooks
export const {
  useGetPlantsQuery,
  useCreatePlantsMutation,
  useUpdatePlantMutation,
  useUpdateDetailMutation,
  useDeletePlantMutation,
  useDeletePlantDetailMutation,
  useUpdateEditPlantMutation,
  useUpdateEditPlantDetailMutation,
  useAddToCartMutation,
  useGetCartItemsQuery,
  useRemoveFromCartMutation,
  useClearCartMutation,
  useCheckoutMutation,
} = baseApi as any;
