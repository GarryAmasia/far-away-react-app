import React from "react";
import { Item } from "./Item";

export const PackingList = ({ items, onHandleDelete, onToggleItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onHandleDelete={onHandleDelete}
              onToggleItems={onToggleItems}
            />
          );
        })}
      </ul>
    </div>
  );
};
