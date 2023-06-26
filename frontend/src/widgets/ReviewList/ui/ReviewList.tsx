import React from 'react';
import {Review} from "@/entities/Review/ui/Review/Review";
import type {Review as Comment} from "@/entities/Review/api/types";
import styles from './ReviewList.module.css';

interface IProps {
  reviews: Comment[]
}

const ReviewList = ({reviews}: IProps) => {
  return (
    <ul className={styles.list}>
      {reviews.map(review => <Review key={review.id} review={review}></Review>)}
    </ul>
  );
};

export default ReviewList;