"use client";
import React, { useEffect, useRef } from "react";
import ReactPortal from "@/entities/Portal/ui/ReactPortal";
import { Card } from "@/shared/ui/Card/Card";
import styles from "./Modal.module.css";
import Icon from "@/shared/ui/Icon/Icon";
import { Button } from "@/shared/ui/Button/Button";

interface IProps {
	children: React.ReactNode;
	title: string;
	isOpen: boolean;
	handleClose: () => void;
	handleConfirm: () => void;
}

const Modal = (props: IProps) => {
	const modalBack = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const back = modalBack?.current;
		const listener = (ev: MouseEvent) => {
			if (ev.target === ev.currentTarget) {
				props.handleClose();
			}
		};
		back?.addEventListener("click", listener);
		return () => {
			back?.removeEventListener("click", listener);
		};
	}, [props, props.isOpen]);

	if (!props.isOpen) return null;
	return (
		<ReactPortal>
			<div className={styles.modalBack} ref={modalBack}>
				<Card className={styles.modal}>
					<div className={styles.content}>
						<div className={styles.titleWrapper}>
							<h6 className={styles.title}>{props.title}</h6>
							<Icon
								type="cross"
								size="normal"
								onClick={props.handleClose}
								className={styles.icon}
							/>
						</div>
						<p>{props.children}</p>
					</div>
					<div className={styles.actions}>
						<Button onClick={props.handleConfirm} type="primary">
							Да
						</Button>
						<Button onClick={props.handleClose} type="secondary">
							Нет
						</Button>
					</div>
				</Card>
			</div>
		</ReactPortal>
	);
};

export default Modal;
