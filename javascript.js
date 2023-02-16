// Accessing various elements
var digits = document.querySelectorAll(".digit");
var display = document.querySelector(".display");
var clear = document.querySelector(".clear");
var operators = document.querySelectorAll(".operator");
var equal = document.querySelector(".equal");

// Variables 
let a;
let b;
let operator;

// Making operators appear on display
Array.from(operators).forEach( item => {
    item.addEventListener("click", (e) => {
      operator = e.target.textContent;
      console.log(operator);
      a = display.textContent;
      console.log(a);
      display.textContent +=  e.target.textContent; 
    });

});

// making digits appear on display
Array.from(digits).forEach( item => {
    item.addEventListener("click", (e) => {
      display.textContent += e.target.textContent;
    });
    
});

//For numberB
equal.addEventListener("click", (e)=> {
    let dis = display.textContent;
    let splitArr = dis.split(`${operator}`);
    b = splitArr[1];
    console.log(b);
}); 



// Removes Content from display
clear.addEventListener("click", () => display.textContent = "");


// Addition function
function add(a, b){
  return a + b;
};

// Subtract function
function sub(a, b){
  return a - b;
};

// Multiply function
function multiply(a, b){
  return a * b;
};

// Division function 
function div(a, b){
  return a / b;
};

// Operate function
equal.addEventListener("click", (e) => {
  console.log(a);
  console.log(b);
  console.log(operator);
  if(operator == "+"){
    var result = add(a, b);
  }else if(operator == "-"){
    var result = sub(a, b);
  } else if(operator == "÷"){
    var result = div(a, b);
    console.log("oja");
  } else {
    var result = multiply(a, b);
  }
  display.textContent = result;
});