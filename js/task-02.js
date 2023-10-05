const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
// console.dir(listIngredients);
const listElements = ingredients.map((ingredient) => {
  
  const elementLi = document.createElement("li"); 
  elementLi.textContent = ingredient;
  elementLi.classList.add("item");
  return elementLi;
});

console.log(listElements);

listIngredients.append(...listElements);
