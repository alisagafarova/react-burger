const config = {
    API_URL: 'https://norma.nomoreparties.space/api',
    headers: {
        'Content-Type': 'application/json'
      }
  }

const ingredientsList1 = ['60d3b41abdacab0026a733c7', '60d3b41abdacab0026a733cd', '60d3b41abdacab0026a733c7']

function handleBasicResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}


export function getlIngredientsApi() {
    return fetch(`${config.API_URL}/ingredients`)
    .then((res) => {
        return handleBasicResponse(res);
    })
}

export function orderApi(ingredientsList) {
    return fetch(`${config.API_URL}/orders`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            ingredients: ingredientsList,
        })
        })
    .then((res) => {
        return handleBasicResponse(res);
    });
} 

const request = orderApi(ingredientsList1)