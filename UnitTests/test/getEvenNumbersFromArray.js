
const NumbersValidator = require('../app/NumbersValidator.js');
const {expect} = require('chai');

describe('Unit tests for getEvenNumbersFromArray functionality', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });

  it('Should return array of even numbers when provided an array', () => {
    const arrayOfNumbers = [1, 8, 10, 2, 7, 9, 14];
    const evenNumbersArray = numbersValidator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([8, 10, 2, 14]);
  });

  it('Should throw an error when array is not full of numbers', () => {
    const arrayOfNumbers = [1, '8', 10, '2', 7, 9, 14];
    expect(() => {
      numbersValidator.getEvenNumbersFromArray(arrayOfNumbers);
    }).to.throw('[1,8,10,2,7,9,14] is not an array of "Numbers"');
  });
});
