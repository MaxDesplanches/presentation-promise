
function promiseExecution() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.info('Promise resolved after 1000 ms');
      resolve();
    }, 1000);
  });
}

  const stockagePromise = promiseExecution();