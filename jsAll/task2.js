const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ]; 


const firstValue = document.getElementById("ingredients");
const result = ingredients.map((value) => {
  return `<li class = "item">${value}</li>`;
}).join("");
firstValue.innerHTML= result 