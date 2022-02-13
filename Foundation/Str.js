// 文字列を作成する
const double = "文字列";
console.log(double);
const multiline = `一行目
二行目
三行目
`;
console.log(multiline);

const str = 'This book is "js-primer"';
console.log(str);

const concat_str = "a" + "b";
console.log(concat_str);

const name = "js";
console.log("Hello" + name + "!");

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);

// 文字列の分解と結合
const strings = "赤・青・緑".split("・");
console.log(strings);

const joinStr = "赤・青・緑".split("・").join("、");
console.log(joinStr);

// 文字列の長さ
console.log("文字列".length);
console.log("".length);

// 文字列の比較
console.log("文字列" === "文字列");
console.log("JS" === "ES");
console.log("文字列" === "もじ");
console.log("A".charCodeAt(0));
console.log("B".charCodeAt(0));
console.log("A" > "B");
console.log("ABC" > "ABD");

// 文字列の一部を取得
console.log(str);
console.log(str.slice(1));
console.log(str.slice(1, 5));
console.log(str.slice(-1));
console.log(str.slice(1, 4));
console.log(str.slice(4, 1));
console.log(str.substring(1));
console.log(str.substring(1, 5));
console.log(str.substring(-1));
console.log(str.substring(1, 4));
console.log(str.substring(4, 1));

// タグ関数
function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
}
tag`Template${0}literal${1}`;
