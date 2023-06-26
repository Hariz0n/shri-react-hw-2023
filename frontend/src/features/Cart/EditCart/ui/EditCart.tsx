import React, { useState } from "react";
import IconButton from "@/shared/ui/IconButton/IconButton";
import { cartActions } from "@/entities/Cart/model/slice";
import { RootState, useAppDispatch } from "@/shared/store/store";
import { useSelector } from "react-redux";
import { selectCartItem } from "@/entities/Cart/model/selector";
import styles from "./EditCart.module.css";
import Icon from "@/shared/ui/Icon/Icon";
import Modal from "@/entities/Modal/ui/Modal";

interface IProps {
	movieId: string;
}

const EditCart = (props: IProps) => {
	const countInCart = useSelector<RootState, number>((state) =>
		selectCartItem(state, props.movieId)
	);
	const dispatch = useAppDispatch();
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className={styles.editCart}>
			<IconButton
				onClick={() => {
					countInCart === 1
						? setIsModalOpen(true)
						: dispatch(cartActions.decrement(props.movieId));
				}}
				disabled={countInCart <= 0}
			>
				<Icon type="minus" size="small" />
			</IconButton>
			<span className={styles.count}>{countInCart}</span>
			<IconButton
				onClick={() => dispatch(cartActions.increment(props.movieId))}
				disabled={countInCart >= 30}
			>
				<Icon type="plus" size="small" />
			</IconButton>
			<Modal
				isOpen={isModalOpen}
				handleClose={() => setIsModalOpen(false)}
				handleConfirm={() => {
					dispatch(cartActions.deleteItem(props.movieId));
					setIsModalOpen(false);
				}}
				title="Удаление билета"
			>
				Вы уверены, что хотите удалить билет?
			</Modal>
		</div>
	);
};

export default EditCart;
