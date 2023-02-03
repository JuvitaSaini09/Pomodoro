import "./timer.css";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";
import { useTodoListContext } from "../../context/todoListContext/todoListContext";

export const Timer = () => {
  const {id}=useParams();
  const {todoTasks}=useTodoListContext();
  //useState
  const currentUser=(todoTasks.filter(arr_obj=>arr_obj.id===id))[0];
  const [userTime, setUserTime] = useState(currentUser.time);
  const [isPaused, setIsPaused] = useState(true);
  const [min, setMin] = useState(userTime);
  const [sec, setSec] = useState(0);

  //functions
  const currentSeconds = min * 60 + sec;
  const totalSeconds = userTime * 60;
  const percentage = Math.trunc((currentSeconds / totalSeconds) * 100);
  const resetHandler = () => {
    setMin(userTime);
    setSec(0);
  };

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

  return (
    <main className="timerBody">
      <div className="timerCard">
        <section className="col1">
          <div className="timerContainer">
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={percentage}
                text={`${min < 10 ? `0` + min : min}m :${
                  sec < 10 ? `0` + sec : sec
                }s`}
                styles={buildStyles({
                  textSize: "16px",
                })}
              />
            </div>
            <div>
              {" "}
              {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}{" "}
            </div>
            <div className="timerBtns">
              <button onClick={resetHandler}>Reset</button>
              <button onClick={pauseHandler}>
                {isPaused ? "Resume" : "Pause"}
              </button>
            </div>
          </div>
        </section>

        <section className="col2">
          <h1>{currentUser.title}</h1>
          <p>{currentUser.description}</p>
          <p>Date when task added</p>
        </section>
      </div>
    </main>
  );
};
