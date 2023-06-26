import React from 'react';
import {Review as Comment} from "@/entities/Review/api/types";
import {Card} from "@/shared/ui/Card/Card";
import styles from './Review.module.css'
import Icon from "@/shared/ui/Icon/Icon";

interface IProps {
  review: Comment
}

export const Review = ({review}: IProps) => {
  return (
    <li>
      <Card className={styles.review}>
        <div className={styles.img}>
          <Icon type="photo" size="normal"/>
        </div>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <h3>{review.name}</h3>
            <p>Оценка: <span>{review.rating}</span></p>
          </div>
          <p>{review.text}</p>
        </div>
      </Card>
    </li>
  );
};
