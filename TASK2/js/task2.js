const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ]; 


const firstValue = document.querySelector("#ingredients");
const newList = ingredients.forEach((value) => {
  let createElement = document.createElement("li");
  createElement.textContent = value;
  createElement.classList.add("item");
  firstValue.append(createElement);
})

