// import {
//   BaseQueryApi,
//   BaseQueryFn,
//   DefinitionType,
//   FetchArgs,
//   createApi,
//   fetchBaseQuery,
// } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000",
// });

// const baseQueryWithoutToken: BaseQueryFn<
//   FetchArgs,
//   BaseQueryApi,
//   DefinitionType
// > = async (args, api, extraOptions): Promise<any> => {
//   const result = await baseQuery(args, api, extraOptions);
//   return result;
// };

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQueryWithoutToken,
//   endpoints: () => ({}),
// });
//
//
//
//

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getPlants: builder.query({
      query: () => ({
        method: "Get",
        url: "plants",
      }),
    }),
  }),
});

export const { useGetPlantsQuery } = baseApi as any;
