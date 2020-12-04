import React from "react";
import styled from "styled-components";
import { ANNOTATION_WIDTH, ANNOTATION_HEIGHT } from "../consts/Theme";

const TOOLTIP_WIDTH = 200;

const Container = styled.textarea`
  position: fixed;
  ${({ upperHalfOfScreen }) =>
    upperHalfOfScreen ? "bottom: 10px" : "top: 10px"};
  left: 50%;
  transform: translateX(-50%);
  background-color: #d7d7d7;
  border: 1px solid #d8d8d8;
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

// limitiation: needs reload won't work on resize
const { innerWidth, innerHeight } = window;

const Tooltip = ({ annotation, onChange }) => {
  const [x, y, text] = annotation;

  const nearBottomScreenEnd = y - innerHeight + 75;
  const nearRightScreenEnd = x - innerWidth + TOOLTIP_WIDTH + 60;

  const upperHalfOfScreen = y < innerHeight / 2;
  return (
    <Container
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
};

export default Tooltip;
