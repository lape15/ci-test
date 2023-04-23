function showText(text: string, time: number | undefined) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

const p = await Promise.all([
  showText("pool", 4000),
  Promise.resolve("succeed"),
]);
export {};
