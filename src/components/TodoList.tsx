import Todo from '../types/Todo';

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDeleteTask }) => {
 
  const handleToggleComplete = (taskId: number) => {
    onToggleComplete(taskId);
  };

  const handleDeleteTask = (taskId: number) => {
    onDeleteTask(taskId);
  };

  return (
    <div>
      <h2>Task List</h2>
      {todos.map((task) => (
        <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
          <input type="checkbox" checked={task.completed} onClick={()=>handleToggleComplete(task.id)} readOnly />
          <div className="task-details">
            <h3 className="task-name">{task.name}</h3>
            <p className="task-description">{task.description}</p>
            <div className="task-meta">
              <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
            </div>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
