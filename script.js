// Hente HTML element

const display_number = document.querySelector("#display_number");

const plus_button = document.querySelector("#plus_button");
console.log(plus_button);

const minus_button = document.querySelector("#minus_button");
console.log(minus_button);

const reset = document.querySelector("#reset_count");


// Vi må sette opp variabler som rekner
let count = 0;

// Lage funksjoner til knappene
function increment() {
    count = count + 1;
    console.log(count);
    display_number.textContent = count;
}

// Ein funksjon som tar i mot variabelen count og gjer eit regnestykke som blir lagt til i nettsiden med textContent
function decrement() {
    count = count - 1;
    console.log(count);
    display_number.textContent = count;
}

function reset_o() {
   count = 0;
   display_number.textContent = count;
}

// Denne event lytteren tar ein allerede laget funksjon som sitt andre parament
plus_button.addEventListener("click", increment);
minus_button.addEventListener("click", decrement);
reset.addEventListener("click", reset_o)
