import { promiseExecutionWithDelay } from "./utils.js";

// 1

promiseExecutionWithDelay(500);

// 2

promiseExecutionWithDelay(1000).then(() => {
}).catch((err) => {
  console.error(err);
});

// 3

promiseExecutionWithDelay;

// 4

await promiseExecutionWithDelay(3000);

// 4

console.info('finished');