import { ADD_TODO, REMOVE_TODO } from "./todos-constants";

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
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== payload);
    }
    default: {
      return state;
    }
  }
};
