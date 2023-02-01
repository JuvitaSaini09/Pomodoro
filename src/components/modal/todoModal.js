import "./todoModal.css"

export const TodoModal=()=>{
    return(
        <div className="todoModal">
            <div className="todoInputs">
            <input type="text" placeholder="Add Title" className="addTitleInput" />
            <input type="text" placeholder="Add details" className="addDescriptionInput"  />
            <input type="number" placeholder="Add minutes" className="addTimeInput"  />
            </div>

            <div className="modalBtn" >
                <button className="cancelBtn">Cancel</button>
                <button className="addBtn">Add</button>
            </div>
        </div>
    )
}