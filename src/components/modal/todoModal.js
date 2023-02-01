import { useState } from "react";
import { useTodoListContext } from "../../context/todoListContext/todoListContext";
import "./todoModal.css"

export const TodoModal=()=>{
    const {isModalDisplay,setModalDisplay,addTodoTasks,inputModal,setInputModal}=useTodoListContext();

    const addTaskHandler=()=>{
        addTodoTasks(inputModal);
        setInputModal({
            title:'',
            description:'',
            time:''
        })
      }
    
  const closeModalHandler=()=>{
        setModalDisplay(false);
        setInputModal({
            title:'',
            description:'',
            time:''
        })
    }
    return(
        <div className="todoModal" style={isModalDisplay?{display:"block"}:{display:"none"}}>

            <button className="crossModalBtn" onClick={()=>closeModalHandler()}>
            <i className="fas fa-times"></i>
            </button>

            <div className="todoInputs">

            <input type="text" placeholder="Add Title" className="addTitleInput" onChange={e=>setInputModal({...inputModal,title:e.target.value})} value={inputModal.title} />

            <input type="text" placeholder="Add details" className="addDescriptionInput" onChange={e=>setInputModal({...inputModal,description:e.target.value})} value={inputModal.description} />

            <input type="number" placeholder="Add minutes" className="addTimeInput" onChange={e=>setInputModal({...inputModal,time:e.target.value})} value={inputModal.time} />
            </div>

            <div className="modalBtn" >
                <button className="cancelBtn" onClick={()=>closeModalHandler()} >Cancel</button>
                <button className="addBtn" onClick={()=>addTaskHandler()}>Add</button>
            </div>
        </div>
    )
}