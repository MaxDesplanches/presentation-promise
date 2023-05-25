export const promiseExecutionSuccessWithDelay = (ms) => new Promise((resolve) => setTimeout(() => {
  console.info(`Promise resolved after ${ms} ms`);
  resolve(`Promise resolved after ${ms} ms`);
}, ms));

export const promiseExecutionFailWithDelay = (ms) => new Promise((resolve, reject) => setTimeout(() => {
  const errorMessage = `Promise rejected after ${ms} ms`;
  reject(new Error(errorMessage));
}, ms));

