import React, { useState, useEffect } from "react";

export const Timer = ({ time }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = time;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  const [pause, setPause] = useState(false);
  const [text, setText] = useState("");

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      reset();
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () => {
    setText("Resetting Timer");
    setPause(false);
    setTimeout(() => {
      setText("");
      setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    }, 500);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      if(!pause) {
        setText('');
        tick();
      } else {
        setText('Timer Paused');
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });


  return (
    <div>
      <p onClick={() => {setPause(!pause)}} onDoubleClick={reset} style = {{color : text ? '#F2F013' : '#e9a6a6'}}>
        {!text
          ? `${hrs.toString().padStart(2, "0")}:${mins
              .toString()
              .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
          : text}{" "}
      </p>
    </div>
  );
};

export default Timer;
