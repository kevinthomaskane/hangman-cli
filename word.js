var Letter = require("./letter.js")


function Word(string) {
    var array = string.split("")
    var letters = [];
    var spaces = "";
    array.forEach(function (char) {
        letters.push(new Letter(char));
    });
    this.answered = false;
    this.guesses = letters.length;
    this.letterInWord = function (userGuess) {
        letters.forEach(function (letter) {
            if (userGuess === letter.name) {
                letter.guessed = true;
            }

        });
        if (array.indexOf(userGuess) === -1) {
            this.guesses--
        }
        this.answered = letters.every(function(letter) {
            return letter.guessed === true;
          })


    }

    this.display = function () {
        var str = '';
        letters.forEach(function (letter) {
            str += letter.funky() + " ";
        });
        console.log(str + '    Guesses remaining: ' + this.guesses);
        if (str === array.join(" ")) {
            console.log("hello")
            this.answered = true;
        }

    }


}



var random = new Word("potato");
var letterP = new Letter("p")




module.exports = Word;