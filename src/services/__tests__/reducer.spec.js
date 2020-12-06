import reducer, {
  setAnnotations,
  setHoveredIndex,
  removeAnnotation,
} from "../reducer";

const annotations = [
  [100, 100, ""],
  [120, 120, "test"],
  [140, 20, "test 2"],
];

describe("#reducer", () => {
  test("setAnnotations", () => {
    const initialState = {
      annotations: [],
      hoveredIndex: -1,
    };
    expect(reducer(initialState, setAnnotations(annotations))).toEqual({
      annotations,
      hoveredIndex: -1,
    });
  });

  test("setHoveredIndex", () => {
    const initialState = {
      annotations,
      hoveredIndex: -1,
    };
    expect(reducer(initialState, setHoveredIndex(1))).toEqual({
      annotations,
      hoveredIndex: 1,
    });
  });

  test("removeAnnotation - no hovered index", () => {
    const initialState = {
      annotations,
      hoveredIndex: -1,
    };
    expect(reducer(initialState, removeAnnotation(0))).toEqual({
      annotations: [annotations[1], annotations[2]],
      hoveredIndex: -1,
    });
  });

  test("removeAnnotation - hovered index reflects it", () => {
    const initialState = {
      annotations,
      hoveredIndex: 0,
    };
    expect(reducer(initialState, removeAnnotation(0))).toEqual({
      annotations: [annotations[1], annotations[2]],
      hoveredIndex: -1,
    });
  });

  test("removeAnnotation - hovered index is always set to -1", () => {
    const initialState = {
      annotations,
      hoveredIndex: 2,
    };
    expect(reducer(initialState, removeAnnotation(1))).toEqual({
      annotations: [annotations[0], annotations[2]],
      hoveredIndex: -1,
    });
  });
});
