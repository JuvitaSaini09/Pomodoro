import { useTodoListContext } from "../../context/todoListContext/todoListContext";
import "./todoList.css";
import { NavLink } from "react-router-dom";

export const TodoList = () => {
  const { todoTasks, deleteTodoTasks, setInputModal, setEditingOrAdding } =
    useTodoListContext();
  const { setModalDisplay, } = useTodoListContext();

  const deleteTaskHandler = (task) => {
    deleteTodoTasks(task);
  };

  const editTaskHandler = (task) => {
    setInputModal({
      title: task.title,
      description: task.description,
      time: task.time,
    });
    setEditingOrAdding({
      isAddingOrEditing: "editing",
      task: task,
    });
    setModalDisplay(true);
  };

  return (
    <div className="todo-task-list-container">
      <ul>
        {todoTasks.map((task) => {
          return (
            <li className="todo-task-list" key={task.id}>
              <NavLink className="navlinkTodo" to={`/timer/${task.id}`}><p>{task.title}</p></NavLink>
              <span>
                <button
                  className="edit-btn"
                  onClick={() => editTaskHandler(task)}
                >
                  <i className="far fa-edit"></i>
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTaskHandler(task)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
