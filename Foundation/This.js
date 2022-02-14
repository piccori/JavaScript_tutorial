// ブラウザでは`window`オブジェクト、Node.jsでは`global`オブジェクトを参照する
console.log(globalThis);

("use strict");
function say(message) {
  return `${message} ${this.fullName}！`;
}
const person = {
  fullName: "Brendan Eich",
};
// `this`を`person`にして`say`関数を呼びだす
console.log(say.call(person, "こんにちは")); // => "こんにちは Brendan Eich！"
// `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined

("use strict");
function say(message) {
  return `${message} ${this.fullName}！`;
}
const person = {
  fullName: "Brendan Eich",
};
// `this`を`person`にして`say`関数を呼びだす
console.log(say.call(person, "こんにちは")); // => "こんにちは Brendan Eich！"
// `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined

("use strict");
function say(message) {
  return `${message} ${this.fullName}！`;
}
const person = {
  fullName: "Brendan Eich",
};
// `this`を`person`にして`say`関数を呼びだす
// callとは異なり引数を配列として渡す
console.log(say.apply(person, ["こんにちは"])); // => "こんにちは Brendan Eich！"
// `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined

function say(message) {
  return `${message} ${this.fullName}！`;
}
const person = {
  fullName: "Brendan Eich",
};
// `this`を`person`に束縛した`say`関数をラップした関数を作る
const sayPerson = say.bind(person, "こんにちは");
console.log(sayPerson()); // => "こんにちは Brendan Eich！"

("use strict");
const Prefixer = {
  prefix: "pre",
  prefixArray(strings) {
    return strings.map((str) => {
      // Arrow Function自体は`this`を持たない
      // `this`は外側の`prefixArray`関数が持つ`this`を参照する
      // そのため`this.prefix`は"pre"となる
      return this.prefix + "-" + str;
    });
  },
};
// このとき、`prefixArray`のベースオブジェクトは`Prefixer`となる
// つまり、`prefixArray`メソッド内の`this`は`Prefixer`を参照する
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]

("use strict");
function outer() {
  // `outer`関数直下の`this`
  const that = this;
  // Arrow Functionで定義した関数を返す
  return () => {
    // Arrow Function自身は`this`を持たない
    // `outer`関数に`this`を書いた場合と同じ
    return that;
  };
}
// `outer()`と呼び出したときの`this`は`undefined`(strict mode)
const innerArrowFunction = outer();
console.log(innerArrowFunction()); // => undefined
