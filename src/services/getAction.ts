import { IAction } from "@/models/IModal";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getActionApi = createApi({
  reducerPath: "getAcrionApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://kudryashka.pythonanywhere.com/'}),
  endpoints: (build) => ({
    getAction: build.query<IAction[], string>({
      query: () => ({
        url: 'action'
      })
    })
  })
})

export const { useGetActionQuery } = getActionApi