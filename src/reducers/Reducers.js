import TEST_ACTION from '../Actions'

export const exampleReducer = (state = null, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return state = '123';
    default:
      return state;
  };
};