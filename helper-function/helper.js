//isAlphabetic function checks if the word contains only A-Z and returns true; otherwise, it returns false.
const isAlphabetic = (word) => {
  const regex = /^[A-Za-z]+$/;
  return regex.test(word);
};

//isPalindrome function checks if the word is palindrome or not.
const isPalindrome = (word) => {
  const reversedWord = word.split('').reverse().join('');
  return reversedWord === word;
};
module.exports = { isAlphabetic, isPalindrome };
