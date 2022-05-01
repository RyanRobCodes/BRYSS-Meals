// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

// save book data for a logged in user
export const saveMeal = (mealData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(mealData),
  });
};

// remove saved meal data for a logged in user
export const deleteMeal = (bookId, token) => {
  return fetch(`/api/users/meals/${bookId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to google books api

// export const searchMeals = (query) => {
//   return fetch(
//     `https://api.edamam.com/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
//   );
// };

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
    "X-RapidAPI-Key": "82af9eb5a08fc44832b441adc629688f",
  },
};

fetch(
  "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//   www.themealdb.com/api/json/v1/1/lookup.php?i=52772
