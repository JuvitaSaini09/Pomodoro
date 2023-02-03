import "./timer.css";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavLink, useParams } from "react-router-dom";
import { useTodoListContext } from "../../context/todoListContext/todoListContext";

export const Timer = () => {
  const {id}=useParams();
  const {todoTasks,setTodoTasks}=useTodoListContext();

  //useState
  const currentUser=(todoTasks.filter(arr_obj=>arr_obj.id===id))[0];
  const userTime=currentUser.time;
  const [isPaused, setIsPaused] = useState(true);
  const [min, setMin] = useState(userTime);
  const [sec, setSec] = useState(0);
const [isTimerStarted,setIsTimerStarted]=useState(false);
let isTimecompleted=(false);

  //functions
  const currentSeconds = min * 60 + sec;
  const totalSeconds = userTime * 60;
  const percentage = Math.trunc((currentSeconds / totalSeconds) * 100);

  const resetHandler = () => {
    setMin(userTime);
    setSec(0);
    setIsTimerStarted(false);
    setIsPaused(true);
  };

  const timerStartHandler=()=>{
    setIsTimerStarted(true);
    setIsPaused(false);
    
  }
  const pauseHandler = () => {
    setIsPaused((prev) => !prev);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (sec === 0 && min > 0) {
          setMin((prev) => prev - 1);
          setSec(59);
        }
        if (sec > 0) {
          setSec((prev) => prev - 1);
        }
      }, 1000);
     
      return () => clearInterval(interval);
    }
  });


    if(min ===0 && sec===0){
    isTimecompleted=true;
  }

  
    useEffect(()=>{
      const todoCompleted=()=>{
        if(isTimecompleted){
          const result=todoTasks.map((object) => {
            if (object.id === currentUser.id)
              return {
                 ...object,
                completed:true,
              };
            else return object;
          })
        setTodoTasks(result);
        }
      };
      todoCompleted();
     
    },[isTimecompleted,currentUser.id,setTodoTasks])
     


 

  return (
    <main className="timerBody">
      <div className="timerCard">
        <section className="col1">
          <div className="timerContainer">
            <div style={{ width: 200, height: 200 }} className="progressBarContainer">
              <CircularProgressbar
                value={percentage}
                text={`${min < 10 ? `0` + min : min}m :${
                  sec < 10 ? `0` + sec : sec
                }s`}
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: `rgba(67, 95, 219`,
                  textColor: `rgba(67, 95, 219`,
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}
              />
              <p className="outOfMin">out of {userTime} min</p>
            </div>
           
            <div className="timerBtns">
             
           
              
                {isPaused ?(isTimerStarted
                  ? <button onClick={pauseHandler} className="pauseResumeBtn" > <i className="fas fa-play"></i>  Resume</button>
                  :<button onClick={timerStartHandler} className="startBtn"><i className="fas fa-play"></i> Start</button> 
                  ): <button onClick={pauseHandler} className="pauseResumeBtn" ><i className="fas fa-pause"></i> Pause</button>} 

<button onClick={resetHandler} className="resetStartBtn" >Reset</button>
              
            </div>
            <NavLink to="/" className="goToHome"><i className="fas fa-arrow-alt-circle-left"></i> Go to Home</NavLink>
          </div>
        </section>

        <section className="col2">
          <div className="task-details">
          <h1>{currentUser.title}</h1>
          <p>{currentUser.description}</p>
          </div>
          
        </section>
       
      </div>
    </main>
  );
};
