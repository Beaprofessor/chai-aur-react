import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, setCurrentTodo } from '../features/todo/todoSlice';

function UpdateTodo() {
  const dispatch = useDispatch();
  const currentTodoId = useSelector((state) => state.currentTodoId);
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState('');

  useEffect(() => {
    const todo = todos.find((todo) => todo.id === currentTodoId);
    if (todo) {
      setInput(todo.text);
    }
  }, [currentTodoId, todos]);

  const updateTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: currentTodoId, text: input }));
    dispatch(setCurrentTodo(null)); // Clear the currentTodoId after updating
  };

  return currentTodoId ? (
    <form onSubmit={updateTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Update Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Update Todo
      </button>
    </form>
  ) : null; // Render nothing if no todo is selected for updating
}

export default UpdateTodo;
