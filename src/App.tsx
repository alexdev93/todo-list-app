import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Todo from './types/Todo';
import './App.css';

const App: React.FC = () => {

  
    const initialTodos: Todo[] = JSON.parse(localStorage.getItem('todos') ?? `[]`);
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

  const handleAddTodo = (name: string, description: string, category: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      name,
      description,
      completed: false,
      category,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggleComplete = (taskId: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== taskId));
  };

  return (
    <div className='container'>
      <div className="todo-app">
      <h2>Todo List</h2>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
        />
        </div>
        </div>
  );
};

export default App;
