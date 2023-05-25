import { promiseExecutionSuccessWithDelay } from "./utils.js";

const promise1 = promiseExecutionSuccessWithDelay(2000);
const promise2 = promiseExecutionSuccessWithDelay(1000);
const promise3 = promiseExecutionSuccessWithDelay(3000);
const promises = [promise1, promise2, promise3];

const [response1, response2, response3] = await Promise.all(promises);

console.info('response1', response1);
console.info('response2', response2);
console.info('response3', response3);