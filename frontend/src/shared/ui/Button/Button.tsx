import React from 'react';
import classNames from "classnames";
import {Roboto} from "next/font/google";
import styles from './Button.module.css'

interface IProps {
  children: React.ReactNode,
  onClick: React.MouseEventHandler
  type: 'primary' | 'secondary'
}

const roboto = Roboto({
  subsets: ['cyrillic-ext'],
  weight: '500'
})

export const Button = (props: IProps) => {
  return (
    <button className={classNames(roboto.className, props.type === 'primary' ? styles.primary : styles.secondary)} onClick={props.onClick}>
    {/*<button className={styles.secondary} onClick={props.onClick}>*/}
      {props.children}
    </button>
  );
};
