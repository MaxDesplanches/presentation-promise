
function promiseExecution() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function multiplePromisesExecution() {
  await promiseExecution1();
  await promiseExecution1();
}

async function promiseExecutionReturned() {
  return promiseExecution1();
}

async function programExecution() {
  // some stuff

  await multiplePromisesExecution();
  await promiseExecutionReturned();
}

await programExecution();