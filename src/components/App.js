import RecipeList from "./RecipeList";
import '../css/app.css'

function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
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
