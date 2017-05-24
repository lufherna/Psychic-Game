

// random letter generator and variables down below
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberOfGuesses = 10;
var wins = 0;
var losses = 0;
var pressedKeys = [];
var computerGuess = '';


//generate random letter
function newRandom(){

	computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	numberOfGuesses = 10
	console.log('function ran, new letter = ' + computerGuess)
}

newRandom();


document.onkeyup = function runProgram(event){

	
//if user loses all his guesses
	if(numberOfGuesses > 0) {

		var userGuess = event.key;

			//if user guesses right
		if(userGuess === computerGuess){
			wins++;
			
		
			newRandom();
			}

//if user guesses wrong
		if(userGuess !== computerGuess) {
		
			numberOfGuesses--;
		}

		//varibles that hold values and will change the innerHTML on the DOM

		var holder = document.getElementById('user-wins');
		holder.innerHTML = wins;
		holder = document.getElementById('user-losses');
		holder.innerHTML = losses;
		holder = document.getElementById('guesses-left');
		holder.innerHTML = numberOfGuesses;
		holder = document.getElementById('lettersGuessed');
		pressedKeys.push(userGuess);
		holder.innerHTML = pressedKeys;



	} else {

		losses++
		alert("Game Over Joker");
		numberOfGuesses = 10;
		newRandom()
		runProgram();
	}



}