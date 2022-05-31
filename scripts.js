var showValue = document.querySelector(".showValue");
var plus = document.querySelector(".more");
var minus = document.querySelector(".less");

var countClick = 0; //Counter starting point

showCount(); //cal the function to work

plus.addEventListener("click", () => {
    countClick++; //add one number to countClick when the trigger is on with button click
    showCount(); //update the display
})

minus.addEventListener("click", () => {
    countClick--; //substract one number to countClick when the trigger is on with button click
    showCount(); //update the display
})

function showCount() {
    showValue.innerHTML = countClick; //show the logic value in the HTML
}