
 import { combineReducers } from 'redux';
 import ingredientsReducer from './ingredients';
 import constructorReducer from './constructor'
 import {currentOrderReducer} from './order'
 import {currentIngredientReducer} from './ingredientDetails'
 import {userReducer} from './userForm'


 const rootReducer = combineReducers({
  ingredientList: ingredientsReducer,
  constructorList: constructorReducer,
  orderList: currentOrderReducer,
  ingredientDetail: currentIngredientReducer,
  userReducer: userReducer
})


export default rootReducer