var Letter = require("./letter.js")


function Word(){
   
    this.spaces = "";
    this.arrayOfLetters = [];
    this.letters = function(string){
        var array = string.split("");
        for (let i = 0; i < array.length; i++){
        this.arrayOfLetters.push(new Letter(array[i]))
        }
        return this.arrayOfLetters
    }
    this.writeIt = function(string){
        this.letters(string)
        for (let i = 0; i< this.arrayOfLetters.length; i++){
            this.spaces += " " + this.arrayOfLetters[i].funky()
        }
        return this.spaces       
    }

    this.check = function(string){
        this.letters(string)
        for (let i = 0; i < this.arrayOfLetters.length; i++){
            this.arrayOfLetters[i].checker();
        }
        this.writeIt(string)
    }
}

var random = new Word();

// console.log(random.writeIt("potato"))

module.exports = Word;