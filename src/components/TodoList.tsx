import Todo from "../types/Todo";

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleComplete,
  onDeleteTask,
}) => {
  const handleToggleComplete = (taskId: number) => {
    onToggleComplete(taskId);
  };

  const handleDeleteTask = (taskId: number) => {
    onDeleteTask(taskId);
  };

  return (
    <>
      <h3>Task List</h3>
      <div className="lists">
        {todos.map((task) => (
          <div className="task-list" key={task.id}>
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onClick={() => handleToggleComplete(task.id)}
                readOnly
              />
            </div>
            <div className="task-info">
              <h4 className={task.completed ? "completed" : ""}>
                {task.name} : {task.category}
              </h4>
              <p className={task.completed ? "completed" : ""}>
                {task.description}
              </p>
            </div>
            <button
              type="submit"
              className="del-btn"
              onClick={() => handleDeleteTask(task.id)}
            >
              <div>&times;</div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
