var inquirer = require("inquirer");
var Word = require("./word.js")



var choices = ["dog", "cat", "giraffe", "elephant"];
var choice;
var current;
var choiceLetters;
var guesses;
var spaces;

function chooseQuestion() {
    var indexChoice = Math.floor(Math.random() * 4 + 1)
    current = choices[indexChoice];
    choice = new Word();
    guesses = choice.arrayOfLetters.length
    choiceLetters = choice.letters(current);
    spaces = choice.writeIt(current)
}

chooseQuestion()

ask();

function ask() {
    if (guesses >= 0) {
        console.log(choiceLetters)
        inquirer.prompt([
            {
                name: "guess",
                message: choice.writeIt(current)
            },
console.log(choice)
        ]).then(function (answer) {
            var guessed = new Letter(answer.guess)
            for (let i = 0; i < choiceLetters.length; i++) {
                if (choiceLetters.letter === answer.guess) {
                    guessed.guessed = true;
                    
                }
            }
            ask();
        })
    }
}