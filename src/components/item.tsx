import { useState } from "react";

type ItemProp = {
  item: {
    name: string;
    children?: Array<{ name: string }>;
  };
};

const Item = (props: ItemProp) => {
  const { item } = props;
  if (item.children) {
    return (
      <li>
        {item.name}
        <ul>
          {item.children.map((child, idx) => (
            <Item key={idx} item={child} />
          ))}
        </ul>
      </li>
    );
  }

  return <li>{item.name}</li>;
};

export default Item;
