const multiply = (num: number) => {
  return num * 2;
};
const addTwo = (num: number) => {
  return num + 2;
};

const subract = (num: number) => {
  return num - 1;
};

const compose =
  (...funcs: Array<Function>) =>
  (x: number) => {
    return funcs.reduceRight((acc, func) => func(acc), x);
  };
const evaluate = compose(subract, addTwo, multiply);

export { evaluate };
