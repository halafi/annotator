import React, { forwardRef } from "react";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import { ANNOTATION_WIDTH, TOOLTIP_WIDTH } from "../consts/Theme";

const Container = styled.textarea`
  position: fixed;
  ${({ upperHalfOfScreen }) =>
    upperHalfOfScreen ? "bottom: 10px" : "top: 10px"};
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme["gray-300"]};
  border: ${({ theme }) => `1px solid ${theme["gray-200"]}`};
  width: ${TOOLTIP_WIDTH}px;
  padding: 12px;
  border-radius: 4px;
  overflow-y: auto;
  height: 50px;
  resize: none;

  @media (min-width: 640px) {
    position: absolute;
    top: ${({ top }) => top}px;
    bottom: auto;
    left: ${({ left }) => left}px;
    transform: none;
  }
`;

const Tooltip = forwardRef(({ annotation, onChange, onMouseLeave }, ref) => {
  const [innerWidth, innerHeight] = useWindowSize();
  const [x, y, text] = annotation;

  const nearBottomScreenEnd = y - innerHeight + 75;
  const nearRightScreenEnd = x - innerWidth + TOOLTIP_WIDTH + 60;
  const upperHalfOfScreen = y < innerHeight / 2;

  return (
    <Container
      ref={ref}
      onMouseLeave={onMouseLeave}
      top={nearBottomScreenEnd > 0 ? y - 55 : y}
      left={
        nearRightScreenEnd > 0
          ? x - TOOLTIP_WIDTH - ANNOTATION_WIDTH - 15
          : x + ANNOTATION_WIDTH + 10
      }
      upperHalfOfScreen={upperHalfOfScreen}
      rows="2"
      cols="25"
      value={text}
      onChange={(e) => onChange(e.target.value)}
    />
  );
});

export default Tooltip;
