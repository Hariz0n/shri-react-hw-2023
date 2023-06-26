import React from 'react';
import styles from './Container.module.css'
import classNames from "classnames";

interface IProps {
  children: React.ReactNode,
  className?: string
}
const Container = ({children, className}: IProps) => {
  return (
    <div className={classNames(styles.container, className)}>
      {children}
    </div>
  );
};

export default Container;