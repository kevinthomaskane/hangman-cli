

function Letter(letter){
  this.letter = letter.toString();
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

var random = new Letter("A")

module.exports = Letter;
