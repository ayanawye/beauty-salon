import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const consultationApi = createApi({
  reducerPath: 'consultationApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://kudryashka.pythonanywhere.com/'}),
  endpoints: (build) => ({
    postPhone: build.mutation<any, any>({
      query: (obj) => ({
        url: 'consultation-create/',
        method: "POST",
        body: obj
      })
    })
  }) 
})

export const { usePostPhoneMutation} = consultationApi