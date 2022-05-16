import React from "react";
import "./CountDownClock.css";

const CountDownClock = () => {
  return (
    <div className="clock">
      <div className="clock--time">
        <p>12:24</p>
      </div>
      <div className="clock--operation">
          <div className="button-setting">S</div>
          <div className="button-delete">X</div>
      </div>
      <div className="clock--name">Hap thit</div>
    </div>
  );
};

export default CountDownClock;
