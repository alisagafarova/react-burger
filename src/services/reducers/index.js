
 import { combineReducers } from 'redux';
 import ingredientsReducer from './ingredients';
 import constructorReducer from './constructor'
 import {currentOrderReducer} from './order'


 const rootReducer = combineReducers({
  ingredientList: ingredientsReducer,
  constructorList: constructorReducer,
  orderList: currentOrderReducer
})


export default rootReducer