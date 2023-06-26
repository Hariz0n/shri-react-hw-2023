"use client";
import styles from "./page.module.css";
import Container from "@/shared/ui/Container/Container";
import { Card } from "@/shared/ui/Card/Card";
import { useGetCinemaMoviesQuery } from "@/entities/Movie/api/movieApi";
import MovieCard from "@/widgets/MovieCard/ui/MovieCard";
import React from "react";
import EditCart from "@/features/Cart/EditCart/ui/EditCart";
import Filter from "@/widgets/Filter/ui/Filter";
import { useSelector } from "react-redux";
import {
	selectFilterCinema,
	selectFilterGenre,
	selectFilterText,
} from "@/features/Filter/model/selector";
import { RootState } from "@/shared/store/store";
import CardSkeleton from "@/shared/ui/CardSkeleton/CardSkeleton";
import { Movie } from "@/entities/Movie/api/types";
import { Info } from "@/widgets/Info/ui/Info";

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

	const MList = () => {
		let filteredMovies: Movie[] | undefined;
		if (data) {
			filteredMovies = data.filter((movie) => {
				return (
					movie.genre === (filtersGenre ?? movie.genre) &&
					movie.title.toLowerCase().includes(filtersText.toLowerCase())
				);
			});
		}
		if (!filteredMovies) return null;
		if (filteredMovies.length === 0) {
			return (
				<Info>
					<h2>Фильмы не найдены</h2>
					<p>Измените параметры фильтрации</p>
				</Info>
			);
		}
		return filteredMovies.map((movie) => (
			<MovieCard key={movie.id}>
				<MovieCard.Image title={movie.title} posterUrl={movie.posterUrl} />
				<MovieCard.Content
					id={movie.id}
					title={movie.title}
					genre={movie.genre}
				/>
				<EditCart movieId={movie.id} />
			</MovieCard>
		));
	};

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
				{!isFetching && data && <MList></MList>}
			</ul>
		</Container>
	);
}
