import React from 'react';
import classNames from "classnames";
import styles from './InputSkeletop.module.css'

const InputSkeleton = () => {
  return (
    <div>
      <div className={styles.inputWrapper}>
        <div className={classNames(styles.title)} ></div>
        <div className={classNames(styles.input)} />
      </div>
    </div>
  );
};

export default InputSkeleton;