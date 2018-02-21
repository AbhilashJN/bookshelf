const defaultState = { books: {} };
const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'POPULATE_STORE': {
      return {
        ...prevState, books: action.payload,
      };
    }
    default: {
      return prevState;
    }
  }
};


export default reducer;
