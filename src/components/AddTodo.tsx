// components/AddTodo.tsx
import React, { useState } from 'react';

interface AddTodoProps {
  onAddTodo: (text: string, category: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Work');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '' && category.trim() !== '') {
      onAddTodo(text, category);
      setText('');
      setCategory('Work');
      setError(''); // Clear any previous errors
    } else {
      setError('Please enter a task and select a category.');
    }
  };

  const categoryOptions = ['Work', 'Personal'];

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="New task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
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
        disabled={!text.trim() || !category.trim()} // Disable button if text or category is empty
      >
        Add Task
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AddTodo;
