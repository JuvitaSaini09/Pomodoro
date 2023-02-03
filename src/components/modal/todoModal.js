import { useTodoListContext } from "../../context/todoListContext/todoListContext";
import "./todoModal.css"

export const TodoModal=()=>{
    const {isModalDisplay,setModalDisplay,addTodoTasks,inputModal,setInputModal,editingOrAdding,editTodoTasks}=useTodoListContext();

    const addTaskHandler=()=>{
        addTodoTasks(inputModal);
      }



      const editTaskHandler=()=>{
        editTodoTasks(inputModal);
      }

      const addBtnHandler=()=>{
        if(editingOrAdding.isAddingOrEditing==="adding"){
            addTaskHandler()
        }
        if(editingOrAdding.isAddingOrEditing==="editing"){
            editTaskHandler()
        }
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

            <textarea type="text" placeholder="Add details" className="addDescriptionInput" onChange={e=>setInputModal({...inputModal,description:e.target.value})} value={inputModal.description} />

            <input type="number" placeholder="Add minutes from 1 to 60" className="addTimeInput" onChange={e=>setInputModal({...inputModal,time:e.target.value})} value={inputModal.time} min="1" max="60" />
            </div>

            <div className="modalBtn" >
                <button className="cancelBtn" onClick={()=>closeModalHandler()} >Cancel</button>
                <button className="addBtn" onClick={()=>{addBtnHandler()}} >Add</button>
            </div>
        </div>
    )
}