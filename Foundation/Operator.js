// 二項演算子
// ＋演算子
console.log(1 + 1);
console.log(10 + 0.5);

//　文字列結合演算子
const value = "Hello" + "World";
console.log(value + "!");

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
console.log(1 == "1");
console.log(1 == "01");
console.log(0 == false);
console.log(0 == null);
console.log(null == undefined);
