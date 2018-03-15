

function Letter(char){
  this.name = char;
  this.guessed = false;
  this.funky = function(){
    if (this.guessed === true){
      return this.name;
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
random.guessed = true;
var Other = new Letter("B")



module.exports = Letter;
