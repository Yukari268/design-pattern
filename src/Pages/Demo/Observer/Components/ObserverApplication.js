import React, { useRef, useState } from "react";
import AlarmClock from "./AlarmClock";
import CountDownClock from "./CountDownClock";
import {alarmClock, countDownClock} from "../ObserverObject/Clocks"
import User from "../../Singleton/SingletonObject/User";


const ObserverApplication = () => {
  const [type, setType] = useState("countdown");
  const [clocks, setClocks] = useState([]);
  const hourRef = useRef("");
  const minuteRef = useRef("");
  const secondRef = useRef("");
  const dateRef = useRef("");
  const timeRef = useRef("");
  const countdownContentRef = useRef("");
  const alarmContentRef = useRef("");

  const AddClock = (e) => {
    if (type == "alarm") {
      if (dateRef.current.value && timeRef.current.value && alarmContentRef.current.value) 
      {  setClocks((prevClocks) => {
          const newAlarm = new alarmClock(dateRef.current.value, timeRef.current.value, type,alarmContentRef.current.value)
          newAlarm.subscribe(User.getUser());
          return [...prevClocks,newAlarm]
        })
      }
    } else if (type == "countdown") {
      if (hourRef.current.value  && minuteRef.current.value && secondRef.current.value && countdownContentRef.current.value)
      {setClocks((prevClocks) => {
        const newAlarm = new countDownClock(hourRef.current.value, minuteRef.current.value, secondRef.current.value, type, countdownContentRef.current.value);
        newAlarm.subscribe(User.getUser());
        return [...prevClocks,newAlarm ]
      } )
    }
    }
  };

  return (
    <div className="observer-application">
      <h2>Alarm Clocks</h2>
      <label htmlFor="type">Type</label>
      <select
        id="type"
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="countdown">Count Down</option>
        <option value="alarm">Alarm</option>
      </select>
      {type == "countdown" && (
        <div className="countdown-selection">
          <label htmlFor="hour">Hour</label>
          <input id="hour" name="hour" ref={hourRef}></input>
          <label htmlFor="minute">Minute</label>
          <input id="minute" name="minute" ref={minuteRef}></input>
          <label htmlFor="second">Second</label>
          <input id="second" name="second" ref={secondRef}></input>
          <label htmlFor="cd-content">Content</label>
          <input id="cd-content" name="cd-content" ref={countdownContentRef}></input>
        </div>
      )}
      {type == "alarm" && (
        <div className="alarm-selection">
          <label htmlFor="date">Date</label>
          <input id="date" type="date" name="date" ref={dateRef}></input>
          <label htmlFor="time">Time</label>
          <input id="time" type="time" name="time" ref={timeRef}></input>
          <label htmlFor="a-content">Time</label>
          <input id="a-content" type="text" name="a-content" ref={alarmContentRef}></input>
        </div>
      )}
      <div className="button-add" onClick={AddClock}>
        {" "}
        Add
      </div>
      {Array.from(clocks).map((element) => {
        if (element.type == "countdown"){
          return <CountDownClock clock={element}></CountDownClock>;
        }
        if (element.type == "alarm") 
          return <AlarmClock clock={element}></AlarmClock>;
      })}
    </div>
  );
};

export default ObserverApplication;
