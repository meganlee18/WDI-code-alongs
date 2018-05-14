//Improve presentation

var balance = 100;
//$ + balance 

function deposit(amount) {
    balance = balance + amount;
}

function withdraw(amount) {
    balance = balance - amount;
}

//==== presentation =========

var balanceSpan = document.querySelector('span');
var depositBtn = document.querySelector('button');
var amountInput = document.querySelector('input');

depositBtn.addEventListener('click', function () { 
   
//get inputs
amountInput.value
//do some progressing
deposit(Number(amountInput.value))
//display outputs
balanceSpan.textContent = '$' + balance
//reset input to blank
amountInput = ' '

})