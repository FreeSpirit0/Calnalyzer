import axios from "axios";

export async function getRandomFood() {
  const res = await axios.get(
    "https://api.spoonacular.com/recipes/random?apiKey=915e7e7a090e42399090d19cb2358e42",
    { params: { number: 30 } }
  );
  return res.data;
}

export async function getMenuItems(searchTerm: string) {
  const res = await axios.get(
    `https://api.spoonacular.com/food/menuItems/search?apiKey=15d54d816d3b4197b5cccc6d4f21f343&query=${searchTerm}&number=1`
  );
  return res.data
}

export async function getMenuInfo(menuId: number) {
  const res = await axios.get(
    `https://api.spoonacular.com/food/menuItems/${menuId}?apiKey=15d54d816d3b4197b5cccc6d4f21f343`
  )
  return res.data
};

export async function getMealPlan(calorie: number) {
  const res = await axios.get(
    `https://api.spoonacular.com/mealplanner/generate?apiKey=15d54d816d3b4197b5cccc6d4f21f343&targetCalories=${calorie}`
  );
  return res.data;
}

export async function getForm() {
  const res = await axios.get("https://sheetdb.io/api/v1/s7jk47tddgo32");
  return res.data;
}

export async function getWorkOut() {
  const res = await axios.get("https://sheetdb.io/api/v1/p2vz2vuhd6wf5");
  return res.data;
}
