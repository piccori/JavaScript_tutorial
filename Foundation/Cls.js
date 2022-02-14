const MyClass = class MyClass {
  constructor() {}
};

const AnonymousClass = class {
  constructor() {}
};

class MyClass {
  constructor() {
    // コンストラクタ関数の処理
    // インスタンス化されるときに自動的に呼び出される
  }
}
// `MyClass`をインスタンス化する
const myClass = new MyClass();
// 毎回新しいインスタンス(オブジェクト)を作成する
const myClassAnother = new MyClass();
// それぞれのインスタンスは異なるオブジェクト
console.log(myClass === myClassAnother); // => false
// クラスのインスタンスかどうかは`instanceof`演算子で判定できる
console.log(myClass instanceof MyClass); // => true
console.log(myClassAnother instanceof MyClass); // => true

class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}
const counterA = new Counter();
const counterB = new Counter();
// 各インスタンスオブジェクトのメソッドは共有されている(同じ関数を参照している)
console.log(counterA.increment === counterB.increment); // => true

class Counter {
  constructor() {
    this.count = 0;
    this.increment = () => {
      // `this`は`constructor`メソッドにおける`this`（インスタンスオブジェクト）を参照する
      this.count++;
    };
  }
}
const counterA = new Counter();
const counterB = new Counter();
// `counterA.increment()`のベースオブジェクトは`counterA`インスタンス
counterA.increment();
// 各インスタンスの持つプロパティ(状態)は異なる
console.log(counterA.count); // => 1
console.log(counterB.count); // => 0
