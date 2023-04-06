


const span = document.getElementById("name-output");
const input = document.getElementById("name-input");

input.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
});