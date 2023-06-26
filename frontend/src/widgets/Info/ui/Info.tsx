import React from 'react';
import {Card} from "@/shared/ui/Card/Card";
import styles from './Info.module.css';

export const Info = (props: {children: React.ReactNode}) => {
  return (
    <Card className={styles.info}>
      {props.children}
    </Card>
  );
};
