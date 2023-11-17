import React, { useEffect } from 'react';
import Todo from '../types/Todo';

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDeleteTask }) => {
  useEffect(() => {
    // You can perform any additional logic here if needed
  }, [todos]);

  const handleToggleComplete = (taskId: number) => {
    onToggleComplete(taskId);
  };

  const handleDeleteTask = (taskId: number) => {
    onDeleteTask(taskId);
  };

  return (
    <div>
      {todos.map((task) => (
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
            {task.text} - Category: {task.category}
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
