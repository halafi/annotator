const SET_ANNOTATIONS = "SET_ANNOTATIONS";
const ADD_ANNOTATION = "ADD_ANNOTATION";
const SET_HOVERED_INDEX = "SET_HOVERED_INDEX";
const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";

export const setAnnotations = (annotations) => ({
  type: SET_ANNOTATIONS,
  payload: {
    annotations,
  },
});

export const addAnnotation = (annotation) => ({
  type: ADD_ANNOTATION,
  payload: {
    annotation,
  },
});

export const setHoveredIndex = (index) => ({
  type: SET_HOVERED_INDEX,
  payload: {
    index,
  },
});

export const removeAnnotation = (index) => ({
  type: REMOVE_ANNOTATION,
  payload: {
    index,
  },
});

const reducer = (oldState, action) => {
  switch (action.type) {
    case ADD_ANNOTATION:
      const newAnnotations = oldState.annotations.concat([
        action.payload.annotation,
      ]);
      return {
        ...oldState,
        annotations: newAnnotations,
        hoveredIndex: newAnnotations.length - 1, // index of the newly created annotation
      };
    case SET_ANNOTATIONS:
      return {
        ...oldState,
        annotations: action.payload.annotations,
      };
    case SET_HOVERED_INDEX:
      return { ...oldState, hoveredIndex: action.payload.index };
    case REMOVE_ANNOTATION:
      return {
        ...oldState,
        hoveredIndex: -1,
        annotations: oldState.annotations.filter(
          (_, i) => i !== action.payload.index
        ),
      };
    default:
      throw new Error();
  }
};

export default reducer;
