/* eslint-disable no-magic-numbers */
export const add = (a, b) => a + b;

export const factorial = num => {
  num = Math.abs(num);
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

export const isPrime = num => {
  if (num === 0 || num === 1) return false;
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) return false;
  }
  return true;
};