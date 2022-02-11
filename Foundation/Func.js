// 関数宣言
function double(num) {
  return num * 2;
}
console.log(double(10));

function fn1() {
  return;
}
console.log(fn1());

// 関数の引数
function echo1(x) {
  return x;
}

console.log(echo1(1));
console.log(echo1());

function argumentsToArray(x, y) {
  return [x, y];
}

console.log(argumentsToArray(1, 2));
console.log(argumentsToArray(1));

// デフォルト引数
function echo2(x = "デフォルト値") {
  return x;
}

console.log(echo2(1));
console.log(echo2());

// Nullish coalescing演算子を利用したデフォルト引数
function addPrefix(text, prefix) {
  const pre = prefix ?? "デフォルト:";
  return pre + text;
}
console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", ""));
console.log(addPrefix("文字列", "カスタム:"));

// 可変長引数
const max = Math.max(1, 5, 10, 20);
console.log(max);

// Rest parameters
function fn2(...args) {
  console.log(args);
}
fn2("a", "a", "a", "a");

function fn3(arg1, ...args) {
  console.log(arg1, args);
}
fn3(1, "a", "a", "a", "a");

function fn4(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}
const array = [1, 2, 3];
fn4(...array);
// fn4(array[0], array[1], array[2]);

// arguments Rest parametersを推奨
function fn5() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
fn5("a", "b", "c");

// 関数の引数と分割代入
function printUserId({ id }) {
  console.log(id);
}
const user = {
  id: 42,
};
const { id } = user;
console.log(id);
printUserId(user);

function print([first, second]) {
  console.log(first);
  console.log(second);
}
const arr = [1, 2];
print(arr);

// 関数は関数オブジェクトと呼ばれるオブジェクトの１種
// 関数の代入や引数として渡すことも可能

function fn6() {
  console.log("fn6が呼び出された");
}
const myFunc = fn6;
myFunc();

// 関数式
const factorial = function innerFact(n) {
  if (n === 0) {
    return 1;
  }
  // innerFactを再起的に呼び出している
  return n * innerFact(n - 1);
};
console.log(factorial(3));

// Arrow FUnction
const fnA = () => {
  /*仮引数がないとき */
};
const fnB = (x) => {
  /*仮引数が一つのみ*/
};
const fnC = (x, y) => {
  /*仮引数が一つのみ*/
};

const arr1 = [1, 2, 3];
const doubleArray = array.map((value) => value * 2);
console.log(doubleArray);

// コールバック関数
const output = (value) => {
  console.log(value);
};

array.forEach(output);
array.forEach((value) => console.log(value));

// メソッド：オブジェクトのプロパティである関数のことを指す
const obj = {
  method1() {},
  method2: () => {
    return "this is method";
  },
};
console.log(obj.method2());
