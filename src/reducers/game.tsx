export default function gameReducer(state, action) {
  switch (action.type) {
    case 'ON_FRAME_PRESS': {
      state.selectedFrame = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
}
