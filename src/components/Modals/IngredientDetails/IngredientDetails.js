import styles from './IngredientDetails.module.css';
import IngredientDetailNutrition from '../IngredientDetails/IngredientDetailNutrition/IngredientDetailNutrition';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function IngredientDetails() {
  const ingredientCard = useSelector((store) => store.ingredientDetail.currentIngredient);
  ingredientCard.uniqueId = uuidv4()

  return (
    <>
      <h2 className={`text text text_type_main-large" ${styles.ingredient__modal_header}`}>
        Детали ингредиента
      </h2>
      <img
        src={ingredientCard.image}
        className={styles.ingredient__modal_img}
        alt={ingredientCard.name}
      />
      <p
        className={`text text_type_main-medium mt-4" ${styles.ingredient__modal_text}`}
        src={ingredientCard.image}>
        {ingredientCard.name}
      </p>
      <IngredientDetailNutrition key={ingredientCard.uniqueId} ingredient={ingredientCard} />
    </>
  );
}
