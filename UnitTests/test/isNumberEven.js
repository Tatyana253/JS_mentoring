const NumbersValidator = require('../app/NumbersValidator.js');
const {expect} = require('chai');

describe('Unit tests to verify isNumberEven functionality', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  afterEach(() => {
    numbersValidator = null;
  });

  describe('Unit tests for verify is numberEven functionality', () => {
    it('Should return true when provided an Even number', () => {
      const validationResults = numbersValidator.isNumberEven(8);
      expect(validationResults).to.be.equal(true);
    });

    it('Should return false when provided a not-Even number', () => {
      const validationResults = numbersValidator.isNumberEven(7);
      expect(validationResults).to.be.equal(false);
    });

    it('Should throw an Error when provided not a number', () => {
      expect(() => {
        numbersValidator.isNumberEven('7');
      }).to.throw('[7] is not of type "Number" it is of type "string"');
    });
  });
});
