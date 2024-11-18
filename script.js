// JS Average Calculator
// this website will calculate the average of 3 numbers

//HTML vars
var input1El = document.getElementById("input1");
var input2El = document.getElementById("input2");
var input3El = document.getElementById("input3");
var avgBtnEl = document.getElementById("avg-btn");
var avgOutEl = document.getElementById("avg-out");
var imgContainerEl = document.getElementById("img-container");

console.log(input1El);
console.log(input2El);
console.log(input3El);
console.log(avgBtnEl);
console.log(avgOutEl);

// Event Listener
avgBtnEl.addEventListener("click", calcAverage);

function calcAverage() {
  //input: save 3 numbers as variables.

  let num1 = Number(input1El.value); // or +input1El.value
  let num2 = Number(input2El.value);
  let num3 = Number(input3El.value);

  //process: calculate average, round the result to one decimal place.
  let average = 0.5 * (num1 + num2) * num3;
  average = average.toFixed(2);

  //add checkmark
  imgContainerEl.src = "images/checkmark.jpg";
  imgContainerEl.style.width = "20px";

  //if statement

  //output: display the answer where the dashes are in HTML
  avgOutEl.innerHTML = average;
  console.log(average);
  avgOutEl.style.border = "2px solid green";

  //clear inputs
  input1El.value = "";
  input2El.value = "";
  input3El.value = "";
}
