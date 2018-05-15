var favColor = 'mistyrose'
var FAV_COLOR = 'mistyrose' //constant variable; can't be changed

favColor = 'pink' //this will change original variable

console.log(favColor)

 const pi = 3.14
// pi = 'pie'

console.log(pi)
//this won't work because you are trying the change the constant


const account = Object.freeze({
  balance: 1000
})

const greet = function() {
  
}

//account = 'bankrupted'
//cannot change the constant variable but you can change the content of 
//the variable like below

//account.balance = 10000000
console.log(account.balance)
