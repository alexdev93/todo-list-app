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
<strong>Task List</strong>
<ol>
{todos.map(task => (
  <li className='tasks' key={task.id}>
    <input className='check' type="checkbox" checked={task.completed} onClick={() => handleToggleComplete(task.id)} readOnly />
    <div className='task-info'>
    <p>{task.name} : {task.category}</p>
    <p>{task.description}</p>
    </div>
   <div className='del-btn'>
    <span onClick={() => handleDeleteTask(task.id)}>X</span>
    </div> 
  </li>
  ))}
</ol>
</>    
  );
};

export default TodoList;



//   <div className='olcards'>
//       {todos.map((task) => (
//    <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
//     <div className="content">
//       <h3 className="title">{task.name}</h3>
//       <p className="description">{task.description}</p>
//       <div className="task-meta">
//       <p>Category: {task.category}</p>
//         <input type="checkbox" checked={task.completed} onClick={() => handleToggleComplete(task.id)} readOnly />
//         <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
//       </div>
//       <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//     </div>
//   </div>
// ))}

//     </div>