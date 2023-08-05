import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const servisesApi = createApi({
  reducerPath: "servisesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (build) => ({
    getService: build.query<any, "">({
      query: () => ({
        url: "/comments"
      })
    })
  })
});

export const { useGetServiceQuery } = servisesApi