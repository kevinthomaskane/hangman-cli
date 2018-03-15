var inquirer = require("inquirer");
var Word = require("./word.js")
var Letter = require("./letter.js")


console.log("\n"+" WELCOME TO HANGMAN !\n\n")

var choices = ["dog", "cat", "giraffe", "elephant"];



function chooseQuestion() {
    var indexChoice = Math.floor(Math.random() * choices.length)
    var current = choices[indexChoice];
    var choice = new Word(current);
    choice.display()
    getUserGuess(choice)
}

chooseQuestion()

function getUserGuess(choice){
	inquirer.prompt([{
					 name: "letter",
					 message: "Enter a letter: ",
					}])

	.then(function(guess){
		choice.letterInWord(guess.letter);
        choice.display();

		if(!choice.answered){
			if(choice.guesses > 0){
				getUserGuess(choice);
			}else{
				console.log("\n"+" You ran out of guesses!\n\n");
				chooseQuestion();
			}
			
		}else if(choice.answered){
			console.log("\n"+"  Congrats! You win!\n\n");
			chooseQuestion();
		}
	});
}


