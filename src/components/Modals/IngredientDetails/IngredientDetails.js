import styles from './IngredientDetails.module.css'
import IngredientDetailNutrition from '../IngredientDetails/IngredientDetailNutrition/IngredientDetailNutrition'
import {useSelector} from 'react-redux';

export default function IngredientDetails() {

  const ingredientCard = useSelector(store => store.ingredientDetail.currentIngredient)

    return (
      <>
        <h2 className= {`text text text_type_main-large" ${styles.ingredient__modal_header}`}>Детали ингредиента</h2>
        <img src ={ingredientCard.image} style={{alignSelf:"center", width:"480px", height:"240px", backgroundCover:'no-repeat', backgroundSize:'cover'}}/>
        <p className= "text text_type_main-medium mt-4" src ={ingredientCard.image} style={{alignSelf:"center"}}>{ingredientCard.name}</p>
        <IngredientDetailNutrition key={ingredientCard._id} ingredient={ingredientCard}/>
      </>
    )
  };
