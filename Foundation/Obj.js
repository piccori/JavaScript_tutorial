// objectリテラルを使いオブジェクトを作成
const name = "名前";
const obj = {
  key: "value",
  "my-prop": "values",
  name,
};
console.log(obj);

// {}はobjectのインスタンスオブジェクト
const obj1 = new Object();
console.log(obj1);

// プロパティへのアクセス
const obj2 = {
  key: "value",
};

console.log(obj.key); // ドット記法
console.log(obj["key"]); // ブラケット記法

// オブジェクトと分割代入
const languages = {
  ja: "日本語",
  en: "English",
};

const { ja, en } = languages;
console.log(ja, en);

// プロパティの追加
const obj3 = {};
obj3.key = "value";
obj3[name] = "名前";
console.log(obj3.key);
console.log(obj3[name]);

// Computed property names
const age = "age";
const obj5 = {
  [age]: 22,
};

console.log(obj5);

// プロパティの削除
console.log(obj);
delete obj.key;
console.log(obj);

// オブジェクトの変更を防ぐには
const object = Object.freeze({ key: "value" });
object.key = "value";

// プロパティの存在を確認
const obj6 = {};
console.log(obj6.notFound); // => undefined

const widget = {
  window: {
    title: "ウィジェットのタイトル",
  },
};
console.log(widget.windw); // => undefined
// console.log(widget.windw.title); => TypeError

// undefinedとの比較
const obj7 = {
  key: "value",
};
// key: undefinedの場合は以下のコードは実行されない
if (obj7.key !== undefined) {
  console.log(`keyプロパティの値はundefinedではない`);
}

// in演算子を使う
if ("key" in obj7) {
  console.log("keyプロパティは存在する");
}

// hasOwnPropertyメソッド
if (obj7.hasOwnProperty("key")) {
  console.log("objectはkeyプロパティを持っている");
}

// Optional chaining演算子
function printWidgetTitle(widget) {
  const title = widget?.window?.title ?? "未定義";
  console.log(`ウィジェットのタイトルは${title}です`);
}
printWidgetTitle({
  window: {
    title: "Book Viewer",
  },
});

printWidgetTitle({});

// toStringメソッド
const obj8 = { key: "value" };
console.log(obj8.toString());
console.log(String(obj));

// オブジェクトの列挙
const num = {
  one: 1,
  two: 2,
  three: 3,
};
console.log(Object.keys(num));
console.log(Object.values(num));
console.log(Object.entries(num));

const keys = Object.keys(num);
keys.forEach((key) => {
  console.log(key);
});

// オブジェクトのマージと複製
const sources = {
  three: 3,
  four: 4,
  five: 5,
};
const obj9 = Object.assign(num, sources);
console.log(obj9);

// spread構文でのマージ
const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = {
  ...objectA,
  ...objectB,
};
console.log(merged);

//　オブジェクトの複製
const shallowClone = (obj) => {
  return Object.assign({}, obj);
};

const obj10 = { a: "a" };
const cloneObj = shallowClone(obj10);
console.log(cloneObj);
console.log(obj10 === cloneObj);

function deepClone(obj) {
  const newObj = shallowClone(obj);
  Object.keys(newObj)
    .filter((k) => typeof newObj[k] === "object")
    .forEach((k) => (newObj[k] = deepClone(newObj[k])));
  return newObj;
}

const obj11 = {
  level: 1,
  nest: {
    level: 2,
  },
};

const cloneObj1 = deepClone(obj11);
console.log(cloneObj1.nest === obj.nest);
