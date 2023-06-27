import React from "react";
import { Card } from "@/shared/ui/Card/Card";
import styles from "./CardSkeleton.module.css";
import classNames from "classnames";

interface IProps {
	className?: string;
}

const CardSkeleton = ({ className }: IProps) => {
	return <Card className={classNames(styles.card, className)}></Card>;
};

export default CardSkeleton;
