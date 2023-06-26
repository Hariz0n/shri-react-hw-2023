import React, {useState} from "react";
import Icon from "@/shared/ui/Icon/Icon";
import Modal from "@/entities/Modal/ui/Modal";
import {useAppDispatch} from "@/shared/store/store";
import {cartActions} from "@/entities/Cart/model/slice";

interface IProps {
  movieId: string
}

const DeleteFromCart = ({movieId}: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch()
  return (
    <>
      <Icon type="cross" size="normal" onClick={() => setIsModalOpen(true)}/>
      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} handleConfirm={() => {
        dispatch(cartActions.deleteItem(movieId))
        setIsModalOpen(false)
      }} title="Удаление билета">Вы уверены, что хотите удалить билет?</Modal>
    </>
  );
};

export default DeleteFromCart;