import React from 'react';
import {Card} from "@/shared/ui/Card/Card";
import styles from './CartSummary.module.css';
import {useSelector} from "react-redux";
import {selectCartCount} from "@/entities/Cart/model/selector";
import {RootState} from "@/shared/store/store";
import classNames from "classnames";

interface IProps {
  className?: string
}

export const CartSummary = (props: IProps) => {
  const cartCount = useSelector<RootState, number>((state: RootState) => selectCartCount(state))
  return (
    <Card className={classNames(styles.container, props.className)}>
      <h3 className={styles.text}>Итого билетов:</h3>
      <span className={styles.text}>{cartCount}</span>
    </Card>
  );
};
