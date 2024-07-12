import { StyledSizeOption } from "../../../_styled";

const SizeFilter = ({ sizes, state, dispatch }) => {
  return (
    <div role="group" className="row gap-3">
      {sizes.map((size) => (
        <StyledSizeOption
          key={size}
          className={`rounded-pill px-md-4 py-md-2 border-0 cursor ${
            state.size.includes(size)
              ? "bg-dark text-white"
              : "bg-body-secondary text-black"
          }`}
          onClick={() => {
            const newSize = state.size.includes(size)
              ? state.size.filter((item) => item !== size)
              : [...state.size, size];
            dispatch({
              type: "SET_FILTERS",
              payload: { filter: "size", value: newSize },
            });
          }}
        >
          {size}
        </StyledSizeOption>
      ))}
    </div>
  );
};

export default SizeFilter;
