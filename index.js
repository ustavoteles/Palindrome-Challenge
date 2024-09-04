testPalindrome()

function testPalindrome() {
  var word = prompt('Digite uma palavra:')
  var separateLetters = word.split('')
  var wordInverted = separateLetters.reverse()
  wordInverted = wordInverted.join('')
  if (word == wordInverted) {
    console.log('a palavra ' + word + ' é um palíndromo!')
  } else {
    console.log('A palavra ' + word + ' não é um palíndromo!')
  }
}
