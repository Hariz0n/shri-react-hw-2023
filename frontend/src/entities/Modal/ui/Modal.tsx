"use client"
import React from 'react';
import ReactPortal from "@/entities/Portal/ui/ReactPortal";
import {Card} from "@/shared/ui/Card/Card";
import styles from './Modal.module.css'
import Icon from "@/shared/ui/Icon/Icon";
import {Button} from "@/shared/ui/Button/Button";

interface IProps {
  children: React.ReactNode
  title: string
  isOpen: boolean
  handleClose: React.MouseEventHandler
  handleConfirm: React.MouseEventHandler
}

const Modal = (props: IProps) => {
  if (!props.isOpen) return null
  return (
    <ReactPortal>
      <div className={styles.modalBack}>
        <Card className={styles.modal}>
          <div className={styles.content}>
            <div className={styles.titleWrapper}>
              <h6 className={styles.title}>{props.title}</h6>
              <Icon type="cross" size="normal" onClick={props.handleClose} className={styles.icon}/>
            </div>
            <p>{props.children}</p>
          </div>
          <div className={styles.actions}>
            <Button onClick={props.handleConfirm} type="primary">Да</Button>
            <Button onClick={props.handleClose} type="secondary">Нет</Button>
          </div>
        </Card>
      </div>
    </ReactPortal>
  );
};

export default Modal;