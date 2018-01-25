const Letter = require('./letter.js');

class Word {
    constructor(answer) {
      this.name = answer;
      this.lettersArray = [];// array of Letter objects
            //[obj1, obj2, obj3, obj4...]
            //obj1.letter = "h", obj1.printLetter = "_"
            //obj2.letter = "e", obj2.printLetter = "_"
      //this.puzzle = this.updateWord(" "); //"hey jude" "_ _ _   _ _ _ _ "
   }
}

Word.prototype.generatePuzzle = function() {
   for (var i = 0; i < this.name.length; i++) {
      var letter = new Letter(this.name[i]); // create Letter object
      // if letter value is a space, assign " " to printLetter property
      if (letter.letter === " ") {
         letter.printLetter = " ";
      }
      this.lettersArray.push(letter); // add Letter object to array
   }
}
/*
Word.prototype.updateWord = function(guess) {
   var word; // var to build puzzle string and return to function call
   
   for (let i = 0; i < this.name.length; i++) {
       if (this.name.charAt(i) == " ") {
          word = word + "  ";
          continue;
       }
      word = word + this.lettersArray[i].checkLetter(guess) + " ";        
    }
    return word;
}
*/
module.exports = Word;
