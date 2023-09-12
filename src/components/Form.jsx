import React, { useState } from "react";

export const Form = ({ onAddItems }) => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState(1);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log(event);

    if (!input) return;

    const newItem = {
      description: input,
      quantity: select,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    onAddItems(newItem);

    setInput("");
    setSelect(1);
  };
  // console.log(items);

  return (
    <form className="add-form" onSubmit={handleOnSubmit}>
      <h3>What do you need for the trip😅</h3>
      <select
        value={select}
        name=""
        id=""
        onChange={(event) => setSelect(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={input}
        onChange={(event) => {
          //   console.log(event.target.value);
          setInput(event.target.value);
        }}
      />
      <button>add</button>
    </form>
  );
};
