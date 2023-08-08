import { ISpecialist } from "@/models/ISpecialist";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getSpecialists2Api = createApi({
  reducerPath: "getSpecialists2Api",
  baseQuery: fetchBaseQuery({baseUrl: 'https://kudryashka.pythonanywhere.com/'}),
  endpoints: (build) => ({
    getSpecialists2: build.query<ISpecialist[], ''>({
      query: () => ({
        url: 'belorechenskaya/'
      })
    })
  })
})

export const { useGetSpecialists2Query } = getSpecialists2Api