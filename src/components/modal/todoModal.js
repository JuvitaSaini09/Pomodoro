import "./todoModal.css"

export const TodoModal=()=>{
    return(
        <div className="todoModal">
            <div className="todoInputs">
            <input type="text" placeholder="Add Title" className="addTitleInput" />
            <input type="text" placeholder="Add details" className="addDescriptionInput"  />
            <input type="number" placeholder="Add minutes" className="addTimeInput"  />
            </div>
        </div>
    )
}