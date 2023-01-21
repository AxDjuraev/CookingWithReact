import React from 'react'
import RecipeIngredient from './RecipeIngredient'

export default function RecipeEdit() {
  return (
    <div className='recipe-edit'>
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>
        <label htmlFor="cookTime">Cook Time</label>
        <input type="text" name="cookTime" id="cookTime"/>
        <label htmlFor="servings">Servings</label>
        <input type="number" min="1" name="servings" id="servings"/>
        <label htmlFor="instrucionts">Instrucions</label>
        <textarea name="instructions" id="instructions"></textarea>
      </div>
      <br/>
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredient />
        <RecipeIngredient />
        {/* Ingredient component */}
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </div>
  )
}
