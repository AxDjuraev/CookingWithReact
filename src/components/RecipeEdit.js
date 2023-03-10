import React, {useContext} from 'react'
import RecipeIngredient from './RecipeIngredient'
import { RecipeContext } from './App'
import { v4 as uuidv4 } from 'uuid'

export default function RecipeEdit({recipe, setSelectedRecipeId}) {
  const {handleRecipeChange} = useContext(RecipeContext)

  function handleChange(changes){
    handleRecipeChange(recipe.id, {...recipe, ...changes})
  }

  function handleIngredientChange(id, ingredient){
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ingredients: newIngredients})
  }

  function handleIngredientAdd(){
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: ''
    }

    handleChange({ ingredients: [...recipe.ingredients, newIngredient]})
  }

  function handleIngredientDelete(id){
    handleChange({
      ingredients: recipe.ingredients.filter(i => i.id !== id)
    })
  }

  return (
    <div className='recipe-edit'>
      <div className="recipe-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={() => setSelectedRecipeId(null)
          }
        >&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">Name</label>
        <input
          type="text"
          className="recipe-edit__input"
          name="name"
          id="name"
          value={recipe.name}
          onChange={(e) => handleChange({name: e.target.value})}
        />
        <label htmlFor="cookTime" className="recipe-edit__label" >Cook Time</label>
        <input
          type="text"
          name="cookTime"
          className="recipe-edit__input"
          id="cookTime"
          value={recipe.cookTime}
          onChange={(e) => handleChange({cookTime: e.target.value})}
        />
        <label htmlFor="servings" className="recipe-edit__label" >Servings</label>
        <input
          type="number"
          min="1"
          className="recipe-edit__input"
          name="servings"
          id="servings"
          value={recipe.servings}
          onChange={(e) => handleChange({servings: parseInt(e.target.value) || ''})}
        />
        <label htmlFor="instrucionts" className="recipe-edit__label" >Instrucions</label>
        <textarea
          name="instructions"
          className="recipe-edit__input"
          id="instructions"
          onChange={(e) => handleChange({instructions: e.target.value})}
          value={recipe.instructions}/>
      </div>
      <br/>
      <label className="recipe-edit__label" >Ingredients</label>
      <div className="recipe-edit__ingredient">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredient
            key={ingredient.key}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button
          className="btn btn--primary recipe-edit__add-ingredient-btn"
          onClick={() => handleIngredientAdd()}
        >Add Ingredient</button>
      </div>
    </div>
  )
}
