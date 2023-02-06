import styles from './IngredientCard.module.css'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState , useMemo} from "react";
import IngredientDetails from "../Modals/IngredientDetails/IngredientDetails"
import Modal from "../Modals/Modal/Modal"
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import {useSelector} from 'react-redux';



export default function IngredientCard(ingredient) {
  
  const ingridientElement = ingredient.ingredient
  const {bun, fillings} = useSelector(store => store.constructorList)
  const [modal, isModalOpen] = useState(false);

  const toggleModal = () => {
    isModalOpen(!modal);
  };

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {ingridientElement}
  });


 const counter = useMemo(() => {
  if (bun != null) {
    if ( ingridientElement.type === 'bun' && ingridientElement._id === bun._id) {
      return 2
      }
    }
    if(fillings.ingridientElement != []) {
      return  Object.keys(fillings.filter(ingredient => ingredient._id === ingridientElement._id)).length
      }
    return 1;
  }, [ingridientElement, fillings, bun]);

    return(
        <>
          <div ref={ dragRef } onClick = {toggleModal} className={styles.ingredient}>
          <Counter count={counter} size="default" extraClass="m-1"/>
            <img src={ingridientElement.image} className={styles.ingredient__image}/>
            <div className ={`mt-2 ${styles.ingredient__price}`}>
              <p className="text text_type_digits-default mt-2">{ingridientElement.price}</p>
              <CurrencyIcon type="primary"/>
            </div>
            <p className={`text text_type_main-small mt-2 ${styles.ingredient__text}`}>{ingridientElement.name}</p>
          </div>

          { modal && 
          <Modal toggleModal={toggleModal} isModalOpened = {modal}>
              <IngredientDetails key={ingridientElement._id} ingredient={ingridientElement}/>
          </Modal>
          }
          
       </>
    )
};

IngredientCard.propTypes = {
  ingredient: PropTypes.object
}; 
