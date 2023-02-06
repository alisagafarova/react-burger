import {getlIngredientsApi} from '../../utils/ingredientsApi'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';



export default function getItems() {
    return function(dispatch) {
      dispatch({                                                                                                                                                                                                                                                                                                                
        type: GET_INGREDIENTS_REQUEST
      });
      getlIngredientsApi()
      .then( res => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED
          });
        }
      });
    };
  }




