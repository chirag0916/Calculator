function add(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}

function subtract(numOne, numTwo) {
   let sum = numOne - numTwo;
   return sum;
}
function multiply(numOne, numTwo) {
  let sum = numOne * numTwo;
  return sum;
}

function divide(numOne, numTwo) {
  let sum = numOne/numTwo;
  if(numTwo === 0) {
    return "undefined";
  }
  return sum;
}

function operate(operator, numOne,numTwo) {
let output;
numOne = parseInt(numOne);
numTwo = parseInt(numTwo);

 if(operator === "+") {
  output = add(numOne,numTwo);
  
 }
 else if ( operator === "-") {
  output = subtract(numOne,numTwo);
 }
 else if (operator === "*") {
  output = multiply(numOne,numTwo);
 }
else if (operator === "/") {
  output = divide(numOne,numTwo);
  if (output % 1 !== 0){
    output = output.toFixed(4);
  }
}
else {
  window.alert("error");
}
return output;
}

function appendTextToDisplay(newText) {
  let displayElement = document.getElementById("display");
  displayElement.textContent = displayElement.textContent + newText;
} 

function updateDisplay(newText) {
  let displayElement = document.getElementById("display");
  displayElement.textContent = newText;
}

function updateTopDisplay(newText) {
  let displayElement = document.getElementById("top-display");
  displayElement.textContent = displayElement.textContent + newText;
}

function updateTopDisplayClear(newText) {
  let displayElement = document.getElementById("top-display");
  displayElement.textContent = newText;
}

function clearDisplay(newText) {
  location.reload();
}

document.getElementById("one").addEventListener("click", function () {
  updateTopDisplay("1");
  if (state["action"] === "numOne") {
    state["numOne"] = state["numOne"] + "1";
    appendTextToDisplay("1");
  }
  else if (state["action"] === "numTwo"){
    state["numTwo"] = state['numTwo'] + "1";

  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("two").addEventListener("click", function () {
  updateTopDisplay("2");
  if (state["action"] === "numOne") {
    state["numOne"] = state["numOne"] + "2";
    appendTextToDisplay("2");
  }
  else if (state["action"] === "numTwo"){
    state["numTwo"] = state['numTwo'] + "2";

  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("three").addEventListener("click", function () {
  updateTopDisplay("3");
  if (state["action"] === "numOne") {
    state["numOne"] = state["numOne"] + "3";
    appendTextToDisplay("3");
  }
  else if (state["action"] === "numTwo"){
    state["numTwo"] = state['numTwo'] + "3";

  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("four").addEventListener("click", function () {
  updateTopDisplay("4");
  if (state["action"] === "numOne") {
    state["numOne"] = state["numOne"] + "4";
    appendTextToDisplay("4");
  }
  else if (state["action"] === "numTwo"){
    state["numTwo"] = state['numTwo'] + "4";

  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("five").addEventListener("click", function () {
  updateTopDisplay("5");
  if (state["action"] === "numOne") {
    state["numOne"] = state["numOne"] + "5";
    appendTextToDisplay("5");
  }
  else if (state["action"] === "numTwo"){
    state["numTwo"] = state['numTwo'] + "5";
  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("six").addEventListener("click", function () {
  updateTopDisplay("6");
  if (state["action"] === "numOne") {
    state["numOne"] = state["numOne"] + "6";
    appendTextToDisplay("6");
  }
  else if (state["action"] === "numTwo"){
    state["numTwo"] = state['numTwo'] + "6";

  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("seven").addEventListener("click", function () {
  updateTopDisplay("7");
  if (state["action"] === "numOne") {
    state["numOne"] = state["numOne"] + "7";
    appendTextToDisplay("7");
  }
  else if (state["action"] === "numTwo"){
    state["numTwo"] = state['numTwo'] + "7";

  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("eight").addEventListener("click", function () {
  updateTopDisplay("8");
  if (state["action"] === "numOne") {
    state["numOne"] = state["numOne"] + "8";
    appendTextToDisplay("8");
  }
  else if (state["action"] === "numTwo"){
    state["numTwo"] = state['numTwo'] + "8";

  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("nine").addEventListener("click", function () {
  updateTopDisplay("9");
  if (state["action"] === "numOne") {
    state["numOne"] = state["numOne"] + "9";
    appendTextToDisplay("9");
  }
  else if (state["action"] === "numTwo"){
    state["numTwo"] = state['numTwo'] + "9";

  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("zero").addEventListener("click", function () {
  updateTopDisplay("0");
  if (state["action"] === "numOne") {
    state["numOne"] = state["numOne"] + "0";
    appendTextToDisplay("0");
  }
  else if (state["action"] === "numTwo"){
    state["numTwo"] = state['numTwo'] + "0";

  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("plus").addEventListener("click", function () {
  if (state['action'] === "numTwo") {
    updateDisplay(operate(state["operator"], state["numOne"], state["numTwo"]));
    state["numOne"] = operate(state["operator"], state["numOne"], state["numTwo"]);
    state["action"] = 'numTwo';
    state["numTwo"] = '';
  }
  updateTopDisplay("+");
  state["action"] = "operator";
  if (state["action"] === "operator") {
    state["operator"] = "+";
    state['action'] = "numTwo";
    updateTopDisplay("");
  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("subtract").addEventListener("click", function () {
  if (state['action'] === "numTwo") {
    updateDisplay(operate(state["operator"], state["numOne"], state["numTwo"]));
    state["numOne"] = operate(state["operator"], state["numOne"], state["numTwo"]);
    state["action"] = 'numTwo';
    state["numTwo"] = '';
  }
  updateTopDisplay("-");
  state["action"] = "operator";
  if (state["action"] === "operator") {
    state["operator"] = "-";
    state['action'] = "numTwo";
    updateTopDisplay("");
  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("multiply").addEventListener("click", function () {
  if (state['action'] === "numTwo") {
    updateDisplay(operate(state["operator"], state["numOne"], state["numTwo"]));
    state["numOne"] = operate(state["operator"], state["numOne"], state["numTwo"]);
    state["action"] = 'numTwo';
    state["numTwo"] = '';
  }
  updateTopDisplay("*");
  state["action"] = "operator";
  if (state["action"] === "operator") {
    state["operator"] = "*";
    state['action'] = "numTwo";
    updateTopDisplay("");
  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("divide").addEventListener("click", function () {
  if (state['action'] === "numTwo") {
    updateDisplay(operate(state["operator"], state["numOne"], state["numTwo"]));
    state["numOne"] = operate(state["operator"], state["numOne"], state["numTwo"]);
    state["action"] = 'numTwo';
    state["numTwo"] = '';
  }
  updateTopDisplay("/");
  state["action"] = "operator";
  if (state["action"] === "operator") {
    state["operator"] = "/";
    state['action'] = "numTwo";
    updateTopDisplay("");
  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

document.getElementById("clear").addEventListener("click", function () {
  clearDisplay();
});

document.getElementById("equal").addEventListener("click", function () {
  updateDisplay(operate(state["operator"], state["numOne"], state["numTwo"]));
  //updateTopDisplayClear(operate(state["operator"], state["numOne"], state["numTwo"]));
  console.log(state["action"]);
  state["action"] = 'equal';
  if (state["action"] === "equal") {
    state["equal"] = "=";
    updateTopDisplay("=");
  }
  else {
    window.alert("bad input");
  }
  console.log("end state");
  console.log(state);
});

var state = {numOne: "",
            numTwo: "",
            operator: null,
            action: "numOne",
            };