window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    
    const loanAmount = document.getElementById('loan-amount');
    loanAmount.value = 250000;
    const years = document.getElementById("loan-years");
    years.value = 30;
    const rate = document.getElementById("loan-rate");
    rate.value = 5;
    const initValues = {amount: loanAmount.value, years: years.value, rate: rate.value};
    calculateMonthlyPayment(initValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = ((values.rate/100) / 12);
  const n = (values.years * 12);
  const monthlyPayment = (values.amount * i)/(1 - Math.pow((1+i), -n));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = `$${monthly}`;
}
