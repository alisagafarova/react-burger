const config = {
  API_URL: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

export function getlIngredientsApi() {
  return fetch(`${config.API_URL}/ingredients`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}

export function orderApi(ingredientsList) {
  return fetch(`${config.API_URL}/orders`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      ingredients: ingredientsList,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
}
