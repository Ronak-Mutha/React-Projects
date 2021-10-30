import React, { useState, useEffect } from 'react'

export const Timer = ({time}) => {

            const {hours = 0, minutes = 0, seconds = 60} = time;
            const [[hrs,mins,secs], setTime] = useState([hours, minutes, seconds]);
            const [text, setText] = useState('')

            const tick = () => {
                if(hrs === 0 && mins === 0 && secs === 0) {
                    reset();
                } else if(mins === 0 && secs === 0) {
                    setTime([hrs-1,59,59]);
                } else if(secs === 0) {
                    setTime([hrs, mins - 1, 59]);
                } else {
                    setTime([hrs, mins, secs - 1]);
                }
            };

            const reset = () => {
                setText('Times Up');
                setTimeout(() => {
                    setText('');
                    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
                }, 1000);
            };

            useEffect(() => {
                const timerId = setInterval(() => tick(), 1000);
                return () => {
                    clearInterval(timerId);
                }
            });

            return (
                <div>
                    <p>{!text ? `${hrs.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}` : text} </p>
                </div>
            )
}

export default Timer;
