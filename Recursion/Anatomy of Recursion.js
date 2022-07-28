let counter = 0;

function recursion() {
  console.log(counter);
  if (counter > 3) {
    return "done";
  }
  counter++;
  return recursion();
}

console.log(recursion());
