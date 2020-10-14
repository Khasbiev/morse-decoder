const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let letters = [];
    let newArr = [];

    for (let i = 0; i < expr.length; i += 10){
      letters.push(expr.substring(i,i + 10).replace(/^0+/, ''));
    }
      for(i = 0; i < letters.length; i++ ){
          if (letters[i] === '**********'){
          letters[i] = ' ';
          newArr.push(letters[i]);
        } else {
        letters[i] = letters[i].replace(/11/g , '-').replace(/10/g , '.');
        newArr.push(MORSE_TABLE[letters[i]]);
        }
      }


      for(i = 0; i < letters.length; i++ ){
        console.log();
      }
    return newArr.join('');
}

module.exports = {
    decode
}