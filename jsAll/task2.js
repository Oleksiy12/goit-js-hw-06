const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ]; 

const firstItem = document.getElementById("ingredients");
const newList = document.createElement("li");

const result = ingredients.map(ingredient => {
  newList.textContent = ingredient;
  firstItem.append(newList)
})
