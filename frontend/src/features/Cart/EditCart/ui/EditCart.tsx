import React from 'react';
import IconButton from "@/shared/ui/IconButton/IconButton";
import {cartActions} from "@/entities/Cart/model/slice";
import {RootState, useAppDispatch} from "@/shared/store/store";
import {useSelector} from "react-redux";
import {selectCartItem} from "@/entities/Cart/model/selector";
import styles from './EditCart.module.css';
import Icon from "@/shared/ui/Icon/Icon";

interface IProps {
  movieId: string
}

const EditCart = (props: IProps) => {
  const countInCart = useSelector<RootState, number>(state => selectCartItem(state, props.movieId))
  const dispatch = useAppDispatch()
  return (
    <div className={styles.editCart}>
      <IconButton onClick={() => dispatch(cartActions.decrement(props.movieId))} disabled={countInCart <= 0}>
        <Icon type="minus" size="small"/>
      </IconButton>
      <span className={styles.count}>{countInCart}</span>
      <IconButton onClick={() => dispatch(cartActions.increment(props.movieId))} disabled={countInCart >= 30}>
        <Icon type="plus" size="small"/>
      </IconButton>
    </div>
  );
};

export default EditCart;