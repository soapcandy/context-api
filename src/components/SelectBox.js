import ColorBoxContext from "../contexts/ColorBoxContext";

function SelectBox() {
  const arr = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

  return (
    <div>
      <h1>무지개</h1>
      <ColorBoxContext.Consumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {arr.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "3rem",
                  height: "3rem",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorBoxContext.Consumer>
    </div>
  );
}
export default SelectBox;
