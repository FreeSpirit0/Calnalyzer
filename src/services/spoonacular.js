import axios from "axios";

export async function getRandomFood() {
  const res = await axios.get("https://api.spoonacular.com/recipes/random");
  return res.data;
}
