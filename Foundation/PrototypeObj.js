const obj = {
  key: "value",
  toString() {
    return "custom value";
  },
};
// Object.prototype.toStringを参照している
console.log(obj.toString === Object.prototype.toString);
console.log(obj.toString());

const customObject = {
  toString() {
    return "custom value";
  },
};
console.log(customObject.toString()); // "custom value"

console.log(obj.hasOwnProperty("toString"));
console.log("toString" in obj);

// Object createメソッド
// 第一引数に指定したprototypeオブジェクトを継承した新しいオブジェクトを作成できる
const obj1 = Object.create(Object.prototype);
console.log(obj1.hasOwnProperty === Object.prototype.hasOwnProperty);

// ArrayもObjectを継承している
const arr = function () {};
arr.prototype = Object.create(Object.prototype);
const arr1 = Object.create(Array.prototype);
console.log(arr1.hasOwnProperty === Object.prototype.hasOwnProperty);
