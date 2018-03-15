var inquirer = require("inquirer");
var Word = require("./word.js")
var Letter = require("./letter.js")



var choices = ["dog", "cat", "giraffe", "elephant"];
// var choice;
// var current;


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
					//  validate : function(userInput){
					//  		return userInput
					// 	}
					}])

	.then(function(guess){
		choice.letterInWord(guess.letter);
		choice.display();

		if(!choice.answered){
			if(choice.guesses > 0){
				getUserGuess(choice);
			}else{
				
				console.log("\n"+"                   Oops ! You ran out of your guesses !\n\n");
				chooseQuestion();
			}
			
		}else if(choice.answered){
		
			console.log("\n"+"                   Congratulations ! You have guessed it !\n\n");
			chooseQuestion();
		}
	});
}


