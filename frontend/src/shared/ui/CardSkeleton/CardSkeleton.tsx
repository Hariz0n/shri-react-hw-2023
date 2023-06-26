import React from 'react';
import {Card} from "@/shared/ui/Card/Card";
import styles from './CardSkeleton.module.css'

const CardSkeleton = () => {
  return (
    <Card className={styles.card}></Card>
  );
};

export default CardSkeleton;