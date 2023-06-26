import React from "react";
import { Card } from "@/shared/ui/Card/Card";
import styles from "./MovieCard.module.css";
import { Movie } from "@/entities/Movie/api/types";
import { Roboto } from "next/font/google";
import classNames from "classnames";
import Link from "next/link";
import { GENRE } from "@/shared/translations/Genre";

interface IProps {
	children: React.ReactNode;
}

const roboto = Roboto({
	style: ["normal", "italic"],
	subsets: ["cyrillic-ext"],
	weight: ["400", "700"],
});

const MovieCard = ({ children }: IProps) => {
	return <Card className={styles.filmCard}>{children}</Card>;
};

MovieCard.Image = function MovieImage({
	posterUrl,
	title,
}: Pick<Movie, "title" | "posterUrl">) {
	return <img src={posterUrl} alt={title} className={styles.image} />;
};

MovieCard.Content = function MovieContent({
	id,
	title,
	genre,
}: Pick<Movie, "id" | "title" | "genre">) {
	return (
		<div className={styles.content}>
			<Link style={{ textDecoration: "none" }} href={`/movies/${id}`}>
				<h2 className={classNames(roboto.className, styles.title)}>{title}</h2>
			</Link>
			<span className={styles.genre}>{GENRE[genre]}</span>
		</div>
	);
};

export default MovieCard;
