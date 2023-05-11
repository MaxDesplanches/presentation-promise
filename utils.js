export const promiseExecutionWithDelay = (ms) => new Promise((resolve) => setTimeout(() => {
  console.info(`Promise resolved after ${ms} ms`);
  resolve();
}, ms));