const num: number = 123;

const isOk: boolean = true;

const count: number = 123;

const hello: string = "Hello";
const world: string = "World!";
console.log(hello + world);

const x: null = null;

const y: undefined = undefined;

const s: Symbol = Symbol("foo");

const big: bigint = 100n;

// ラッパーオブジェクト
const bool: Boolean = false;
const num_zero: Number = 0;
const str1: String = "";
const sym: Symbol = Symbol();
const big1: BigInt = 10n;

let value: any;
value = 1;
value = "string";
// value = { name: "オブジェクト" };

let box: {
  width: number;
  height: number;
};
box = { width: 1080, height: 720 };
type BoxType = {
  readonly width: number;
  readonly height: number;
};
let BoxType: BoxType = {
  width: 1080,
  height: 720,
};

let calculator: {
  sum: (x: number, y: number) => number;
};

calculator = {
  sum(x, y) {
    return x + y;
  },
};

// readonlyはプロパティへの代入を禁止にするもの
let obj1: Readonly<{
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}>;

// Optional Property
let size: { width?: number };
size = {};

// Excess Property Checking

let onlyX: { x: number };
onlyX = { x: 1 };
// onlyX = { x: 1, y: 2 }; => コンパイルエラー

let obj: {
  [K: string]: number;
};

obj = { a: 1, b: 2 };
obj.c = 4;
obj["d"] = 5;

const obj2: { [K: string]: number } = { a: 1 };
const b: number | undefined = obj.d;
console.log(b);

let obj3: { [K: string]: number };
let obj4: Record<string, number>;

type Wild = {
  nam: string;
  no: number;
  genre: string;
  height: number;
  weight: number;
};
// const { Pname, no, genre }: Wild = safari();

// Shorthand Property Names
const nam: string = "pikachu";
const no: number = 25;
const genre: string = "mouse pokémon";
const height: number = 0.4;
const weight: number = 6.0;
const pikachu: Wild = {
  nam,
  no,
  genre,
  height,
  weight,
};

// Optional Chaining
// const book = undefined;
// const title = book?.title;
// console.log(title);

// const book = { titile: "TypeScript" };
// const title = book?.titile;
// console.log(title);

// const book = undefined;
// const authorEmail = book?.author?.email;
// console.log(authorEmail);

// const book = { author: { email: "alice@example.com" } };
// const authorEmail = book?.author?.email;
// console.log(authorEmail);

let book: undefined | { title: string };
const title = book?.title;
