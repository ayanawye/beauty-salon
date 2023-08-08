import { IDetailService, IServicePrice } from '@/models/IDetailService';
import { IService } from '@/models/IService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const servisesApi = createApi({
  reducerPath: "servisesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://kudryashka.pythonanywhere.com/" }),
  endpoints: (build) => ({
    getService: build.query<IService[], "">({
      query: () => ({
        url: "service_category/"
      })
    }),
    getDetailService: build.query<IDetailService, number>({
      query: (id) => ({
        url: `service-category-detail/${id}/`
      })
    }),
    getServiceCategoryPrice: build.query<IServicePrice[], number>({
      query: (id) => ({
        url: `service/${id}/`
      })
    }),
  })
});

export const { useGetServiceQuery, useGetDetailServiceQuery, useGetServiceCategoryPriceQuery } = servisesApi