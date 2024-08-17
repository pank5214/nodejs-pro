require("./xyz.js");
// const util = require("node: util");
const data = require("./data.json");
const { x, calculateSum, multiply } = require("./calculate");

console.log(data);
// const x = "Assigned new value of x";
const a = 10;
const b = 30;
calculateSum(a, b);
multiply(a, b);
console.log("Hello world!");
console.log(x);
