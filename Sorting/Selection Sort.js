let arrayList = [1, 4, 2, 6, 5, 10, 3, 54];

console.log(arrayList);

for (let i = 0; i < arrayList.length; i++) {
  let min = i;
  let temp = arrayList[i];
  for (let j = i + 1; j < arrayList.length; j++) {
    if (arrayList[j] < arrayList[min]) {
      min = j;
    }
  }
  arrayList[i] = arrayList[min];
  arrayList[min] = temp;
}

console.log(arrayList);
