// 配列：値に順序をつけて書くことのできるオブジェクト
// 配列の作成とアクセス
const emptyArray = [];
const numbers = [1, 2, 3];
const matrix = [
  ["a", "b"],
  ["c", "d"],
];
console.log(numbers[0]);
console.log(matrix[0][0]);

const array = ["one", "two", "three"];
console.log(array.length);
console.log(array[array.length - 1]);

console.log(array[100]); // undefined, Objectと同じく存在しない値undefinedを返す

const spareArray = [1, , 3];
console.log(spareArray.length);
console.log(spareArray[1]);

// オブジェクトが配列かどうか判定する
const obj = {};
console.log(Array.isArray(obj));
console.log(Array.isArray(array));
console.log(typeof array);

// TypedArray:固定長でかつ型付きの配列を扱うオブジェクト
const TypedArray = new Int8Array(8);
console.log(TypedArray);
console.log(Array.isArray(TypedArray));

//　分割代入
const [first, second, third] = array;
console.log(first);
console.log(second);
console.log(third);

// undefinedと未定義
const denseArray = [1, undefined, 3];
const spareseArray = [1, 3];
console.log(denseArray.hasOwnProperty(1));
console.log(spareseArray.hasOwnProperty(1));

// 配列から要素を検索
// インデックスを取得
const arr = ["Java", "JavaScript", "Ruby"];
const indexOfJS = arr.indexOf("JavaScript");
console.log(indexOfJS);
console.log(arr.indexOf("JS"));

const colors = [{ color: "red" }, { color: "green" }, { color: "blue" }];
const indexOfBlue = colors.findIndex((obj) => {
  return obj.color === "blue";
});
console.log(indexOfBlue);
console.log(colors[indexOfBlue]);

// 条件に一致する要素を取得
const blueColor = colors.find((obj) => {
  return obj.color === "blue";
});
console.log(blueColor);
const whiteColor = colors.find((obj) => {
  return obj.color === "white";
});
console.log(whiteColor);

// 指定範囲の要素を取得
const arry = ["A", "B", "C", "D", "E", "F"];
console.log(arry.slice(1, 4));
console.log(arry.slice(1));
console.log(arry.slice(-1));
console.log(arry.slice(1, 1));
console.log(arry.slice(4, 1));

// 真偽値を取得
if (arr.includes("JavaScript")) {
  console.log("配列にJavaScriptが含まれている");
}
const isIncludedBlueColor = colors.some((obj) => {
  return obj.color === "blue";
});
console.log(isIncludedBlueColor);

// 追加と削除
const arr2 = ["A", "B", "C"];
arr2.push("D");
console.log(arr2);
const poppedItem = arr2.pop();
console.log(poppedItem);
console.log(arr2);

arr2.unshift("S");
console.log(arr2);
const shiftedItem = arr2.shift();
console.log(shiftedItem);
console.log(arr2);

// 配列同士を結合
const newArray = array.concat(["D", "E"]);
console.log(newArray);

const NewArray = newArray.concat("新しい要素");
console.log(NewArray);

// 配列の展開
const arry1 = ["A", "B", "C"];
const newArray1 = ["X", "y", "Z", ...arry1];
const newArrayConcat = ["X", "Y", "Z"].concat(arry1);
console.log(newArray1);
console.log(newArrayConcat);

// 配列をフラット化
const arry3 = [[["A"], "B"], "C"];
console.log(arry3.flat());
console.log(arry3.flat(1));
console.log(arry3.flat(2));
console.log(arry3.flat(Infinity));

//Array.prototype.splice
console.log(newArray);
newArray.splice(1, 1);
console.log(newArray);
newArray.splice(0, newArray.length);
console.log(newArray);

// lengthプロパティへの代入
const num_arr = [1, 2, 3];
num_arr.length = 0;
console.log(num_arr);

//　破壊的なオブジェクト：配列オブジェクトそのものを変更し、変更した配列又は変更箇所を返すメソッド
// 非破壊的メソッド：配列オブジェクトのコピーを作成してから変更し、そのコピーした配列を返すメソッド

// 破壊的メソッド push
const myArray = ["A", "B", "C"];
const result = myArray.push("D");
console.log(result);
console.log(myArray);

// 非破壊的メソッド
const myArray_str = ["A", "B", "C"];
const newArray_str = myArray_str.concat("D");
console.log(newArray_str);
console.log(myArray_str);
console.log(myArray_str === newArray_str);

/*
破壊的メソッド
Array.prototype.pop	配列の末尾の値
Array.prototype.push	変更後の配列のlength
Array.prototype.splice	取り除かれた要素を含む配列
Array.prototype.reverse	反転した配列
Array.prototype.shift	配列の先頭の値
Array.prototype.sort	ソートした配列
Array.prototype.unshift	変更後の配列のlength
Array.prototype.copyWithin[ES2015]	変更後の配列
Array.prototype.fill[ES2015]	変更後の配列
*/

// forEach
const num_arry = [1, 2, 3];
num_arry.forEach((currentValue, index, num_arry) => {
  console.log(currentValue, index, num_arry);
});

// map
const num_newArray = num_arry.map((currentValue, index, num_arry) => {
  return currentValue * 10;
});
console.log(num_newArray);
console.log(num_arry === num_newArray);

// filter
const newArrayFilter = num_arry.filter((currentValue, index, num_arry) => {
  return currentValue % 2 === 1;
});
console.log(newArrayFilter);
console.log(num_arry === newArrayFilter);

// reduce
const totalValue = num_arry.reduce(
  (accumulator, currentValue, index, num_arry) => {
    return accumulator + currentValue;
  },
  0
);
console.log(totalValue);

// Array_likeオブジェクト
function myFunc() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(typeof arguments.forEach);
}
myFunc("a", "b", "c");

// Array_likeオブジェクトの判定
function myFunc1() {
  const argumentsArray = Array.from(arguments);
  console.log(Array.isArray(argumentsArray));
  argumentsArray.forEach((arg) => {
    console.log(arg);
  });
}
myFunc1("a", "b", "c");

// メソッドチェーンと高階関数
const arrayConcat = ["a"].concat("b").concat("c");
console.log(arrayConcat);

const ECMAScriptVersions = [
  { name: "ECMAScript 1", year: 1997 },
  { name: "ECMAScript 2", year: 1998 },
  { name: "ECMAScript 3", year: 1999 },
  { name: "ECMAScript 5", year: 2009 },
  { name: "ECMAScript 5.1", year: 2011 },
  { name: "ECMAScript 2015", year: 2015 },
  { name: "ECMAScript 2016", year: 2016 },
  { name: "ECMAScript 2017", year: 2017 },
];

const versionNames = ECMAScriptVersions.filter(
  (ECMAScript) => ECMAScript.year <= 2000
).map((ECMAScript) => ECMAScript.name);
console.log(versionNames);
