import styles from './BurgerIngredients.module.css'
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import BurgerIngridientsBlock from "../BurgerIngridientsBlock/BurgerIngridientsBlock"
import {useSelector} from 'react-redux';


const ingredientBlockNames = [
    {
       name: 'Булки',
       value: 'bun',
    },
    {
       name: 'Соусы',
       value: 'sauce',
    },
    {
       name: 'Начинки',
       value: 'main',
    }
 ]

export default function BurgerIngredients() {

  const ingredients = useSelector(store => store.ingredientList.ingredients);
  const [currentBlock, setBlockState] = useState('bun')
  
  useEffect(() => {
      document.getElementById(currentBlock).scrollIntoView({ behavior: "smooth" } )
    }, [currentBlock]);

  return (
    <section className={`mt-30" ${styles.ingredients}`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className="mt-5" style={{ display: 'flex'}}>
        {ingredientBlockNames.map( tab => 
            <Tab
                key={ tab.name }
                value={ tab.value }
                active={ currentBlock === tab.value }
                onClick={ setBlockState }
            >{tab.name }
            </Tab>
            )
            }
    </div>
    {ingredients != undefined &&
    <div className={styles.ingredients__blocks}>
        {ingredientBlockNames.map( ingredientName =>
            <BurgerIngridientsBlock 
            key={ingredientName.name}
            ingredientBlockName={ingredientName}
            ingredientsArray={ingredients}></BurgerIngridientsBlock>
        )}
    </div>
    }
    </section>
  )
};
