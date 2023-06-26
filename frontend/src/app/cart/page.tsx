"use client";
import React from "react";
import Container from "@/shared/ui/Container/Container";
import { useGetMoviesQuery } from "@/entities/Movie/api/movieApi";
import { useSelector } from "react-redux";
import { selectCartModule } from "@/entities/Cart/model/selector";
import { RootState } from "@/shared/store/store";
import MovieCard from "@/widgets/MovieCard/ui/MovieCard";
import EditCart from "@/features/Cart/EditCart/ui/EditCart";
import DeleteFromCart from "@/features/Cart/DeleteFromCart/ui/DeleteFromCart";
import styles from "./page.module.css";
import { Card } from "@/shared/ui/Card/Card";
import { CartSummary } from "@/widgets/CartSummary/CartSummary";

const Cart = () => {
	const cart = useSelector((state: RootState) => selectCartModule(state));
	const { data } = useGetMoviesQuery();
	return (
		<Container className={styles.container}>
			<div className={styles.list}>
				{data &&
					data
						.filter((movie) => !!cart[movie.id])
						.map((movie) => {
							return (
								<MovieCard key={movie.id}>
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
									<DeleteFromCart movieId={movie.id} />
								</MovieCard>
							);
						})}
				{Object.values(cart).length === 0 && <Card>Корзина пуста</Card>}
			</div>
			<CartSummary className={styles.summary} />
		</Container>
	);
};

export default Cart;
