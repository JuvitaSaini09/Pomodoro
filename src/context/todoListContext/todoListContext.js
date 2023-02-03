import { createContext, useContext, useState } from "react";
import uuid from "react-uuid";

const todoListContext = createContext(null);

const TodoListContextProvider = ({ children }) => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [isModalDisplay, setModalDisplay] = useState(false);
  const [inputModal, setInputModal] = useState({
    title: "",
    description: "",
    time: "",
  });

  const [editingOrAdding, setEditingOrAdding] = useState({
    isAddingOrEditing: "",
    task: "",
  });

  const addTodoTasks = (inputTaskData) => {
    if (
      inputTaskData.title !== "" &&
      inputTaskData.description !== "" &&
      inputTaskData.time !== ""
    ) {
      setTodoTasks([
        ...todoTasks,
        {
          id: uuid(),
          title: inputTaskData.title,
          description: inputTaskData.description,
          time: inputTaskData.time,
          completed: false,
        },
      ]);
      setModalDisplay(false);
      setInputModal({
        title: "",
        description: "",
        time: "",
      });
    }
  };

  const editTodoTasks = (inputEditedTaskData) => {
    if (
      inputEditedTaskData.title !== "" &&
      inputEditedTaskData.description !== "" &&
      inputEditedTaskData.time !== ""
    ) {
      
        const result=todoTasks.map((object) => {
          if (object.id === editingOrAdding.task.id)
            return {
                id:object.id,
              title: inputEditedTaskData.title,
              description: inputEditedTaskData.description,
              time: inputEditedTaskData.time,
              completed:object.completed,
            };
          else return object;
        })
      

      setTodoTasks(result);
      setModalDisplay(false);
      setInputModal({
        title: "",
        description: "",
        time: "",
      });
    }
  };

  const deleteTodoTasks = (taskToBeDeleted) => {
    const afterDeletionTodos = todoTasks.filter(
      (task) => task.id !== taskToBeDeleted.id
    );
    setTodoTasks(afterDeletionTodos);
  };

 

  return (
    <todoListContext.Provider
      value={{
        todoTasks,
        setTodoTasks,
        addTodoTasks,
        deleteTodoTasks,
        isModalDisplay,
        setModalDisplay,
        inputModal,
        setInputModal,
        editingOrAdding,
        setEditingOrAdding,
        editTodoTasks,
      }}
    >
      {children}
    </todoListContext.Provider>
  );
};

const useTodoListContext = () => useContext(todoListContext);

export { useTodoListContext, TodoListContextProvider };
