export class alarmClock {
  constructor(date, time, type) {
    this.date = date;
    this.time = time;
    this.type = type;
  }

  subscribers = [];

  subscribe = (s) => {
    this.subscribers.add(s);
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
    if (
      currentDate.getDate() == this.date &&
      currentDate.getHours() == this.time.hours &&
      currentDate.getMinutes() == this.time.minutes
    ) {
        return true;
    }

    return false;   
  };

  alarm = () => {
    if (this.isDue()) {
      this.notifySubscribe();
    }
  };
}

export class countDownClock {
  constructor(hour, minute, second, type) {
    const MINUTE_TO_SECOND = 60;
    const HOUR_TO_SECOND = 3600;
    const totalTime =
      hour * HOUR_TO_SECOND + minute * MINUTE_TO_SECOND + second;
    this.totalSecond = totalTime % MINUTE_TO_SECOND;
    this.totalMinute =
      (totalTime - (totalTime % MINUTE_TO_SECOND)) / MINUTE_TO_SECOND;
    this.type = type;
  }

  subscribers = [];

  subscribe = (s) => {
    this.subscribers.add(s);
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
    if (this.totalMinute == 0 && this.totalSecond == 0) {
      return true;
    }
    return false;
  };

  alarm = () => {
    if (this.isDue()) {
      this.notifySubscribe();
    }
  };
}

