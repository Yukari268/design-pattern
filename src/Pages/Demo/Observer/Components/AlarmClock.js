import React, { useEffect } from 'react'
import "./AlarmClock.css"

const AlarmClock = (props) => {

    useEffect(() => {
      let timeId = setInterval(() => {props.clock.alarm()},1000);
      return clearInterval(timeId);
    },[])
    return (
        <div className="clock">
          <div className="clock--time">
            <div className='date'>{props.clock.date}</div>
            <div className='time'>{props.clock.time}</div>
          </div>
          <div className="clock--operation">
              <div className="button-setting">S</div>
              <div className="button-delete">X</div>
          </div>
          <div className="clock--name">{props.clock.title}</div>
        </div>
      );
}

export default AlarmClock