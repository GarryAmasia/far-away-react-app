import React from "react";

export const Item = ({ item, onHandleDelete, onToggleItems }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItems(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onHandleDelete(item.id)}>❌</button>
    </li>
  );
};
