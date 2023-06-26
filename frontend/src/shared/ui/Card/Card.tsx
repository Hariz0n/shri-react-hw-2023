import React from "react";
import classNames from "classnames";
import styles from "./Card.module.css";

interface IProps {
	className?: string;
	children?: React.ReactNode;
	refData?: React.Ref<HTMLDivElement>;
}

export const Card = (props: IProps) => {
	return (
		<div
			ref={props.refData ?? null}
			className={classNames(styles.card, props.className)}
		>
			{props.children}
		</div>
	);
};
