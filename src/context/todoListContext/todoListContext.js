import { createContext,useContext,useState } from "react";
import uuid from 'react-uuid';


const todoListContext=createContext(null);


const TodoListContextProvider=({children})=>{
    const [todoTasks,setTodoTasks]=useState([]);

    const addTodoTasks=(inputText)=>{
        setTodoTasks([...todoTasks,{
            id:uuid(),
            title:inputText,
            completed:false
        }])
    }

    const deleteTodoTasks=taskToBeDeleted=>{
        const t=todoTasks.filter(task=>task.id!==taskToBeDeleted.id)
        setTodoTasks(t);
    }
    
return(
    <todoListContext.Provider value={{todoTasks,setTodoTasks,addTodoTasks,deleteTodoTasks}}>{children}</todoListContext.Provider>
)
}

const useTodoListContext=()=>useContext(todoListContext);

export {useTodoListContext,TodoListContextProvider};
