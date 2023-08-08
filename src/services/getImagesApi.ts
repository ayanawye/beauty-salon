import { IImage } from "@/models/IImage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getImagesApi = createApi({
  reducerPath: "getImagesApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://kudryashka.pythonanywhere.com/'}),
  endpoints: (build) => ({
    getImages: build.query<IImage[], number>({
      query: (id) => ({
        url: `gallery/${id}/`
      })
    })
  })
})

export const { useGetImagesQuery } = getImagesApi