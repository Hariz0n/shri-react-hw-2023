import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {Movie} from "@/entities/Movie/api/types";

export const movieApi = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api/"}),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({query: () => 'movies'}),
    getMovieById: builder.query<Movie, string>({query: (movieId: string) => `movie?movieId=${movieId}`}),
    getCinemaMovies: builder.query<Movie[], string | undefined>({query: (cinemaId: string) => `movies?cinemaId=${cinemaId}`}),
  })
})

export const {useGetMoviesQuery, useGetMovieByIdQuery, useGetCinemaMoviesQuery} = movieApi