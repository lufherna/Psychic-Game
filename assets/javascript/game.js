

// random letter generator and variables down below
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberOfGuesses = 10;
var wins = 0;
var losses = 0;

//main function 

for (i = 0; i < alphabet.length; i++) {

document.onkeyup = function(event){
	var userGuess = event.key;
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

//if user guesses right
	if(userGuess === computerGuess){
		wins++;
		document.getElementById('user-Wins').innerHTML = numberOfGuesses;
			}

//if user guesses wrong
	if(userGuess !== computerGuess) {

		losses++;
		numberOfGuesses-1;
		document.getElementById('user-losses').innerHTML = losses;
		document.getElementById('')
	}
//if user loses
	if(numberOfGuesses===0) {

		alert("Game Over Joker");

	}

}

}