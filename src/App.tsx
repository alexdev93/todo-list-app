import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Todo from './types/Todo';
import './App.css';

const App: React.FC = () => {

    const initialid = parseInt(JSON.parse(localStorage.getItem("id") ?? "1"));
    const initialTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") ?? "[]"
    );
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    let [id, setId] = useState(initialid);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
      localStorage.setItem("id", JSON.stringify(id));
    }, [todos, id]);

    const handleAddTodo = (
      name: string,
      description: string,
      category: string
    ) => {
      const newTodo: Todo = {
        id: id,
        name,
        description,
        completed: false,
        category,
      };
      setId((id) => id + 1);
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
        <div>
      <h2>Todo List</h2>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
        />
        </div>
        </div>
        </div>
  );
};

export default App;
