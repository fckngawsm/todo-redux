import { ADD_TODO } from "./todos-constants";

export const todosReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: Date.now(),
          title: payload,
          completed: false,
        },
      ];
    }
    default: {
      return state;
    }
  }
};
