

// random letter generator and variables down below
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberOfGuesses = 10;
var wins = 0;
var losses = 0;

//for loop

for (var i = 0; i < alphabet.length; i++) {

document.onkeyup = function runProgram(event){
	var userGuess = event.key;
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

//if user guesses right
	if(userGuess === computerGuess){
		wins++;
		runProgram();
			}

//if user guesses wrong
	if(userGuess !== computerGuess) {

		losses++;
		numberOfGuesses--;
	}
//if user loses all his guesses
	if(numberOfGuesses===0) {

		alert("Game Over Joker");
		runProgram();

	}

	var holder = document.getElementById('user-wins');
	holder.innerHTML = wins;
	holder = document.getElementById('user-losses');
	holder.innerHTML = losses;
	holder = document.getElementById('guesses-left');
	holder.innerHTML = numberOfGuesses;
	holder = document.getElementById('lettersGuessed');
	holder.innerHTML = userGuess;

}

}