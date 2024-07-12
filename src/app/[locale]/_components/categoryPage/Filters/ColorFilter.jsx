import { StyledColorOptions } from "../../../_styled";

const ColorFilter = ({ colors, state, dispatch }) => {
  return (
    <div className="row">
      {colors.map((color) => (
        <div
          className="col mb-lg-3 cursor"
          key={color}
          onClick={() => {
            const newColors = state.colors.includes(color)
              ? state.colors.filter((item) => item !== color)
              : [...state.colors, color];
            dispatch({
              type: "SET_FILTERS",
              payload: { filter: "colors", value: newColors },
            });
          }}
        >
          <StyledColorOptions style={{ backgroundColor: color }}>
            {state.colors.includes(color) ? (
              <span
                className={`${
                  color === "white" ? "text-black" : "text-white"
                } fs-4`}
              >
                ✓
              </span>
            ) : (
              ""
            )}
          </StyledColorOptions>
        </div>
      ))}
    </div>
  );
};

export default ColorFilter;
