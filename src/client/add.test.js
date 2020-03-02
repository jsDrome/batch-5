/* eslint-disable no-magic-numbers */
import { add, factorial, isPrime } from './add';

describe('Add', () => {
  it('Should add 2 positive integers', () => {
    expect(add(2, 3)).toEqual(5);
  });

  it('Should add 2 negative integers', () => {
    expect(add(-2, -3)).toEqual(-5);
  });

});

describe('Factorial', () => {
  it('Should return the correct factorial of 5', () => {
    expect(factorial(5)).toEqual(120);
  });

  it('Should return the correct factorial of 0', () => {
    expect(factorial(0)).toEqual(1);
  });

  it('Should return the correct factorial of -5', () => {
    expect(factorial(-5)).toEqual(120);
  });

  it('Should return the correct factorial of -5', () => {
    expect(factorial("5")).toEqual(120);
  });
});

describe('isPrime', () => {
  it('a', () => {
    expect(isPrime(0)).toEqual(false);
  });
  it('a', () => {
    expect(isPrime(1)).toEqual(false);
  });

  it('a', () => {
    expect(isPrime(2)).toEqual(true);
  });

  it('a', () => {
    expect(isPrime(3)).toEqual(true);
  });

  it('a', () => {
    expect(isPrime(4)).toEqual(false);
  });

  it('a', () => {
    expect(isPrime(5)).toEqual(true);
  });

  it('a', () => {
    expect(isPrime(6)).toEqual(false);
  });

  it('a', () => {
    expect(isPrime(7)).toEqual(true);
  });
  it('a', () => {
    expect(isPrime(8)).toEqual(false);
  });
  it('a', () => {
    expect(isPrime(9)).toEqual(false);
  });
  it('a', () => {
    expect(isPrime(10)).toEqual(false);
  });
  it('a', () => {
    expect(isPrime(11)).toEqual(true);
  });
  it('a', () => {
    expect(isPrime(12)).toEqual(false);
  });

  it('a', () => {
    expect(isPrime(341550071728321)).toEqual(false);
  });

});