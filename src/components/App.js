import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import '../css/app.css'
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext()

const LOCALSTORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState([])
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    if (storedRecipes != null && storedRecipes.length > 0) setRecipes(storedRecipes)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])


  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: ''
        }
      ]
    }

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    if(selectedRecipeId != null && selectedRecipeId === id) setSelectedRecipeId(undefined)
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} setSelectedRecipeId={setSelectedRecipeId}/>}
    </RecipeContext.Provider>
  );
}


const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Chicken 2',
        amount: '3 Pounds'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Chicken 2',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Chicken 2',
        amount: '3 Pounds'
      }
    ]
  }
]

export default App;
