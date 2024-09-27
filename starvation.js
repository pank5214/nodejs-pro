console.log("start");
setTimeout(function () {
  console.log("Callback queue executed!");
}, 0);

function microtask() {
  console.log("MicroTask Executed");
  Promise.resolve().then(microtask);
}

// microtask();
console.log("end");
