import { getActionApi } from "@/services/getAction";
import { getAddressApi } from "@/services/getAddressApi";
import { getImagesApi } from "@/services/getImagesApi";
import { servisesApi } from "@/services/getServiceApi";
import { getSpecialists1Api } from "@/services/getSpecialists1";
import { getSpecialists2Api } from "@/services/getSpecialists2";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import createRecordSlice from './reducers/createRecordSlice'
import memberIdSlice from './reducers/memberIdSlice'
import { getDateApi } from "@/services/getDate";
import { getSpecialistsApi } from "@/services/getSpecialist";

export const store = configureStore({
  reducer: {
    [servisesApi.reducerPath]: servisesApi.reducer,
    [getAddressApi.reducerPath]: getAddressApi.reducer,
    [getSpecialists1Api.reducerPath]: getSpecialists1Api.reducer,
    [getSpecialists2Api.reducerPath]: getSpecialists2Api.reducer,
    [getActionApi.reducerPath]: getActionApi.reducer,
    [getSpecialistsApi.reducerPath]: getSpecialistsApi.reducer,
    [getImagesApi.reducerPath]: getImagesApi.reducer,
    [getDateApi.reducerPath]: getDateApi.reducer,
    createRecordSlice,
    memberIdSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      servisesApi.middleware,
      getAddressApi.middleware,
      getSpecialists1Api.middleware,
      getSpecialists2Api.middleware,
      getActionApi.middleware,
      getImagesApi.middleware,
      getDateApi.middleware,
      getSpecialistsApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
