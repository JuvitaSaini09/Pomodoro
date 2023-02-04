import React from "react";
import "./home.css";
import { TodoList } from "../../components/todoList/todoList";
import { useTodoListContext } from "../../context/todoListContext/todoListContext";
import { TodoModal } from "../../components/modal/todoModal";

export const Home = () => {
  const {isModalDisplay,setModalDisplay,setEditingOrAdding,todoTasks}=useTodoListContext();
  
  return (
    <>
      <div className="home-body-parent">
        <div className="home-body">
          <div className={`home-body-heading ${isModalDisplay?`backgroundStop`:``}`}>
            <h1>Welcome To pomodoro App</h1>
            <p>You have {todoTasks.length} tasks for today,all the best !!</p>
          </div>

          <div className={`todo-container ${isModalDisplay?`backgroundStop`:``}`}>
            <div className="todo-heading">
              {
                todoTasks.length!==0 
                ? <h2>To - Do List</h2>
                : null
              }
              <div>
    
                
                  {
                    todoTasks.length!==0
                    ?<button  className="add-task-btn" onClick={()=>{
                      setModalDisplay(true);
                      setEditingOrAdding({
                        isAddingOrEditing:'adding',
                        task:''
                     });
                      }}>+</button>
                    : null
                  }
              </div>
            </div>
            {
              todoTasks.length===0
              ? (<div>
                <h2 className="addTasksHere">Add Tasks Here</h2>
                <button style={{height:3+"rem",width:3+"rem",fontSize:2.5+"rem",marginBottom:4+"rem"}} className="add-task-btn" onClick={()=>{
                  setModalDisplay(true);
                  setEditingOrAdding({
                    isAddingOrEditing:'adding',
                    task:''
                 });
                  }}>+</button>
                </div>)
              
              : null
            }

            <TodoList />
           </div>
         <div className="todoModalContainer">
         <TodoModal />
         </div>
        </div>
        
      </div>
    </>
  );
};
