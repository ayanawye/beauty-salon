import { ICourses } from "@/models/ICourses";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getCoursesApi = createApi({
  reducerPath: "getCoursesApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://kudryashka.pythonanywhere.com/'}),
  endpoints: (build) => ({
    getCourses: build.query<ICourses[], ''>({
      query: () => ({
        url: '/courses/'
      })
    })
  })
})

export const { useGetCoursesQuery} = getCoursesApi