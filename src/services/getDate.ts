import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getDateApi = createApi({
  reducerPath: "getDateApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://kudryashka.pythonanywhere.com/'}),
  endpoints: (build) => ({
    getWeekDate: build.query<any, number>({
      query: (id) => ({
        url: `https://kudryashka.pythonanywhere.com/members/${id}/weekly_slots/`
      })
    }),
    getTodaySlote: build.query<any, any>({
      query: (id) => ({
        url: `members/${id}/day_slots/`
      })
    })
  })
})

export const { useGetWeekDateQuery, useGetTodaySloteQuery } = getDateApi