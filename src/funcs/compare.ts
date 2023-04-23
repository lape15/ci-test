const compare = (a: number, b: number) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const nums = [2, 5, 1, 4, 6, 3, 4, 8, 0, 11, 15];
nums.sort(compare);

const people = [
  { name: "Alice", age: 35 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 42 },
  { name: "David", age: 28 },
];

// Sort people array by name using .toLocaleString()
people.sort((a, b) =>
  a.name.toLocaleString().localeCompare(b.name.toLocaleString())
);

// Sort people array by age using .toLocaleString()
people.sort((a, b) =>
  a.age.toLocaleString().localeCompare(b.age.toLocaleString())
);

export {};
