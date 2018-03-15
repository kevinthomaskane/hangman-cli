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
        this.guesses--;
        this.answered = letters.forEach(function (letter) {
            if (userGuess === letter.name) {
                letter.answered = true;
            }
            return letter.answered;
        });
    }

    this.display = function () {
        var str = '';
        letters.forEach(function (letter) {
            str += " " + letter.funky();
        });
        console.log(str + '    Guesses remaining:' + this.guesses);
    }


}



var random = new Word("potato");
var letterP = new Letter("p")




module.exports = Word;