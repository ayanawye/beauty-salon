import { IAddressSpecialist } from "@/models/ISpecialist";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getSpecialistsApi = createApi({
  reducerPath: "getSpecialistsApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://kudryashka.pythonanywhere.com/'}),
  endpoints: (build) => ({
    getSpecialistsByAddress: build.query<IAddressSpecialist[], any>({
      query: (id) => ({
        url: `spescialist-list/${id}/`
      })
    })
  })
})

export const { useGetSpecialistsByAddressQuery } = getSpecialistsApi