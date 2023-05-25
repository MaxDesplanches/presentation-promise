import { promiseExecutionFailWithDelay, promiseExecutionSuccessWithDelay } from "./utils.js";

const promise3 = promiseExecutionSuccessWithDelay(3000);

const promise2 = promiseExecutionFailWithDelay(2000);
const promises = [promise2, promise3];

const response = await Promise.race(promises);

console.info('response', response);
