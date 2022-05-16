import React, { useRef, useState } from "react";
import AlarmClock from "./AlarmClock";
import CountDownClock from "./CountDownClock";
import {alarmClock, countDownClock} from "../ObserverObject/Clocks"

const ObserverApplication = () => {
  const [type, setType] = useState("countdown");
  const [clocks, setClocks] = useState([]);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const AddClock = (e) => {
    console.log(clocks);
    if (type == "alarm") {
      setClocks((prevClocks) => {
        return [...prevClocks,new alarmClock(dateRef.current.value, timeRef.current.value, type)]
      })
    } else if (type == "countdown") {
      setClocks((prevClocks) => {
        return [...prevClocks, new countDownClock(hourRef.current.value, minuteRef.current.value, secondRef.current.value, type)]
      } )
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
        </div>
      )}
      {type == "alarm" && (
        <div className="alarm-selection">
          <label htmlFor="date">Date</label>
          <input id="date" type="date" name="date" ref={dateRef}></input>
          <label htmlFor="time">Time</label>
          <input id="time" type="time" name="time" ref={timeRef}></input>
        </div>
      )}
      <div className="button-add" onClick={AddClock}>
        {" "}
        Add
      </div>
      {Array.from(clocks).map((element) => {
        if (element.type == "countdown"){
          return <CountDownClock></CountDownClock>;
        }
        if (element.type == "alarm") 
          return <AlarmClock></AlarmClock>;
      })}
    </div>
  );
};

export default ObserverApplication;
