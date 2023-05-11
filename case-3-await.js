import { promiseExecutionWithDelay } from "./utils.js";

await promiseExecutionWithDelay(1000);

console.info('finished');

// await: since 2017, node 8.x
// top level: at least since node 14.3