// script.js
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 4000);
}


convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (fahrenheitInput.value !== "") {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    celsiusInput.value = celsiusValue.toFixed(2);
    }
  }, 1200)
}







// document.addEventListener("DOMContentLoaded", function() {
//     const celsiusInput = document.getElementById("celsius");
//     const fahrenheitInput = document.getElementById("fahrenheit");
//     const convertBtn = document.getElementById("convertBtn");
//     convertBtn.addEventListener("click", function() {
//     if (celsiusInput.value !== "") {
//     const celsiusValue = parseFloat(celsiusInput.value);
//     const fahrenheitValue = (celsiusValue * 9/5) + 32;
//     fahrenheitInput.value = fahrenheitValue.toFixed(2);
//     } else if (fahrenheitInput.value !== "") {
//     const fahrenheitValue = parseFloat(fahrenheitInput.value);
//     const celsiusValue = (fahrenheitValue - 32) * 5/9;
//     celsiusInput.value = celsiusValue.toFixed(2);
//     }
//     });
//    });