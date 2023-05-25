import { promiseExecutionSuccessWithDelay } from "./utils.js";

// 1

promiseExecutionSuccessWithDelay(500);

// 2

promiseExecutionSuccessWithDelay(1000).then(() => {
  promiseExecutionSuccessWithDelay(500);
}).catch((err) => {
  console.error(err);
});

// 3

promiseExecutionSuccessWithDelay;

// 4

await promiseExecutionSuccessWithDelay(3000);

// 4

console.info('finished');