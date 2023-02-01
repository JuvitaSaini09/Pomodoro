import { createContext,useContext,useState } from "react";



const todoListContext=createContext(null);


const TodoListContextProvider=({children})=>{
    const [todoTasks,setTodoTasks]=useState([]);

    const addTodoTasks=(inputText)=>{
        setTodoTasks([...todoTasks,inputText])
    }

    const deleteTodoTasks=()=>{
        console.log("task deleted")
    }
    
return(
    <todoListContext.Provider value={{todoTasks,setTodoTasks,addTodoTasks,deleteTodoTasks}}>{children}</todoListContext.Provider>
)
}

const useTodoListContext=()=>useContext(todoListContext);

export {useTodoListContext,TodoListContextProvider};
