import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Cinema} from "@/entities/Cinema/api/types";

export const cinemaApi = createApi({
  reducerPath: 'cinema',
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api/"}),
  endpoints: builder => ({
    getCinemas: builder.query<Cinema[], void>({query: () => 'cinemas'})
  })
})

export const {useGetCinemasQuery} = cinemaApi