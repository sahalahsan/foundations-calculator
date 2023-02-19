// Accessing various elements
var digits = document.querySelectorAll(".digit");
var display = document.querySelector(".display");
var equal = document.querySelector(".equal")
var operators = document.querySelectorAll(".operator");

// Variables 
let a;
let b;
let operator;
let operatorVariable = 0;
let lastOperator;

// Making operators appear on display
Array.from(operators).forEach( item => {
  item.addEventListener("click", (e) => {
    operator = e.target.textContent;
    operatorVariable++;
    if(display.textContent == ""){
      a = +(display.textContent);
      lastOperator = operator //operator
      display.textContent = "0" + operator;
    } else if(operatorVariable > 1){
      var allDigitsBeforeOperator  =(display.textContent).slice(0,display.textContent.length-1);
      display.textContent = allDigitsBeforeOperator;
      lastOperator = operator //operator

      a = +(display.textContent);
      display.textContent += e.target.textContent; 
    } else if(operatorVariable === 1 && 
      (display.textContent.includes(`${lastOperator}`) == true)){
      a = +(display.textContent.split(`${lastOperator}`)[0]);
      operator = lastOperator;
      b = +(display.textContent.split(`${lastOperator}`)[1]);
      operate();
      // display.textContent += e.target.textContent;
      operatorVariable = 0;
    
    } else {
      a = +(display.textContent);
      lastOperator = operator  
      display.textContent +=  e.target.textContent; 
    }
  });
});

// making digits appear on display
Array.from(digits).forEach( item => {
  item.addEventListener("click", (e) => {
    display.textContent += e.target.textContent;
    operatorVariable = 0;
  });
});

// Make point appear on display(second appearance disabled)
document.querySelector(".decimal").addEventListener("click", (e) => {
  if(display.textContent == ""){
    display.textContent = "0" + e.target.textContent;
  } else if(display.textContent.includes(".")){
    display.textContent = display.textContent;
  } else {
    display.textContent += e.target.textContent;
  }
});

//Accessing number placed after operator
equal.addEventListener("click", (e)=> {
  let dis = display.textContent;
  let splitArr = dis.split(`${operator}`);
  b = +(splitArr[1]);
}); 

// Removes Content from display
document.querySelector(".clear").addEventListener("click", () => display.textContent = "");

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
  if(b == 0){
    alert("You can't divide by 0!");
  } else {
  return a / b;
  }
};

//Calling Operate function
equal.addEventListener("click", (e) => {
  if(display.textContent !== "") {
    if(a !== undefined && b !== NaN){
      operate();
    }
  }
});

// Operate function
function operate(){
  if(operator == "+"){
    var result = add(a, b);
  }else if(operator == "-"){
    var result = sub(a, b);
  } else if(operator == "÷"){
    var result = div(a, b);
  } else {
    var result = multiply(a, b);
  }

  if(!Number.isInteger(result) && result.toString().split('.')[1].length > 3){
    display.textContent = result.toFixed(3);
  } else {
    display.textContent = result;
  }
};