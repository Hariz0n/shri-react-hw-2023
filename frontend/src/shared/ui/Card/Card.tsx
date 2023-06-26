import React from 'react';
import classNames from "classnames";
import styles from './Card.module.css'

interface IProps {
  className?: string
  children?: React.ReactNode
}

export const Card = (props: IProps) => {
  return (
    <div className={classNames(styles.card, props.className)}>
      {props.children}
    </div>
  );
};
