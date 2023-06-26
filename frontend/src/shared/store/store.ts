import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "@/entities/Cart/model/slice";
import {useDispatch} from "react-redux";
import {movieApi} from "@/entities/Movie/api/movieApi";
import {reviewApi} from "@/entities/Review/api/reviewApi";
import {cinemaApi} from "@/entities/Cinema/api/cinemaApi";
import {filterReducer} from "@/features/Filter/model/slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartFilter: filterReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([movieApi.middleware, reviewApi.middleware, cinemaApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
