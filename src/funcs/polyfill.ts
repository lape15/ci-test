const mapPolifill = (arr: Array<string | number>) => {
  const newArry = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArry.push(arr[i], i, arr);
  }
  return newArry;
};

const test = [3, 4, 2, 4, 5, , 6, 7, 9];

Array.prototype.myMap = (cb) => {
  const newArr = [];
  for (let i = 0; i < this.length; i += 1) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

test.myMap((num: number, i: any, arr: any) => num * 2);
export {};
