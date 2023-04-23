// Define the object prototype
const obj = { prop1: 0, prop2: "value" };

// Create an array with 5 copies of the same object
const arr = new Array(5).fill(obj);

console.log(arr); // [ { prop1: 0, prop2: 'value' }, { prop1: 0, prop2: 'value' }, { prop1: 0, prop2: 'value' }, { prop1: 0, prop2: 'value' }, { prop1: 0, prop2: 'value' } ]

export const createValidityArray = (length: number) => {
  return Array(length).fill("");
};

const convert12To24 = (timeIn12: string) => {
  const [time, modifier] = timeIn12.split(" ");
  let [hr, min]: Array<string | number> = time.split(":");
  if (hr === "12") hr = "00";
  if (modifier === "PM") hr = Number(hr) + 12;
  return `${hr}:${min}`;
};

class LRU {
  max: number;
  cache: Map<any, any>;
  constructor(max: number) {
    this.max = max;
    this.cache = new Map();
  }
  get(key: string) {
    const item = this.cache.get(key);
    return item;
  }

  set(key: string, value: any) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.max) {
      this.cache.delete(this.first());
    }
    this.cache.set(key, value);
  }
  private first() {
    return this.cache.keys().next().value;
  }
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name + "is my name";
  }
}
export { LRU };
