import axios from "axios";

export async function getRandomFood() {
  const res = await axios.get(
    "https://api.spoonacular.com/recipes/random?apiKey=915e7e7a090e42399090d19cb2358e42",
    { params: { number: 30 } }
  );
  return res.data;
}

export async function getMealPlan() {
  const res = await axios.get(
    "https://api.spoonacular.com/mealplanner/generate?apiKey=915e7e7a090e42399090d19cb2358e42"
  );
  return res.data;
}

export async function getForm() {
  const res = await axios.get("https://sheetdb.io/api/v1/cmqnl8n0lcadt");
  return res.data;
}
