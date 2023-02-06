import styles from './BurgerTotalBlock.module.css';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import OrderDetails from '../Modals/OrderDetails/OrderDetails'
import Modal from "../Modals/Modal/Modal"
import {createOrder} from '../../services/actions/order'
import {useDispatch} from 'react-redux';


const modalRoot = document.getElementById("modal");

export default function BurgerTotalBlock({
  ingredients,
  totalPrice
  }) 
  {
  const [modal, isModalOpen] = useState(false);
  const dispatch = useDispatch()

  const toggleModal = () => {
    isModalOpen(!modal);
  }

  const onClickButton = () => {
    isModalOpen(!modal);
    dispatch(createOrder(ingredients));
  }
  
  {
   return (
    <div className={styles.constructor__total}>
      <div className={styles.constructor__order}>
        <p className="text text_type_digits-default">{totalPrice}</p>
        <CurrencyIcon type="primary"/>
      </div>
      <Button onClick= {onClickButton} htmlType="button" type="primary" size="small" extraClass="ml-10" >
        <p className="text text_type_main-default">
          Оформить заказ
        </p>
      </Button>
    {modal && 
    <Modal isModalOpened={modal} toggleModal={toggleModal}>
      <OrderDetails/>
    </Modal>}
    </div>
   )
}
  }
