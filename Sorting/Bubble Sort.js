let arrayList = [1, 4, 2, 6, 5, 10, 3, 54];

console.log(arrayList);

for (let i = 0; i < arrayList.length; i++) {
  for (let j = 0; j < arrayList.length; j++) {
    if (arrayList[j] > arrayList[j + 1]) {
      let temp = arrayList[j];
      arrayList[j] = arrayList[j + 1];
      arrayList[j + 1] = temp;
    }
  }
}

console.log(arrayList);
