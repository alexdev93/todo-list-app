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
      setCategory('');
      setError('');
    } else {
      setError('Please enter a task and select a category.');
    }
  };

  const categoryOptions = ['Work', 'Personal'];

  return (
    <div className="task-form">
                <input 
                type="text"
                placeholder="Task name" 
                id="name" 
                value={name}
      onChange={(e) => setName(e.target.value)}
                />

                <select
                id='category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categoryOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
                <input
                 type="text"
                 placeholder="New Task ..." 
                 id="task" 
                 value={description}
        onChange={(e) => setDescription(e.target.value)}
                 />
                <button id="addTask"
                onClick={handleAddTodo}
                disabled={!name.trim() || !description.trim() || !category.trim()} 
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </button>
            </div>
  )
};

export default AddTodo;
