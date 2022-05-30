import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AlarmCodeExplain = () => {
  return (
    <div className="code-explain-section">
      <h1 id="explain">Code Explain</h1>

      <p>Đầu tiên chúng ta sẽ nói về mẫu Singleton</p>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`class Subscriber{
    update(){}
}

export default class User extends Subscriber{ 
    static instance = null;

    constructor(){
        super();
    }

    static getUser(){
        if (this.instance == null){
            this.instance = {
                update: () => {
                    this.instance.audio.src = require("../../../../Ulitities/Assets/Sound/alarm_clock.mp3")
                    this.instance.audio.play()
                },
                audio: document.createElement("AUDIO")
            };
            return this.instance;
        }
        return this.instance;
    }

    static update(){
        this.instance.audio.src = require("../../../../Ulitities/Assets/Sound/alarm_clock.mp3")
        this.instance.audio.play()
    }
}`}
      </SyntaxHighlighter>

      <p>Tiếp đến chúng ta sẽ nói đến mẫu Observer và TemplateMethod</p>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`class clockTemplate {
  isDue(){};
}


export class alarmClock extends clockTemplate {
  constructor(date, time, type, title) {
    super();
    this.date = date;
    this.time = time;
    this.type = type;
    this.title = title;
  }

  subscribers = [];

  subscribe = (s) => {
    this.subscribers.push(s);
  };

  unsubscribe = (s) => {
    this.subscribers.remove(s);
  };

  notifySubscribe = () => {
    this.subscribers.forEach((element) => {
      element.update();
    });
  };

  isDue = () => {
    const currentDate = new Date();
    console.log(this.date);
    console.log(this.time.hours);
    console.log(this.time.minutes);
    if (
      currentDate.getDate() === this.date &&
      currentDate.getHours() === this.time.hours &&
      currentDate.getMinutes() === this.time.minutes
    ) {
        return true;
    }

    return false;   
  };

  alarm = () => {
    console.log("run")
    if (this.isDue()) {
      this.notifySubscribe();
    }
  };
}

export class countDownClock extends clockTemplate {
  constructor(hour, minute, second, type, title) {
    super();
    const MINUTE_TO_SECOND = 60;
    const HOUR_TO_SECOND = 3600;
    const totalTime =
      hour * HOUR_TO_SECOND + minute * MINUTE_TO_SECOND + second;
    this.totalSecond = totalTime % MINUTE_TO_SECOND;
    this.totalMinute =
      (totalTime - (totalTime % MINUTE_TO_SECOND)) / MINUTE_TO_SECOND;
    this.type = type;
    this.title = title;
    this.subscribers = [];
  }


  subscribe = (s) => {
    this.subscribers.push(s);
  };

  unsubscribe = (s) => {
    this.subscribers= this.subscribers.filter(item => item !== s);
  };

  notifySubscribe = () => {
    this.subscribers.forEach((element) => {
      element.update();
    });
  };

  isDue = () => {
    if (this.totalMinute === 0 && this.totalSecond === 0) {
      return true;
    }
    return false;
  };

  alarm = () => {
    if (this.isDue()) {
      console.log(this.subscribers)
      this.notifySubscribe();
    }
  };
}

`}
      </SyntaxHighlighter>

      <p>Cuối cùng chúng ta sẽ nói đến mẫu Mediator</p>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`
        `}
      </SyntaxHighlighter>
    </div>
  );
};

export default AlarmCodeExplain;
