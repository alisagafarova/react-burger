import styles from './BurgerIngridientsBlock.module.css';
import IngredientCard from '../BurgerIngredientCard/IngredientCard';
import PropTypes from 'prop-types';

export default function BurgerIngridientsBlock({ ingredientBlockName, ingredientsArray }) {
  const ingredientGroupArray = ingredientsArray.filter(
    (element) => element.type === ingredientBlockName.value,
  );

  return (
    <>
      <div className="mt-10">
        <p id={ingredientBlockName.value} className="text text_type_main-medium">
          {ingredientBlockName.name}
        </p>
        <div className={styles.ingredient_block__grid}>
          {ingredientGroupArray.map((groupIngredient, index) => (
            <IngredientCard
              key={groupIngredient._id}
              ingredient={groupIngredient}
              num={index}></IngredientCard>
          ))}
        </div>
      </div>
    </>
  );
}

BurgerIngridientsBlock.propTypes = {
  ingredientBlockName: PropTypes.object,
  ingredientsArray: PropTypes.array,
};
