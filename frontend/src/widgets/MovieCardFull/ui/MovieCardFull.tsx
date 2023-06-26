import React from 'react';
import {Card} from "@/shared/ui/Card/Card";
import styles from './MovieCardFull.module.css'
import {Movie} from "@/entities/Movie/api/types";
import EditCart from "@/features/Cart/EditCart/ui/EditCart";

interface IProps {
  movie: Movie
}

const MovieCardFull = ({movie}: IProps) => {
  return (
    <Card className={styles.movieCardFull}>
      <img src={movie.posterUrl} alt={movie.title} className={styles.image}/>
      <div className={styles.contentWrapper}>
        <div className={styles.infoWrapper}>
          <div className={styles.headerWrapper}>
            <h2 className={styles.title}>{movie.title}</h2>
            <EditCart movieId={movie.id}/>
          </div>
          <ul className={styles.list}>
            <li className={styles.listItem}>Жанр: {movie.genre}</li>
            <li className={styles.listItem}>Год выпуска: {movie.releaseYear}</li>
            <li className={styles.listItem}>Рейтинг: {movie.rating}</li>
            <li className={styles.listItem}>Режисер: {movie.director}</li>
          </ul>
        </div>
        <div className={styles.descrWrapper}>
          <h3>Описание</h3>
          <p>{movie.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default MovieCardFull;