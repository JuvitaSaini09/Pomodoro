import { useTodoListContext } from "../../context/todoListContext/todoListContext";
import "./todoModal.css"

export const TodoModal=()=>{
    const {isModalDisplay,setModalDisplay}=useTodoListContext();
    return(
        <div className="todoModal" style={isModalDisplay?{display:"block"}:{display:"none"}}>
            <div className="todoInputs">
            <input type="text" placeholder="Add Title" className="addTitleInput" />
            <input type="text" placeholder="Add details" className="addDescriptionInput"  />
            <input type="number" placeholder="Add minutes" className="addTimeInput"  />
            </div>

            <div className="modalBtn" >
                <button className="cancelBtn" onClick={()=>setModalDisplay(false)} >Cancel</button>
                <button className="addBtn">Add</button>
            </div>
        </div>
    )
}