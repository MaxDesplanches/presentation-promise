import { promiseExecutionSuccessWithDelay } from "./utils.js";

await promiseExecutionSuccessWithDelay(1000);

console.info('finished');

// await: since 2017, node 8.x
// top level: at least since node 14.3