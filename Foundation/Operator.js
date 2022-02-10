// 二項演算子
// ＋演算子
console.log(1 + 1);
console.log(10 + 0.5);

//　文字列結合演算子
// const value = "Hello" + "World";
// console.log(value + "!");

//　マイナス演算子
console.log(1230 - 14);
console.log(124 - 0.43);

// 乗算演算子
console.log(34 * 234);
console.log(432 * 0.43);

// 徐算演算子
console.log(8 / 2);
console.log(10 / 0.5);
console.log(9 / 4);

// 剰余演算子
console.log(8 % 2);
console.log(8 % 3);

// べき乗演算子
console.log(4 ** 3);
console.log(2 ** 5);
console.log(Math.pow(2, 5));

// 単項演算子
// 単項プラス演算子
console.log(+1);
console.log(+"1");

// 単項マイナス演算子
console.log(-1);
console.log(-(-1));

// NaN
console.log(NaN === NaN);
console.log(typeof NaN);
console.log(Number.isNaN(NaN));

// インクリメント演算子
let num = 1;
num++;
console.log(num);
console.log(num++); // numの評価結果
console.log(num); // numが++された値を返す

let x = 1;
console.log(++x); // xが++された値を返す
console.log(x); // xの評価結果

// デクリメント演算子
num = 1;
console.log(num--); // numの評価結果
console.log(num); // numが--された値を返す
console.log(++num);
console.log(++num);
console.log(--num);
console.log(num);

// 比較演算子
// 厳密等価演算子：同じ参照を比較している時にtrue
console.log(1 === 1);
console.log(1 === "1");

// 厳密不等価演算子
console.log(1 !== 1);
console.log(1 !== "!");

// 等価演算子
console.log(1 == 1);
console.log("str" == "str");
console.log("JavaScript" == "ECMAScript");
// 暗黙的な型変換
console.log(1 == "1");
console.log(1 == "01");
console.log(0 == false);
console.log(0 == null);
console.log(null == undefined);
// nullまたはundefinedの比較の際に等価演算子を用いる
const value = undefined;
if (value === null || value === undefined) {
  console.log("Valueがnullまたはundefinedである場合");
}
// nullとundefinedの比較はtrueなので、、、
if (value == null) {
  console.log("valueがnullまたはundefinedである老婆の処理");
}

// 不等価演算子
console.log(1 != 1);
console.log("str" != "str");
console.log("JavaScript" != "ECMAScript");
console.log(true != true);
const objA = {};
const objB = {};
console.log(objA != objB);
console.log(objA != objA);
console.log(1 != "1");
console.log(0 != false);
console.log(0 != null);
console.log(null != undefined);

// より大きい
console.log(42 > 21);
console.log(42 > 42);

// 以上
console.log(42 >= 21);
console.log(42 >= 42);
console.log(42 >= 43);

// より小さい
console.log(21 < 42);
console.log(42 < 42);

// 以下
console.log(21 <= 42);
console.log(42 <= 42);
console.log(43 <= 42);

// ビット演算子
// ビット論理積 AND
console.log(15 & 9);
// 15 => 0000_0000_0000_0000_0000_0000_0000_1111
// 9 =>  0000_0000_0000_0000_0000_0000_0000_1001
// 9 =>  0000_0000_0000_0000_0000_0000_0000_1001

// ビット論理和 OR
console.log(15 | 9);

//　ビット排他的論理和 XOR
console.log(15 ^ 9);

// ビット否定 各ビットを反転した値
console.log(~15);

// 左シフト演算子
console.log(9 << 2);
console.log(0b1111 << 2);

// 右シフト演算子
console.log(-9 >> 2);

// ゼロ埋め右シフト演算子
console.log(-9 >>> 2);

// 代入演算子
// let x = 1;
x = 42;
console.log(x);

// 分割代入
const arr = [1, 2];
const [a, b] = arr;

console.log(a);
console.log(b);

const obj4 = {
  key: "value",
};

const { key } = obj4;
console.log(key);

// 論理演算子
// AND演算子
console.log(true && "右辺の値");
console.log(false && "右辺の値");

true && console.log("コンソールログは実行されます");
false && console.log("コンソールログは実行されません");

const value_str = "str";
if (typeof value_str === "string" && value_str === "str") {
  console.log(`${value_str} is string value`);
}

// OR演算子
console.log(true || "右辺の値");
console.log(false || "右辺の値");

true || console.log("コンソールログは実行されない");
false || console.log("コンソールログは実行される");

const value_num = 42;
if (value_num === 0 || value_num === 42) {
  console.log("value_numは0または42です");
}

// NOT演算子
console.log(!false);
console.log(!true);

// Nullish coalescing演算子
console.log(null ?? "右辺の値");
console.log(undefined ?? "右辺の値");
console.log(true ?? "右辺の値");

// 三項演算子
const valueA = true ? "A" : "B";
console.log(valueA);
const valueB = false ? "A" : "B";
console.log(valueB);

function addPrefix(text, prefix) {
  const pre = typeof prefix === "string" ? prefix : "デフォルト:";
  return pre + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", "カスタム:"));

// グループ化演算子
const a_1 = 1;
const b_2 = 2;
const c_3 = 3;

console.log(a_1 + b_2 * c_3);
console.log((a_1 + b_2) * c_3);

// カンマ演算子
const d = 1,
  e = 3,
  f = 10;
console.log(c);
