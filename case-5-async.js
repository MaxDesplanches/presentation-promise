
function promiseExecution() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.info('Promise resolved after 1000 ms');
      resolve();
    }, 1000);
  });
}

async function multiplePromisesExecution() {
  await promiseExecution();
  await promiseExecution();
}

async function promiseExecutionReturned() {
  return promiseExecution();
}

async function programExecution() {
  // some stuff

  await multiplePromisesExecution();
  return promiseExecutionReturned();
}

await programExecution();