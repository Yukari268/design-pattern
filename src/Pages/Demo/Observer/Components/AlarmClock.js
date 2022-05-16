import React from 'react'
import "./AlarmClock.css"

const AlarmClock = () => {
    return (
        <div className="clock">
          <div className="clock--time">
            <div className='date'>12/4/2022</div>
            <div className='time'>12:24 AM</div>
          </div>
          <div className="clock--operation">
              <div className="button-setting">S</div>
              <div className="button-delete">X</div>
          </div>
          <div className="clock--name">Hap thit</div>
        </div>
      );
}

export default AlarmClock