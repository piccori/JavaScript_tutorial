// if
if (true) {
  console.log("この行は実行されます");
}
const x = 42;
if (x > 10) {
  console.log("xは10より大きい");
}

// else if
// const version = "ES6";
const version = "ES5";
if (version === "ES5") {
  console.log("ECMAScript 5");
} else if (version === "ES6") {
  console.log("ECMAScript 2015");
} else if (version === "ES7") {
  console.log("ECMAScript 2016");
} else {
  console.log("I don't know");
}

// ifのネスト
const year = new Date().getFullYear();
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year}年はうるう年です`);
    } else {
      console.log(`${year}年はうるう年ではない`);
    }
  } else {
    console.log(`${year}はうるう年です`);
  }
} else {
  console.log(`${year}年はうるう年ではない`);
}

// switch文
switch (version) {
  case "ES5":
    console.log("ECMAScript 5");
    break;
  case "ES6":
    console.log("ECMAScript 2015");
    break;
  case "ES7":
    console.log("ECMAScript 2016");
    break;
  default:
    console.log("I don't know");
    break;
}

// switch文と関数
function getECMAScriptName(version) {
  switch (version) {
    case "ES5":
      return "ECMAScript 5";
    case "ES6":
      return "ECMAScript 2015";
    case "ES7":
      return "ECMAScript 2016";
    default:
      return "I don't know";
  }
}
const result = getECMAScriptName("ES7");
console.log(result);
