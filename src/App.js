import { useState } from "react";
import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (itemObj) => {
    setItems((prevItems) => [...prevItems, itemObj]);
  };

  const handleOnDelete = (id) => {
    // const filtered = items.filter((item) => item.id !== id);
    // setItems(filtered);

    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onHandleDelete={handleOnDelete}
        onToggleItems={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

export default App;
