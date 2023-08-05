import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getAddressApi = createApi({
  reducerPath: "getAddressApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://kudryashka.pythonanywhere.com/'}),
  endpoints: (build) => ({
    getAddress: build.query<IAddress[], ''>({
      query: () => ({
        url: 'adress/'
      })
    })
  })
})

export const { useGetAddressQuery } = getAddressApi