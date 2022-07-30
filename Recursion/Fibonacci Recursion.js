function fibonnacciRecursion(number) {
  if (number < 2) {
    return number;
  }

  return fibonnacciRecursion(number - 1) + fibonnacciRecursion(number - 2);
}

// function fibonacciAlternative() {}

console.log(fibonnacciRecursion(8));
// console.log(fibonacciAlternative());
