import "./todoList.css";
export const TodoList = () => {
  return (
    <div className="todo-task-list-container">
      <ul>
        <li className="todo-task-list">
          <p>Task 2</p>
          <span>
            <button className="edit-btn">
              <i className="far fa-edit"></i>
            </button>
            <button className="delete-btn">
              <i className="fas fa-trash-alt"></i>
            </button>
          </span>
        </li>

        <li className="todo-task-list">
          <p>Task 2</p>
          <span>
            <button className="edit-btn">
              <i className="far fa-edit"></i>
            </button>
            <button className="delete-btn">
              <i className="fas fa-trash-alt"></i>
            </button>
          </span>
        </li>

        <li className="todo-task-list">
          <p>Task 2</p>
          <span>
            <button className="edit-btn">
              <i className="far fa-edit"></i>
            </button>
            <button className="delete-btn">
              <i className="fas fa-trash-alt"></i>
            </button>
          </span>
        </li>

        <li className="todo-task-list">
          <p>Task 2</p>
          <span>
            <button className="edit-btn">
              <i className="far fa-edit"></i>
            </button>
            <button className="delete-btn">
              <i className="fas fa-trash-alt"></i>
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
};
