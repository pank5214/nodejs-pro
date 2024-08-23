const fs = require("node:fs");
const https = require("https");

console.log("Hello World!");

let a = 1024567;
let b = 87367;

// Synchronous
fs.readFileSync("./file.txt", "utf-8");
console.log("This will execute only after file read.");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Data fetched Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 3 seconds");
}, 3000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File data : ", data);
});

const multiply = (a, b) => {
  const result = a * b;
  return result;
};

const c = multiply(a, b);
console.log("Multiplication result is : ", c);
