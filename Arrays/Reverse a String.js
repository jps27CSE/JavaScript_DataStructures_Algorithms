function reverse(str) {
  if (!str || str.length < 2) {
    return "No Possible";
  } else {
    const backwards = [];
    const length = str.length - 1;

    for (let i = length; i >= 0; i--) {
      backwards.push(str[i]);
    }

    return backwards.join("");
  }
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("i am jack"));
console.log(reverse2("i am jack"));
