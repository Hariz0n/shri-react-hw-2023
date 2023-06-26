import React from 'react';
import styles from './Input.module.css'
import localFont from "next/font/local";
import classNames from "classnames";

interface IProps {
  id: string
  title: string
  name: string
  placeholder: string
  onChange: (value: string) => void,
  value?: string
}

const SFPro = localFont({
  src: "./sf-pro-display_regular.woff2",
  weight: '400',
  style: 'normal',
})

export const Input = (props: IProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={classNames(styles.title, SFPro.className)} htmlFor={props.id}>{props.title}</label>
      <input className={classNames(styles.input, SFPro.className)} onChange={(event) => props.onChange(event.target.value.trim())} placeholder={props.placeholder} type="text" id={props.id} name={props.name}/>
    </div>
  );
};