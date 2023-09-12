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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
