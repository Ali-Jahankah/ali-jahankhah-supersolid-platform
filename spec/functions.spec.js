const { isAlphabetic, isPalindrome } = require('../helper-function/helper');

describe('Helper Functions', () => {
  describe('isAlphabetic', () => {
    it('should return true for a valid alphabetic string', () => {
      expect(isAlphabetic('Hello')).toBe(true);
      expect(isAlphabetic('world')).toBe(true);
      expect(isAlphabetic('Test')).toBe(true);
    });

    it('should return false for non-alphabetic strings', () => {
      expect(isAlphabetic('1111')).toBe(false);
      expect(isAlphabetic('123')).toBe(false);
      expect(isAlphabetic('hello!')).toBe(false);
      expect(isAlphabetic('-bob-')).toBe(false);
    });
  });

  describe('isPalindrome', () => {
    it('should return true for palindromic strings', () => {
      expect(isPalindrome('madam')).toBe(true);
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('a man a plan a canal panama')).toBe(true);
    });

    it('should return false for non-palindromic strings', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
      expect(isPalindrome('test')).toBe(false);
    });
  });
});
