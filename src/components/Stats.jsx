import React from "react";

export const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }
  const numberItems = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberPacked / numberItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you've got everything packed,lets go🛩️"
          : `You have ${numberItems} items on your list, and you already packed-
        ${numberPacked} items 💼 (${percentage}%)`}
      </em>
    </footer>
  );
};
