import styles from './IngredientDetails.module.css'
import ReactDOM from 'react-dom';
import IngredientDetailNutrition from '../IngredientDetails/IngredientDetailNutrition/IngredientDetailNutrition'
import PropTypes from "prop-types";


export default function IngredientDetails({ingredient}) {
    return (
      <>
        <h2 className= {`text text text_type_main-large" ${styles.ingredient__modal_header}`}>Детали ингредиента</h2>
        <img src ={ingredient.image} style={{alignSelf:"center", width:"480px", height:"240px", backgroundCover:'no-repeat', backgroundSize:'cover'}}/>
        <p className= "text text_type_main-medium mt-4" src ={ingredient.image} style={{alignSelf:"center"}}>{ingredient.name}</p>
        <IngredientDetailNutrition key={ingredient._id} ingredient={ingredient}/>
      </>
    )
  };

IngredientDetails.propTypes = {
  ingredient:  PropTypes.object,
  isModalOpened: PropTypes.bool,
  toggleModal: PropTypes.func,
}; 