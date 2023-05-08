const NumbersValidator = require('../app/NumbersValidator.js');
const {expect} = require('chai');

describe('Unit tests for isAllNumbers functionality', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });

  it('Should return true when array of numbers', () => {
    const arrayOfNumbers = [1, 8, 10, 2, 7, 9, 14];
    const evenNumbersArray = numbersValidator.isAllNumbers(arrayOfNumbers);
    expect(evenNumbersArray).to.be.equal(true);
  });

  it('Should return false when array not full of numbers', () => {
    const arrayOfNumbers = [1, '9', 10, 2, 7, 9, 14];
    const evenNumbersArray = numbersValidator.isAllNumbers(arrayOfNumbers);
    expect(evenNumbersArray).to.be.equal(false);
  });

  it('Should throw an error when not an array', () => {
    const arrayOfNumbers = 8;
    expect(() => {
      numbersValidator.isAllNumbers(arrayOfNumbers);
    }).to.throw('[8] is not an array');
  });
});
