const bill = document.getElementById('bill');
const five = document.getElementById('5');
const ten = document.getElementById('10');
const fifteen = document.getElementById('15');
const twentyFive = document.getElementById('25');
const fifty = document.getElementById('50')
const customAmount = document.getElementById('customAmount');
const numOfPeople = document.getElementById('numOfPeople');
const total = document.getElementById('total');
const resetBtn = document.getElementById('resetBtn')

// function only 1 tip option chosen
[five, ten, fifteen, twentyFive, fifty].forEach(btn => (
  addEventListener('click', (e) => {
    e.className = 'black'; 
  })
))

// calculate bill

// function change bill and tip amount


// reset button