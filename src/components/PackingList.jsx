import React, { useState } from "react";
import { Item } from "./Item";

export const PackingList = ({
  items,
  onHandleDelete,
  onToggleItems,
  setItems,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;

  if (sortBy === "input") {
    sortedItem = items;
  }

  if (sortBy === "description") {
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const handleOnDelete = () => {
    const confirmed = window.confirm("Do you want to delete all items");

    if (confirmed) {
      setItems([]);
    } else {
      return;
    }
  };

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => {
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
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleOnDelete}>clear list</button>
      </div>
    </div>
  );
};
