import { promiseExecutionWithDelay } from "./utils.js";

promiseExecutionWithDelay(1000).then(() => {
  console.info('promiseExecutionWithDelay(1000) resolved');
}).catch((err) => {
  console.error(err);
});

// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.md