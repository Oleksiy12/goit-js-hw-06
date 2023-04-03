const firstValue = document.querySelectorAll(".item");
console.log("Number of categories : " + firstValue.length);

const secondValue = document.querySelectorAll(".item");
secondValue.forEach((value) => {
console.log(" ");
console.log("Category : " + value.firstElementChild.textContent)
console.log("Elements : " + value.lastElementChild.children.length)
})