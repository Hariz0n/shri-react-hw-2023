"use client"
import React from 'react';
import Link from "next/link";
import Icon from "@/shared/ui/Icon/Icon";
import {useSelector} from "react-redux";
import {selectCartCount} from "@/entities/Cart/model/selector";
import {RootState} from "@/shared/store/store";
import styles from './HeaderCart.module.css'
import IconButton from "@/shared/ui/IconButton/IconButton";

const HeaderCart = () => {
  const cartCount = useSelector<RootState, number>(state => selectCartCount(state))
  return (
    <div className={styles.cartWrapper}>
      {cartCount ? <div className={styles.cartCount}>{cartCount}</div> : null}
      <Link href={"/cart"} className={styles.cartIcon}>
        <Icon type="cart" size="large"/>
      </Link>
    </div>
  );
};

export default HeaderCart;