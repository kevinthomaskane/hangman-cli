var inquirer = require("inquirer")

function Letter(letter){
  this.letter = letter;
  this.guessed = false;
  this.funky = function(){
    if (this.guessed === true){
      return this.letter;
    }
    else{
      return "_"
    }
  }

  this.checker = function(letter){
    if (this.letter){
      this.guessed = true;
    }
  }
  
}

var A = new Letter("A")

module.exports = Letter;
