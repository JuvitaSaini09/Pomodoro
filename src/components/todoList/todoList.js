import { useTodoListContext } from "../../context/todoListContext/todoListContext";
import "./todoList.css";

export const TodoList = () => {
  const {todoTasks}=useTodoListContext();
  
    return (
    <div className="todo-task-list-container">
      <ul>
        {
          todoTasks.map(task=>{
            return(
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
            )
          })
        }

      </ul>
    </div>
  );
};
