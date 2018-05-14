console.log ("guessing game")


/*

Let's make a guessing game
setup a secret number

the user should be asked to guess a number 
output a happy message if guess is correct
output a sad message if guess is wrong, asked to guess 
number again, until the end of time


Things we need:

- set up variables
- if statement (true/false)
- console.log (output)
- loop function (guess again)

- Prompt for input
- condition
- loop




*/ 

var secret = 42;
var input;

while (input !== secret) {

//prompt for input
input = Number(prompt("enter a number between 1 to 50"));

//if input is 42
if (input === secret) {
 console.log ("Well done, you are correct!");

} else {
//debugger
	console.log ("try again...");
}

}
