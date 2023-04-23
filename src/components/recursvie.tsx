import React from "react";
import Item from "./item";

const items = [
  {
    name: "shoe",
  },
  {
    name: "bag",
  },
  { name: "dress" },
  {
    name: "look",
    children: [
      {
        name: "tie",
      },
    ],
  },
  {
    name: "look",
    children: [
      {
        name: "pants",
      },
    ],
  },
  {
    name: "animal",
    children: [
      {
        name: "cats",
      },
    ],
  },
];
const Items = () => {
  return (
    <div>
      <ul className="list">
        {items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Items;
