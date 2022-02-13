// function fn() {
//   const x = 1;
//   // fn関数のスコープ内から`x`は参照できる
//   console.log(x); // => 1
// }
// fn();
// fn関数のスコープ外から`x`は参照できないためエラー
// console.log(x); // => ReferenceError: x is not defined

// 異なる関数のスコープには同じ"x"を定義できる
function fnA() {
  let x;
}
function fnB() {
  let x;
}

// ブロックスコープ
// if文のブロック内で定義した変数はブロックスコープの中でのみ参照できる
if (true) {
  const x = "inner";
  console.log(x); // => "inner"
}
// console.log(x); // => ReferenceError: x is not defined

// while文
let num = 3;
while (num < 100) {
  console.log(num);
  num *= 3;
}

// for文
const array = [1, 2, 3, 4, 5];
// ループごとに新しいブロックスコープを作成する
for (const element of array) {
  // forのブロックスコープの中でのみ`element`を参照できる
  console.log(element);
}
// ループの外からはブロックスコープ内の変数は参照できない
// console.log(element); // => ReferenceError: element is not defined

// スコープチェーン
{
  // OUTERブロックスコープ
  const x = "x";
  {
    // INNERブロックスコープからOUTERブロックスコープの変数を参照できる
    console.log(x); // => "x"
  }
}

{
  // OUTERブロックスコープ
  const x = "outer";
  {
    // INNERブロックスコープ
    const x = "inner";
    // 現在のスコープ(INNERブロックスコープ)にある`x`を参照する
    console.log(x); // => "inner"
  }
  // 現在のスコープ(OUTERブロックスコープ)にある`x`を参照する
  console.log(x); // => "outer"
}

// グローバルスコープ
// グローバル変数はどのスコープからも参照できる
const globalVariable = "グローバル";
// ブロックスコープ
{
  // ブロックスコープ内には該当する変数が定義されてない -> 外側のスコープへ
  console.log(globalVariable); // => "グローバル"
}
// 関数スコープ
function fn() {
  // 関数ブロックスコープ内には該当する変数が定義されてない -> 外側のスコープへ
  console.log(globalVariable); // => "グローバル"
}

// ビルトインオブジェクトは実行環境が自動的に定義している
// どこのスコープから参照してもReferenceErrorにはならない
console.log(isNaN); // => isNaN
console.log(Array); // => Array

// varの巻き上げ
console.log(x); // => undefined
var x = "varのx";

// 関数宣言と巻き上げ
// `hello`関数の宣言より前に呼び出せる
hello(); // => "Hello"

function hello() {
  return "Hello";
}

// 即時実行関数
// 匿名関数を宣言 + 実行を同時に行っている
(function () {
  // 関数のスコープ内でfoo変数を宣言している
  var foo = "foo";
  console.log(foo); // => "foo"
})();
// foo変数のスコープ外
console.log(typeof foo === "undefined"); // => true

// クロージャー
// `increment`関数を定義して返す関数
function createCounter() {
  let count = 0;
  // `increment`関数は`count`変数を参照
  function increment() {
    count = count + 1;
    return count;
  }
  return increment;
}
// `myCounter`は`createCounter`が返した関数を参照
const myCounter = createCounter();
myCounter(); // => 1
myCounter(); // => 2
// 新しく`newCounter`を定義する
const newCounter = createCounter();
newCounter(); // => 1
newCounter(); // => 2
// `myCounter`と`newCounter`は別々の状態持っている
myCounter(); // => 3
newCounter(); // => 3
