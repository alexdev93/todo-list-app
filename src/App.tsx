// App.tsx
import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Todo from './types/Todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
  ]); 

  useEffect(() => {
    console.log("App.tsx - ", todos);
  },[todos])

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <AddTodo onAddTodo={handleAddTodo} />
    </div>
  );
};

export default App;
