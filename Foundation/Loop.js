// while文
let x = 0;
console.log(`ループ開始前のxの値: ${x}`);
while (x < 10) {
  console.log(x);
  x++;
}
console.log(`ループ終了後のxの値: ${x}`);

// do-wwhile文
const x1 = 1000;
do {
  console.log(x1);
} while (x1 < 10);

// for文
let total = 0;
for (let i = 0; i < 10; i++) {
  total += i;
}
console.log(total);

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sum([1, 2, 3, 4, 5]));

// forEach
const array = [1, 2, 3];
array.forEach((currentValue) => {
  console.log(currentValue);
});

function add(num) {
  let total = 0;
  num.forEach((value) => {
    total += value;
  });
  return num;
}
console.log(add(array));

// break文
function isEven(num) {
  return num % 2 === 0;
}

function isEvenIncluded(numbers) {
  let isEvenIncluded = false;
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (isEven(num)) {
      isEvenIncluded = true;
      break;
    }
  }
  return isEvenIncluded;
}
const arra = [1, 5, 10, 15, 20];
console.log(isEvenIncluded(arra));

// someメソッド
const arr1 = [1, 2, 3, 4, 5];
const isPassed = arr1.some(isEven);
console.log(isPassed);

// continue文
function filterEven(numbers) {
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (!isEven(num)) {
      continue;
    }
    results.push(num);
  }
  return results;
}
const arr2 = [1, 342, 2, 23, 43, 9, 13, 4];
console.log(filterEven(arr2));

// filterメソッド
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.filter(isEven));

const filteredArray = array.filter((currentValue, index, array) => {
  // return => true or false
});

// for ...in文
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  const value = obj[key];
  console.log(`key:${key}, value:${value}`);
}

const numbers = [5, 10];
total = 0;
for (const num in numbers) {
  // 0 + "0" + "1" という文字列結合が行われる
  total += num;
}
console.log(total); // => "001"

// for...of文
const str = "ナメック星";
for (const val of str) {
  console.log(val);
}

// reduceメソッド
function sum(numbers) {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
const results = sum([1, 2, 3, 4, 5, 6, 7]);
console.log(results);
