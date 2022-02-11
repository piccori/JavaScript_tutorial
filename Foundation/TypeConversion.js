// 厳密等価演算子では異なるデータ型はfalse
console.log(1 === "1");
// 厳密等価演算子以外では暗黙的な型変換がされる
console.log(1 == "1");
console.log(1 + true); // => 2

// 任意の値 => 真偽値
console.log(Boolean("string"));
console.log(Boolean(1));
console.log(Boolean({}));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

// 数値 => 文字列
console.log(String(1));
console.log(typeof String(1));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log(String(Symbol("シンボル")));
// プリミティブ型に対してのみ使うのが好ましい
console.log(String([1, 2, 3]));
console.log(String({ key: "value" }));
console.log(String(function () {}));

// シンボル => 文字列
// "文字列" + Symbol("シンボル");　=> TypeError
console.log("Hello" + String(Symbol("World!")));

// 文字列 => 数値
// ユーザー入力を文字列として受け取る
// const input = window.prompt("数字を入力してください", "22");
// 文字列を数値に変換する
const input = 22;
const num = Number(input);
console.log(typeof num);
console.log(num);
// Number.parseInt(文字列, 基数)
console.log(Number.parseInt("1", 10));
console.log(Number.parseInt("42px", 10));
console.log(Number.parseInt("42.195", 10));
console.log(Number.parseFloat("1"));
console.log(Number.parseFloat("42.195px"));
console.log(Number.parseFloat("42.1"));
console.log(Number("文字列")); //  => NaN
console.log(Number(undefined)); // NaN
const userInput = "Exsample";
const number = Number.parseInt(userInput, 10);
if (!Number.isNaN(number)) {
  console.log("NaNではない値にパースできる", number);
}

// NaNについて
// const x = 10;
// const y = x + NaN;
// const z = y + NaN;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(typeof NaN);
// function isNaN(x) {
//   return x != x;
// }
console.log(isNaN(1));
console.log(isNaN("str"));
console.log(isNaN({}));
console.log(isNaN([]));
console.log(isNaN(NaN));
// function sum(...values) {
//   return values.reduce((total, value) => {
//     return total + value;
//   }, 0);
// }
// const x = 1,
//   z = 10;
// let y; // => Undefined
// console.log(sum(x, y, z));
// sum関数にNaNが侵入するのを防ぐ JSDoc
/**
 * 数値を合計した値を返す
 * 1つ以上の数値とともに呼び出す必要がある
 * @param {...number} values
 * @returns {number}
 */
function sum(...values) {
  return (
    values.reduce((total, value) => {
      if (typeof value !== "number") {
        throw new Error(`${value}はNumber型ではありません`);
      }
      return total + Number(value);
    }),
    0
  );
}
const x = 1,
  z = 10;
let y;
// console.log(sum(x, y, z)); => Error

// 空文字判定
function isEmptyString(str) {
  return typeof str === "string" && str.length === 0;
}

console.log(isEmptyString(""));
console.log(isEmptyString(0));
console.log(isEmptyString());
