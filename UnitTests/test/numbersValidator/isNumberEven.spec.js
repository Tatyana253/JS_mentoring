const NumbersValidator = require('../NumbersValidator.js');
const {expect} = require('chai');

describe('isNumberEven positive test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('notEven number', () => {
    const number = 7;
    const typeOfVariable = typeof number;
    expect(validator.isNumberEven(number)).to.throw(
      `[${number}] is not of type "Number" it is of type "${typeOfVariable}"`
    );
  });

  it('should throw an error for a non-even number', () => {
    const number = '7';
    const typeOfVariable = typeof number;
    expect(() => numbersValidator.isNumberEven(number)).to.throw(
      `[${number}] is not of type "Number" it is of type "${typeOfVariable}"`
    );

});
})
