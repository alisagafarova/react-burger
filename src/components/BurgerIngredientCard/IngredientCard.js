import styles from './IngredientCard.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useMemo } from 'react';
import IngredientDetails from '../Modals/IngredientDetails/IngredientDetails';
import Modal from '../Modals/Modal/Modal';
import { useDrag } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { CURRENT_INGREDIENT } from '../../services/actions/ingredientDetails';

export default function IngredientCard(props) {
  const ingridientElement = props.ingredient;
  const { bun, fillings } = useSelector((store) => store.constructorList);

  const [modal, isModalOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch({ type: CURRENT_INGREDIENT, payload: ingridientElement });
    isModalOpen(!modal);
  };

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { ingridientElement },
  });

  const counter = useMemo(() => {
    if (bun != null) {
      if (ingridientElement.type === 'bun' && ingridientElement._id === bun._id) {
        return 2;
      }
    }
    if (fillings.ingridientElement !== []) {
      return Object.keys(fillings.filter((props) => props._id === ingridientElement._id)).length;
    }
    return 1;
  }, [ingridientElement, fillings, bun]);

  return (
    <>
      <div
        id={ingridientElement._id}
        ref={dragRef}
        onClick={toggleModal}
        className={styles.ingredient}>
        <Counter count={counter} size="default" extraClass="m-1" />
        <img
          src={ingridientElement.image}
          className={styles.ingredient__image}
          alt={ingridientElement.name}
        />
        <div className={`mt-2 ${styles.ingredient__price}`}>
          <p className="text text_type_digits-default mt-2">{ingridientElement.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`text text_type_main-small mt-2 ${styles.ingredient__text}`}>
          {ingridientElement.name}
        </p>
      </div>

      {modal && (
        <Modal toggleModal={toggleModal}>
          <IngredientDetails key={ingridientElement._id} />
        </Modal>
      )}
    </>
  );
}
