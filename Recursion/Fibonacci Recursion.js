function fibonnacciRecursion(number) {
  if (number < 2) {
    return number;
  }

  return fibonnacciRecursion(number - 1) + fibonnacciRecursion(number - 2);
}

function fibonacciAlternative(number) {
  let array = [0, 1];

  for (let i = 2; i < number + 1; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array[number];
}

console.log(fibonnacciRecursion(43));
console.log(fibonacciAlternative(43));
