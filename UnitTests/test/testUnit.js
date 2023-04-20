const NumbersValidator = require('./test/NumbersValidator.js');
const { expect } = require('chai');

describe("Unit tests for NumberValidator", () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

      
  describe("verify is numberEven", function() {
    it("Even number", function() {
      expect(numbersValidator.isNumberEven(8)).toBe(true);
      //expect(nv.isNumberEven(4)).to.be.true;
    });

    it("notEven number", () => {
      expect(numbersValidator.isNumberEven(7)).toBe(`[${number}] is not of type "Number" it is of type "${typeOfVariable}"`);
      });
    });
});

