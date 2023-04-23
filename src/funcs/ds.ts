const isPalindrome = (x: number) => {
  return String(x) === String(x).split("").reverse().join("");
};

const fibonacci = (n: number, memo = {}): number => {
  if (memo[String(n)]) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

const twoSum = (nums: Array<number>, target: number) => {
  if (nums.length === 0) return;
  for (let i = 0; i < nums.length; i += 1) {
    const sum = nums[i] + nums[i + 1];
    if (sum === target) return [i, i + 1];
  }
};

const twoSum2 = (nums: Array<number>, target: number) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const sum = nums[i] + nums[j];
      if (sum === target) return [i, j];
    }
  }
};

interface MyObject {
  [key: number | string]: number;
}
const twoSum3 = (nums: Array<number>, target: number) => {
  const obj: MyObject = {};
  for (let i = 0; i < nums.length; i += 1) {
    let n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};
export {};
