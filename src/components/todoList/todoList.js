import { useTodoListContext } from "../../context/todoListContext/todoListContext";
import "./todoList.css";

export const TodoList = () => {
  const {todoTasks,deleteTodoTasks}=useTodoListContext();

  const deleteTaskHandler=task=>{
    deleteTodoTasks(task);
  }
  
    return (
    <div className="todo-task-list-container">
      <ul>
        {
          todoTasks.map(task=>{
            return(
              <li className="todo-task-list" key={task.id}>
          <p>{task.title}</p>
          <span>
            <button className="edit-btn">
              <i className="far fa-edit"></i>
            </button>
            <button className="delete-btn"  onClick={()=>deleteTaskHandler(task)} >
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
