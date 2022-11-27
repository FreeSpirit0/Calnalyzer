import { useState, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react'
import { getRandomFood } from "../services/spoonacular.js";
const Content = () => {
  const [randomFood, setRandomFood] = useState<any[]>([])

  useEffect(() => {
    getRandomFood().then((data) => {
      setRandomFood(data.recipes)
    })
  }, [])
  return (
    <div>Content
      {randomFood.map((food) => (
        food.extendedIngredients.map((extended: any) => <p>{extended.name}</p>)
      ))}</div>
  )
}

export default Content