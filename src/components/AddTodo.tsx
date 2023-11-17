// AddTodo.tsx
import React, { useEffect, useState } from 'react';

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleAddTodo} className="mt-4">
      <label htmlFor="newTodo" className="mr-2">
        Add New Task:
      </label>
      <input
        type="text"
        id="newTodo"
        value={newTodo}
        onChange={handleInputChange}
        className="mr-2 p-2 border border-gray-400 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
