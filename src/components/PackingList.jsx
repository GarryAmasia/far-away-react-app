import React from "react";
import { Item } from "./Item";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 10, packed: true },
];

export const PackingList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
