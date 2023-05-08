const NumbersValidator = require('../app/NumbersValidator.js');
const {expect} = require('chai');

describe('Unit tests for isInteger functionality', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });


  it('Should return true when passed value is integer', () => {
    const n = 8;
    const result = numbersValidator.isInteger(n);
    expect(result).to.be.equal(true);
  });

  it('Should return false when passed value is not integer', () => {
    const n = 8.9;
    const result = numbersValidator.isInteger(n);
    expect(result).to.be.equal(false);
  });

  it('Should throw an error when not a number', () => {
    const n = 'k';
    expect(() => {
      numbersValidator.isInteger(n);
    }).to.throw('[k] is not a number');
  });
});
