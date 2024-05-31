import { useState } from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectBox from "./components/SelectBox";
import ColorBoxContext from "./contexts/ColorBoxContext";

function App() {
  const [color, setColor] = useState("gray");
  const [subcolor, setSubcolor] = useState("pink");

  console.log(color);

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorBoxContext.Provider value={value}>
      <SelectBox />
      <ColorBox />
    </ColorBoxContext.Provider>
  );
}

export default App;
