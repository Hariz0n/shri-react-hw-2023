"use client";
import React from "react";
import MovieCardFull from "@/widgets/MovieCardFull/ui/MovieCardFull";
import Container from "@/shared/ui/Container/Container";
import styles from "./page.module.css";
import { useGetMovieByIdQuery } from "@/entities/Movie/api/movieApi";
import { useParams } from "next/navigation";
import { useGetReviewsByIdQuery } from "@/entities/Review/api/reviewApi";
import ReviewList from "@/widgets/ReviewList/ui/ReviewList";
import CardSkeleton from "@/shared/ui/CardSkeleton/CardSkeleton";

const Movie = () => {
	const { movieId } = useParams();
	const {
		data: movie,
		isLoading: isLoadingMovie,
		error: errorMovie,
	} = useGetMovieByIdQuery(movieId);
	const {
		data: reviews,
		isLoading: isLoadingReviews,
		error: errorReviews,
	} = useGetReviewsByIdQuery(movieId);

	return (
		<Container className={styles.list}>
			{isLoadingMovie ? (
				<CardSkeleton className={styles.cardSk} />
			) : errorMovie || !movie ? (
				<div>Not found</div>
			) : (
				<MovieCardFull movie={movie} />
			)}
			{isLoadingReviews ? (
				<div className={styles.list}>
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
				</div>
			) : errorReviews || !reviews ? (
				<div>Not found</div>
			) : (
				<ReviewList reviews={reviews} />
			)}
		</Container>
	);
};

export default Movie;
