import React from 'react';
import styles from './IconButton.module.css'
import Icon from "@/shared/ui/Icon/Icon";
import classNames from "classnames";

interface IProps {
  onClick?: React.MouseEventHandler,
  disabled?: boolean,
  children?: React.ReactNode,
  classname?: string
}

const IconButton = (props: IProps) => {
  return (
    <button className={classNames(styles.iconButton, props.classname)} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default IconButton;