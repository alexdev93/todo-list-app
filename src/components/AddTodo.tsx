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
      setName('');
      setDescription('');
      setCategory('Work');
      setError('');
    } else {
      setError('Please enter a task and select a category.');
    }
  };

  const categoryOptions = ['Work', 'Personal'];

  return (
    <div className="add-todo">
   
      <input type="text" 
      id='task-name'
      placeholder="Task name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <input
      type='text'
        placeholder="New task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="row"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="add-catagory"
      >
        {categoryOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
          
      </select>
      <button
        onClick={handleAddTodo}
        className="btn"
        disabled={!name.trim() || !description.trim() || !category.trim()} 
        >
        +
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
  );
};

export default AddTodo;
