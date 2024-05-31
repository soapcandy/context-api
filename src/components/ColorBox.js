import ColorBoxContext from "../contexts/ColorBoxContext";

function ColorBox() {
  return (
    <ColorBoxContext.Consumer>
      {({ state }) => (
        <div>
          <div
            style={{ background: state.color, width: "12rem", height: "12rem" }}
          ></div>
          <div
            style={{
              background: state.subcolor,
              width: "6rem",
              height: "6rem",
            }}
          ></div>
        </div>
      )}
    </ColorBoxContext.Consumer>
  );
}

export default ColorBox;
