import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // state -> ye apan ko initialState ke andar jo bhi uska access deti hai. Like jo bhi current mei initialState ke paas value hogi wo usse access karne ka kaam karta hai.
      // action -> jab apne ko khudko kuch values chahiye toh vo values action ke paas se aayengi.

      const todo = {
        id: nanoid(), // or we can use Date.now()
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
  },
});


export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer