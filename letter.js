

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
}

module.exports = Letter;
