const SET_ANNOTATIONS = "SET_ANNOTATIONS";
const SET_HOVERED_INDEX = "SET_HOVERED_INDEX";

export const setAnnotations = (annotations) => ({
  type: SET_ANNOTATIONS,
  payload: {
    annotations,
  },
});

export const setHoveredIndex = (index) => ({
  type: SET_HOVERED_INDEX,
  payload: {
    index,
  },
});

const reducer = (oldState, action) => {
  switch (action.type) {
    case SET_ANNOTATIONS:
      return { ...oldState, annotations: action.payload.annotations };
    case SET_HOVERED_INDEX:
      return { ...oldState, hoveredIndex: action.payload.index };
    default:
      throw new Error();
  }
};

export default reducer;
