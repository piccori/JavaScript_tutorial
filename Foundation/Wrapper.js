// ラッパーオブジェクト
"string".toUpperCase();

// プリミティブ型の値のプロパティへアクセスするときは、自動的にラッパーオブジェクトへと変換される

const str = "文字列";
const stringWrapper = new String("文字列");
