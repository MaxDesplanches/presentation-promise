import { promiseExecutionSuccessWithDelay } from "./utils.js";

promiseExecutionSuccessWithDelay(1000).then(() => {
  console.info('promiseExecutionSuccessWithDelay(1000) resolved');
}).catch((err) => {
  console.error(err);
});

// https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md
