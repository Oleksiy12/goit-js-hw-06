// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення 
// лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;

const value = document.getElementById("value");

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

decrBtn.addEventListener("click", callDecr);
incrBtn.addEventListener("click", callIncr);

function callDecr() {
    counterValue-=1;
    value.textContent = counterValue;
}

function callIncr() {
    counterValue+=1;
    value.textContent = counterValue;
}