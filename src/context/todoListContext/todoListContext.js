import { createContext,useContext,useState } from "react";
import uuid from 'react-uuid';


const todoListContext=createContext(null);


const TodoListContextProvider=({children})=>{
    const [todoTasks,setTodoTasks]=useState([]);
    const [isModalDisplay,setModalDisplay]=useState(false);
    const [inputModal,setInputModal]=useState({
        title:'',
        description:'',
        time:''
    });

    const addTodoTasks=(inputTaskData)=>{
        if(inputTaskData.title!=='' && inputTaskData.description!=='' && inputTaskData.time!==''){
            setTodoTasks(
                [...todoTasks,{
                    id:uuid(),
                    title:inputTaskData.title,
                    description:inputTaskData.description,
                    time:inputTaskData.time,
                    completed:false
                }]
            )
            setModalDisplay(false);
        }

      
    }

    const deleteTodoTasks=taskToBeDeleted=>{
        const t=todoTasks.filter(task=>task.id!==taskToBeDeleted.id)
        setTodoTasks(t);
    }
    
return(
    <todoListContext.Provider value={{todoTasks,setTodoTasks,addTodoTasks,deleteTodoTasks,isModalDisplay,setModalDisplay,inputModal,setInputModal}}>{children}</todoListContext.Provider>
)
}

const useTodoListContext=()=>useContext(todoListContext);

export {useTodoListContext,TodoListContextProvider};
