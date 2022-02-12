// 配列：値に順序をつけて書くのできるオブジェクト
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
