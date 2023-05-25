import { promiseExecutionFailWithDelay } from "./utils.js";

const promise = promiseExecutionFailWithDelay(1000);

const response = await promise.finally(() => {
  console.info('promise is done');
});

console.info('response', response);
