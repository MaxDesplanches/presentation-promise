import { promiseExecutionFailWithDelay, promiseExecutionSuccessWithDelay } from "./utils.js";

const promise1 = promiseExecutionFailWithDelay(1000);
const promise2 = promiseExecutionFailWithDelay(2000);
const promise3 = promiseExecutionSuccessWithDelay(3000);
const promises = [promise1, promise2, promise3];

const response = await Promise.any(promises);

console.info('response', response);
