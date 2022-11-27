import axios from "axios";

export async function getRandomFood() {
  const res = await axios.get(
    "https://api.spoonacular.com/recipes/random?apiKey=915e7e7a090e42399090d19cb2358e42"
  );
  return res.data;
}
