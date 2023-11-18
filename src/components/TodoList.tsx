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
    <>
<h3>Task List</h3>
<div className='task-list'>
{todos.map(task => (
  <div className='tasks' key={task.id}>
    <input className='check' type="checkbox" checked={task.completed} onClick={() => handleToggleComplete(task.id)} readOnly />
    <div className='task-info'>
    <p className={task.completed ? 'completed' : ''}>{task.name} : {task.category}</p>
    <p>{task.description}</p>
    </div>
   <div className='del-btn'>
    <span onClick={() => handleDeleteTask(task.id)}>X</span>
    </div> 
  </div>
  ))}
</div>
</>    
  );
};

export default TodoList;
