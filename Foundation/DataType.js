console.log(typeof true);
console.log(typeof function () {});

// リテラル
// Boolean
true;
false;
// 10進数
const num = 43;
// 2進数
console.log(0b1111);
console.log(0b10000000000);
console.log(0o644);
console.log(0o777);
// 8進数
console.log(0644); // 非推奨
console.log(0777); // 非推奨
// 16進数
console.log(0xff);
console.log(0x30a2);
// 浮動小数点
console.log(0.123);
console.log(2e8);
// BigInt
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740992n);
// Numeric Separators
console.log(1000000000000);
console.log(1_000_000_000_000);
// String
const str = "Hello World!";
console.log("文字列");
console.log(`文字列`);
console.log("I'm Piccori!");
console.log("I'm Piccori!\nI like banana.\nHello!");
console.log(`
複数行の
文字列を
書くことができる
`);
console.log(`皆さん${str}!`);
console.log(`This is a \`Pen!\``);
// null
const foo = null;
console.log(foo);
// undefined = グローバル変数
function fn() {
  const undefined = "未定義値";
  console.log(undefined);
}

// オブジェクトリテラル
let obj = {
  key: "value",
};

console.log(obj.key);
console.log(obj["key"]);

obj = {
  123: "value",
};
console.log(obj["123"]);
// console.log(obj.123); => SyntaxError

//　配列リテラル
const emptyArray = [];
// const array = [1, 2, 3];

const array = ["index:0", "index:1", "index:2"];
console.log(array[0]);
console.log(array[2]);

// 正規表現リテラル
const numberRegExp = /\d+/;
console.log(numberRegExp.test("123"));

// ラッパーオブジェクト
const strHello = new String("Hello World!");
console.log(typeof strHello);
console.log(strHello.length);
