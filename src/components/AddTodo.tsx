import React, { useState } from 'react';

interface AddTodoProps {
  onAddTodo: (name: string, description: string, category: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Work');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (description.trim() !== '' && category.trim() !== '') {
      onAddTodo(name ,description, category);
      setDescription('');
      setCategory('Work');
      setError('');
    } else {
      setError('Please enter a task and select a category.');
    }
  };

  const categoryOptions = ['Work', 'Personal'];

  return (
    <div className="mt-4">
      <input type="text" 
      placeholder="Task name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="mr-2 p-2 border border-gray-400"
      />
      <input
        type="text"
        placeholder="New task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mr-2 p-2 border border-gray-400"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mr-2 p-2 border border-gray-400"
      >
        {categoryOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        onClick={handleAddTodo}
        className="p-2 bg-blue-500 text-white rounded"
        disabled={!name.trim() || !description.trim() || !category.trim()} 
      >
        Add Task
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AddTodo;
