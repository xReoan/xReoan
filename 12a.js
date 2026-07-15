const aField = document.querySelector("#aField");
const bField = document.querySelector("#bField");
const sumBox = document.querySelector("#sum-box");
const sumButton = document.querySelector("#sum");
sumButton.addEventListener("click", doSum);

const cField = document.querySelector("#cField");
const dField = document.querySelector("#dField");
const minusBox = document.querySelector("#minus-box");
const minusButton = document.querySelector("#minus");
minusButton.addEventListener("click", doMinus);


function doMinus() {
let c = parseInt(cfield.value);
let d = parseInt(dField.value);
let minus = c-d;
minusBox.innerHTML = ""+c+" minus "+d+" is " + minus +".";
}

function doSum() {
//.value is property to get data from input element
//parseInt to convert into number
let a = parseInt(aField.value);
let b = parseInt(bField.value);
let sum = a+b;
sumBox.innerHTML = "Sum of "+a+" and "+b+" is " + sum +".";
}