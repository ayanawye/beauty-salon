import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getSpecialists1Api = createApi({
  reducerPath: "getSpecialists1Api",
  baseQuery: fetchBaseQuery({baseUrl: 'https://kudryashka.pythonanywhere.com/'}),
  endpoints: (build) => ({
    getSpecialists1: build.query<ISpecialist[], ''>({
      query: () => ({
        url: 'sudakova/'
      })
    })
  })
})

export const { useGetSpecialists1Query } = getSpecialists1Api