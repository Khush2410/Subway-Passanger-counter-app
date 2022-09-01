let saveEl = document.getElementById("save-el");
//document.getElementById("count-el").innerText = 5;
let countEl = document.getElementById("count-el");
//initialize the count as 0
let count = 0;

//listen for the clicks on the increment button
//increment the count variable when the button is clicked
function increment() {
    count = count + 1;
    countEl.textContent = count;
}

//create a function, save(), which logs out the count when it is called
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}
