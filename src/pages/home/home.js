import React, { useState } from "react";
import "./home.css";
import { TodoList } from "../../components/todoList/todoList";
import { useTodoListContext } from "../../context/todoListContext/todoListContext";

export const Home = () => {
  const {addTodoTasks}=useTodoListContext();
  const [inputText,setInputText]=useState('');

  const addTaskHandler=()=>{
    addTodoTasks(inputText);
    setInputText('')
  }
  
  return (
    <>
      <div className="home-body-parent">
        <div className="home-body">
          <div className="home-body-heading">
            <h1>Welcome To pomodoro App</h1>
            <p>You have 4 tasks for today,all the best !!</p>
          </div>

          <div className="todo-container">
            <div className="todo-heading">
              <h2>To - Do List</h2>
              <div>
                <input
                  type="text"
                  className="input-add-task"
                  placeholder="add task here"
                  onChange={e=>setInputText(e.target.value)}
                  value={inputText}
                ></input>
                <button className="add-task-btn" onClick={addTaskHandler}>+</button>
              </div>
            </div>

            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
};
