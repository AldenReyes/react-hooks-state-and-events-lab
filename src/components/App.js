import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [modeStateDark, setMode] = useState(false);
  const appClass = modeStateDark ? "App dark" : "App light";

  function handleModeToggle() {
    setMode(!modeStateDark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeToggle}>
          {modeStateDark ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
