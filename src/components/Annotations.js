import React, { useState, useReducer } from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import { ANNOTATION_WIDTH, ANNOTATION_HEIGHT } from "../consts/Theme";
import reducer, {
  setAnnotations,
  setHoveredIndex,
  removeAnnotation,
} from "../services/reducer";

const Container = styled.svg`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme["gray-100"]};
`;

const AnnotationRect = styled.rect`
  fill: ${({ theme }) => theme["gray-200"]};
  stroke: ${({ isHovered, theme }) =>
    isHovered ? theme.red : theme["gray-400"]};
  z-index: ${({ isHovered }) => (isHovered ? "2" : "1")};
  stroke-width: 2;
`;

const Annotations = () => {
  const [state, dispatch] = useReducer(reducer, {
    annotations: [],
    hoveredIndex: -1,
  });
  const { annotations, hoveredIndex } = state;

  const addAnnotation = (x, y) => {
    const lookupAnnotation = annotations.find((a) => a[0] === x && a[1] === y);
    if (!lookupAnnotation) {
      dispatch(setAnnotations(annotations.concat([[x, y, ""]])));
    }
  };

  return (
    <>
      {hoveredIndex >= 0 && (
        <Tooltip
          annotation={annotations[hoveredIndex]}
          onChange={(newValue) => {
            dispatch(
              setAnnotations(
                annotations.map((a, i) =>
                  i === hoveredIndex ? [a[0], a[1], newValue] : a
                )
              )
            );
          }}
          onMouseLeave={() => dispatch(setHoveredIndex(-1))}
          onDelete={() => dispatch(removeAnnotation(hoveredIndex))}
        />
      )}
      <Container
        onClick={({ pageX: x, pageY: y }) =>
          addAnnotation(x - ANNOTATION_WIDTH / 2, y - ANNOTATION_HEIGHT / 2)
        }
      >
        {annotations.map((annotation, i) => {
          const [x, y, text] = annotation;
          return (
            <g
              key={`${i}-${x}-${y}`}
              onMouseEnter={() => dispatch(setHoveredIndex(i))}
            >
              <AnnotationRect
                x={x}
                y={y}
                rx={3}
                ry={3}
                width={ANNOTATION_WIDTH}
                height={ANNOTATION_HEIGHT}
                isHovered={
                  hoveredIndex >= 0 &&
                  annotations[hoveredIndex][0] === x &&
                  annotations[hoveredIndex][1] === y
                }
              />
            </g>
          );
        })}
      </Container>
    </>
  );
};

export default Annotations;
