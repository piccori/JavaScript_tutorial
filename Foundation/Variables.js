// 変数と宣言

const bookTitle = "JavaScript Primer";
console.log(bookTitle);

// 再宣言不可
// const bookTitle = "AAAA"; => SyntaxError:
// 再代入不可
// bookTitle = "BBBB"; => TypeError:

const apple = "りんご",
  banana = "バナナ";

let bookName = "JavaScript Primer";
let book; // => 値を設定しない場合undefined
book = "JavaScript Book";
console.log(book);

// 再代入可
let count = 0;
count = 1;
count = 2;
count = 3;
console.log(count);

//　再宣言、再代入可
var carName = "Toyota";
var carName = "Honda";
carName = "BMW";

// 変数名
let $;
let _title;
let jquery;
let TITLE;
let title;
let es2015;
let 日本語の変数名;

// 変数名不可
// let 1fasd;
// let 134;
// let var ;
// let for;

// var => let => const  constをなるべく使う
