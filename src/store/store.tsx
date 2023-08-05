import { getAddressApi } from "@/services/getAddressApi";
import { servisesApi } from "@/services/getServiceApi";
import { getSpecialists1Api } from "@/services/getSpecialists1";
import { getSpecialists2Api } from "@/services/getSpecialists2";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [servisesApi.reducerPath]: servisesApi.reducer,
    [getAddressApi.reducerPath]: getAddressApi.reducer,
    [getSpecialists1Api.reducerPath]: getSpecialists1Api.reducer,
    [getSpecialists2Api.reducerPath]: getSpecialists2Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      servisesApi.middleware,
      getAddressApi.middleware,
      getSpecialists1Api.middleware,
      getSpecialists2Api.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
