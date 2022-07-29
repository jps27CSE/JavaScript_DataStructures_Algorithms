function factorialRecursion(number) {
  if (number === 2) {
    return 2;
  }

  return number * factorialRecursion(number - 1);
}

function factorialAlternative(number) {
  let result = 1;
  if (number === 2) {
    result = 2;
  }
  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialRecursion(5));
console.log(factorialAlternative(5));
