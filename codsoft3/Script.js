// here document.getElementById('display') will select the html element with the id 'display' and stores it in the variable 'display'
// now display store the refernce value of the input.
let display = document.getElementById("display");

// this function takes place when the button is clicked and the function is called
// it takes a parameter 'char' and append the current calue of the display.
function appendCharacter(char) {
  display.value += char;
}

// this function will set the calue of the display to an empty string.
function clearDisplay() {
  display.value = "";
}

// here is if i manually implement the functionalities ......
function calculateResult() {
  let expression = display.value;
  let result;

//   split the expression into operands and operator
  let match = expression.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);

  if (match) {
    let operand1 = parseFloat(match[1]);
    let operator = match[2];
    let operand2 = parseFloat(match[3]);

    // perform the calculation based on the operator
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
    }
    display.value = result;
  } else {
    display.value = "Error";
  }

}


// this function will perform the calculation when the '=' button is clicked
// here eval build-in function is used to evaluate the mathemetical express entered in the display.
function calculateResult() {
  // here i am using try catch for error handeling
  try {
    display.value = eval(display.value);
    // eval function is to evaluate the mathematical expression entered in the display.
  } catch (error) {
    display.value = "Error";
  }
}

// Note: I can also use build-in function just to make it more consistent and reliabile
// also using build-in function the code us reusable futher which is a good practise
