// dom variables
const bill = document.getElementById('inp-bill');
const customTip = document.getElementById('inp-tip');
const people = document.getElementById('inp-people');
const tipBtns = document.querySelectorAll('.tip');
const calculate = document.getElementById('calculate');
const reset = document.querySelector('.reset');
const tipTotal = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');
const errorMessage = document.querySelector('.error-msg')

// other variables
let billValue = 0.00; // default value
let tipValue = 0.15 // default tip value -> 15%
let peopleValue = 1; // default person value

// even listeners
bill.addEventListener('input', setBillValue);
tipBtns.forEach(btn => btn.addEventListener('click', handleClick));
customTip.addEventListener('input', setCustomTipValue);
people.addEventListener('input', setPeoplesValue);
reset.addEventListener('click', resetFunction)

// functions

/// validaters

/// / validates input for bill amount
function validateInput(s) {
  var rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
}

/// / validates input for custom tip
function validateInt(s) {
  var rgx = /^[0-9]*$/;
  return s.match(rgx);
} 

// sets bill value
function setBillValue() {
  // replaces comma for period
  if(bill.value.includes(',')) {
    bill.value = bill.value.replace(',', '.');
  }

  if(!validateInput(bill.value)) {
    bill.value = bill.value.substring(0, bill.value.length - 1);
  }

  billValue = parseFloat(bill.value);

  calcTip();
}

// set custom tip value
function setCustomTipValue() {
  //validate custom tip input
  if(!validateInt(customTip.value)){
    customTip.value = customTip.value.substring(0, customTip.value.length - 1);
  }
  
  tipValue = parseFloat(customTip.value / 100);

  tipBtns.forEach(btn => btn.classList.remove('btn-active'));

  if(customTip.value !== '') {
    calcTip();
  }
}

// sets number of people
function setPeoplesValue() {
  if(!validateInt(people.value)){
    people.value = people.value.substring(0, people.value.length - 1);
  }

  peopleValue = parseFloat(people.value)

  if(peopleValue <= 0) {
    errorMessage.classList.add('show-error-msg')
    setTimeout(function() {
      errorMessage.classList.remove('show-error-msg')
    }, 3000);
  }

  calcTip();
}

// calculates tip and total cost
function calcTip() {
  if(peopleValue >= 1) {
    let tipAmount = billValue * tipValue / peopleValue;
    let total = billValue * (tipValue + 1) / peopleValue;
    tipTotal.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmount.textContent = `$${total.toFixed(2)}`;
  }
}

// reset button
function resetFunction() {
  tipTotal.textContent = '$0.00';
  totalAmount.textContent = '$0.00';
  customTip.value = '';
  tipValue = 0.15;
  bill.value = '0.0';
  people.value = '1';
  setBillValue();
  setPeoplesValue();
}

// handles click on tip buttons
function handleClick(event) {
  tipBtns.forEach(btn => {
    // clear active of button clicked
    btn.classList.remove('btn-active')

    // set active of button clicked
    if(event.target.innerHTML == btn.innerHTML) {
      btn.classList.add('btn-active');
      tipValue = parseFloat(btn.innerHTML)/100;
    }
  })

  // reset custom tip input
  customTip.value = '';

  calcTip();
}

