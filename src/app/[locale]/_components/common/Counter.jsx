import React from "react";
import { StyledCounter } from "../../_styled";

const Counter = ({ count, setCount }) => {
  return (
    <StyledCounter className="rounded-pill w-100 px-3 fs-3 d-flex justify-content-between align-items-center">
      <button
        className="border-0 bg-transparent"
        onClick={() => count > 1 && setCount(count - 1)}
      >
        -
      </button>
      <span className="fs-6">{count}</span>
      <button
        className="border-0 bg-transparent"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </StyledCounter>
  );
};

export default Counter;
