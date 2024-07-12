import { useState } from "react";
import {
  SliderContainer,
  SliderTrack,
  InverseLeft,
  InverseRight,
  Range,
  Thumb,
  Sign,
  Input,
} from "../../_styled";

const SliderComponent = ({
  leftValue,
  rightValue,
  setLeftValue,
  setRightValue,
  onChange,
}) => {
  const handleLeftInput = (e) => {
    const value = Math.min(e.target.value, rightValue - 1);
    setLeftValue(value);
  };

  const handleRightInput = (e) => {
    const value = Math.max(e.target.value, leftValue + 1);
    setRightValue(value);
  };

  return (
    <SliderContainer>
      <SliderTrack>
        <InverseLeft style={{ width: `${(leftValue / 300) * 100}%` }} />
        <InverseRight style={{ width: `${100 - (rightValue / 300) * 100}%` }} />
        <Range
          style={{
            left: `${(leftValue / 300) * 100}%`,
            right: `${100 - (rightValue / 300) * 100}%`,
          }}
        />
        <Thumb style={{ left: `${(leftValue / 300) * 100}%` }} />
        <Thumb style={{ left: `${(rightValue / 300) * 100}%` }} />
        <Sign style={{ left: `${(leftValue / 300) * 100}%` }}>
          <span>{leftValue}</span>
        </Sign>
        <Sign style={{ left: `${(rightValue / 300) * 100}%` }}>
          <span>{rightValue}</span>
        </Sign>
      </SliderTrack>
      <Input
        type="range"
        value={leftValue}
        max="300"
        min="0"
        step="1"
        onInput={handleLeftInput}
        onChange={onChange}
      />
      <Input
        type="range"
        value={rightValue}
        max="300"
        min="0"
        step="1"
        onInput={handleRightInput}
        onChange={onChange}
      />
    </SliderContainer>
  );
};

export default SliderComponent;
