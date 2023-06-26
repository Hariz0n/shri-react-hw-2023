"use client";
import styles from "./page.module.css";
import Container from "@/shared/ui/Container/Container";
import { Card } from "@/shared/ui/Card/Card";
import {
	useGetCinemaMoviesQuery,
	useGetMoviesQuery,
} from "@/entities/Movie/api/movieApi";
import MovieCard from "@/widgets/MovieCard/ui/MovieCard";
import React, { useState } from "react";
import EditCart from "@/features/Cart/EditCart/ui/EditCart";
import DeleteFromCart from "@/features/Cart/DeleteFromCart/ui/DeleteFromCart";
import Filter from "@/widgets/Filter/ui/Filter";
import { useSelector } from "react-redux";
import {
	selectFilterCinema,
	selectFilterGenre,
	selectFilterModule,
	selectFilterText,
} from "@/features/Filter/model/selector";
import { RootState } from "@/shared/store/store";
import { Movie } from "@/entities/Movie/api/types";
import CardSkeleton from "@/shared/ui/CardSkeleton/CardSkeleton";

export default function Home() {
	const filtersText = useSelector((state: RootState) =>
		selectFilterText(state)
	);
	const filtersCinema = useSelector((state: RootState) =>
		selectFilterCinema(state)
	);
	const filtersGenre = useSelector((state: RootState) =>
		selectFilterGenre(state)
	);
	const { data, isFetching } = useGetCinemaMoviesQuery(filtersCinema);

	return (
		<Container className={styles.main}>
			<Filter className={styles.aside} />
			<ul className={styles.list}>
				{isFetching && (
					<div
						style={{ display: "flex", flexDirection: "column", gap: "16px" }}
					>
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
					</div>
				)}
				{!isFetching && !data && (
					<Card>
						<h1>Не удалось загрузить данные</h1>
					</Card>
				)}
				{!isFetching &&
					data &&
					data
						.filter((movie) => {
							return (
								movie.genre === (filtersGenre ?? movie.genre) &&
								movie.title.toLowerCase().includes(filtersText.toLowerCase())
							);
						})
						.map((movie) => (
							<MovieCard key={movie.id} movie={movie}>
								<MovieCard.Image
									title={movie.title}
									posterUrl={movie.posterUrl}
								/>
								<MovieCard.Content
									id={movie.id}
									title={movie.title}
									genre={movie.genre}
								/>
								<EditCart movieId={movie.id} />
							</MovieCard>
						))}
			</ul>
		</Container>
	);
}
