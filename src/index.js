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
    let arr = [];
    let phrase = [];
      for (i = 0; i<expr.length; i+=10){
        let char = expr.slice(i, i+10)
        arr.push(char)
      }
    
      for(index in arr){
        let word = arr[index].split('').reverse().join('').replace(/01/g, '.').replace(/11/g, '-').replace(/0/g, '').split('').reverse().join('')
        word == '**********' ? phrase.push(' ') : phrase.push(MORSE_TABLE[word])
      }
      return phrase.join('')
}

module.exports = {
    decode
}