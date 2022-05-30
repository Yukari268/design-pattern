import React, { useEffect, useState } from "react";
import "./CountDownClock.css";

const CountDownClock = (props) => {
  const [time,setTime] = useState({
    minute: props.clock.totalMinute,
    second: props.clock.totalSecond
  })
  useEffect(()=>{
    let timeId = setInterval(() => {
      setTime((prevTime) => {
        if (parseInt(prevTime.second) > 0){
          props.clock.totalSecond--;
          return {
            ...prevTime,
            second: String(parseInt(prevTime.second) - 1)
          }
        }
        else if (parseInt(prevTime.minute) > 0){
          props.clock.totalMinute--;
          props.clock.totalSecond = 60;
          return {
            ...prevTime,
            minute: String(parseInt(prevTime.minute) - 1),
            second: String(60)
          }
        }
        else{
          props.clock.alarm();
          clearInterval(timeId)
          return{
            ...prevTime
          }
        }
      })
    }, 1000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <div className="clock">
      <div className="clock--time">
        <p>{`${time.minute}:${time.second}`}</p>
      </div>
      <div className="clock--name">{props.clock.title}</div>
    </div>
  );
};

export default CountDownClock;
