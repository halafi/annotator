import React, { useReducer, useEffect } from "react";
import styled from "styled-components";
import * as d3 from "d3";
import { Delaunay } from "d3-delaunay";
import Tooltip from "./Tooltip";
import { ANNOTATION_WIDTH, ANNOTATION_HEIGHT } from "../consts/Theme";
import reducer, {
  addAnnotation,
  setAnnotations,
  setHoveredIndex,
  removeAnnotation,
} from "../services/reducer";
import useWindowSize from "../hooks/useWindowSize";

const Container = styled.svg`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme["gray-100"]};
  cursor: crosshair;
`;

const AnnotationRect = styled.rect`
  fill: ${({ theme }) => theme["gray-200"]};
  stroke: ${({ isHovered, theme }) =>
    isHovered ? theme.red : theme["gray-400"]};
  z-index: ${({ isHovered }) => (isHovered ? "2" : "1")};
  stroke-width: 2;
`;

const tooltipRef = React.createRef();

const Annotations = () => {
  const [innerWidth, innerHeight] = useWindowSize();
  const [state, dispatch] = useReducer(reducer, {
    annotations: [],
    hoveredIndex: -1,
  });
  const { annotations, hoveredIndex } = state;

  const createAnnotation = (x, y) => {
    const lookupAnnotation = annotations.find((a) => a[0] === x && a[1] === y);
    if (!lookupAnnotation) {
      if (
        x < 0 ||
        x > innerWidth - ANNOTATION_WIDTH ||
        y < 0 ||
        y > innerHeight - ANNOTATION_HEIGHT
      ) {
        // we could also adjust coordinates here so we can add the annotation
        return;
      }
      dispatch(addAnnotation([x, y, ""]));
      if (tooltipRef.current) {
        tooltipRef.current.focus();
      }
    }
  };

  const delaunay = Delaunay.from(annotations.map(([x, y]) => [x, y]));
  // const voronoi = delaunay.voronoi([0, 0, innerWidth, innerHeight]);

  useEffect(() => {
    if (hoveredIndex >= 0 && annotations[hoveredIndex]) {
      d3.selectAll("rect")
        .filter(function () {
          if (this.attributes && this.attributes.x && this.attributes.y) {
            const x = Number(this.attributes.x.value);
            const y = Number(this.attributes.y.value);
            if (
              x === annotations[hoveredIndex][0] &&
              y === annotations[hoveredIndex][1]
            ) {
              return true;
            }
          }
          return false;
        })
        .each(function () {
          // raise our annotation <g> to the front
          d3.select(this.parentNode).raise();
        });
    }
  }, [hoveredIndex]);

  return (
    <>
      {hoveredIndex >= 0 && (
        <Tooltip
          ref={tooltipRef}
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
        viewBox={`0 0 ${innerWidth} ${innerHeight}`}
        onClick={({ pageX: x, pageY: y }) =>
          createAnnotation(x - ANNOTATION_WIDTH / 2, y - ANNOTATION_HEIGHT / 2)
        }
        onMouseMove={(ev) => {
          // hover needs to be on container so hover select is done based on the shapes
          const index = delaunay.find(ev.pageX, ev.pageY); // returns index or NaN
          if (!Number.isNaN(index) && index >= 0) {
            dispatch(setHoveredIndex(index));
            if (tooltipRef.current) {
              tooltipRef.current.focus();
            }
          }
        }}
      >
        {/* <path d={voronoi.render()} stroke="red" fill="blue" /> */}
        {annotations.map((annotation, i) => {
          const [x, y] = annotation;
          return (
            <g key={`${i}-${x}-${y}`}>
              <AnnotationRect
                x={x}
                y={y}
                rx={3}
                ry={3}
                width={ANNOTATION_WIDTH}
                height={ANNOTATION_HEIGHT}
                onContextMenu={(e) => {
                  e.preventDefault();
                  // right click is not ideal UX with the icon, but left click breaks mobile
                  dispatch(removeAnnotation(hoveredIndex));
                }}
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
