import React, { useEffect, useState } from 'react';
import Todo from '../types/Todo';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [tasks, setTasks] = useState<Todo[]>(todos);
  
  useEffect(() => {
    if(tasks[tasks.length-1].id !== todos[todos.length-1].id){
        if (tasks.length < todos.length) {
            setTasks((prevTasks) => {
                const updatedTasks = [...prevTasks, todos[todos.length - 1]];
                return updatedTasks;
            });
        }
    }
  }, [todos, tasks]);
  
  
const handleToggleComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };


  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleComplete(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              marginLeft: '8px',
            }}
          >
            {task.text}
          </span>
          <button
            className="ml-2 p-1 text-red-500 bg-transparent border border-solid border-red-500 rounded"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
