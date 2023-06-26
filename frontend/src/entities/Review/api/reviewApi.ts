import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Review} from "@/entities/Review/api/types";

export const reviewApi = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api/'}),
  endpoints: builder =>( {
    getReviews: builder.query<Review[], void>({query: () => 'reviews' }),
    getReviewsById: builder.query<Review[], string>({query: (movieId) => `reviews?movieId=${movieId}` })
  })
})

export const {useGetReviewsByIdQuery, useGetReviewsQuery} = reviewApi