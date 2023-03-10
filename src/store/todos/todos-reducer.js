import { ADD_TODO } from "./todos-constants";

export const todosReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return [...state, payload];
    }
    default: {
      return state;
    }
  }
};
