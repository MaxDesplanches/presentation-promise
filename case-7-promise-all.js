import { promiseExecutionSuccessWithDelay } from "./utils.js";

const promise1 = promiseExecutionSuccessWithDelay(2000);
const promise2 = promiseExecutionSuccessWithDelay(1000);
const promise3 = promiseExecutionSuccessWithDelay(3000);
const promises = [promise1, promise2, promise3];

const reponses = await Promise.all(promises);

console.info(reponses);