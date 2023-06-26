import React from 'react';
import Link from "next/link";
import {Roboto} from "next/font/google";
import classNames from "classnames";
import styles from './HeaderLogo.module.css'
const roboto = Roboto({weight: '700', subsets: ['cyrillic-ext']})

export const HeaderLogo = () => {
  return (
    <Link href='/' style={{textDecoration: 'none'}}>
      <h1 className={classNames(styles.logo, roboto.className)}>Билетопоиск</h1>
    </Link>
  );
};
