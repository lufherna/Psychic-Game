<script type="text/javascript">

// random letter generator and variables down below


var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberOfGuesses = 10;
var wins = 0;
var losses = 0;

document.onkeyup = function(event){
	var userGuess = event.key;
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


}

</script>