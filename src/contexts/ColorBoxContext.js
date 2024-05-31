import { createContext } from "react";

const ColorBoxContext = createContext({
  state: { color: "gray", subcolor: "pink" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

export default ColorBoxContext;
