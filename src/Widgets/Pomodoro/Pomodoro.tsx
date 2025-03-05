import { useEffect, useState, useRef } from "react";
import styles from "../../App/Styles/Pomodoro.module.css";
import { Button } from "../../Shared/Button/Button";
import { IoSettingsSharp } from "react-icons/io5";
import { RiResetRightFill } from "react-icons/ri";

export const Pomodoro = () => {
    const timer  = {
        min: 5,
        sec:0
    }

    const [seconds, setSeconds] = useState(timer.sec);
    const [minutes, setMinutes] = useState(timer.min);
    const [isTimer, setTimer] = useState(false);
    const intervalRef:React.RefObject<number|undefined>= useRef(undefined);

    useEffect(() => {
        if (isTimer) {
            intervalRef.current = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {
                        return 59;
                    }
                    return prevSeconds - 1;
                });

                setMinutes((prevMinutes) => {
                    if (seconds === 0 && prevMinutes > 0) {
                        return prevMinutes - 1;
                    }
                    return prevMinutes;
                });
                if(minutes===0 && seconds === 0 ){
                    clearInterval(intervalRef.current);
                    setTimer(false)
                    setMinutes(timer.min);
                    setSeconds(timer.sec)
                }
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isTimer, seconds, minutes]);

    function start() {
        setTimer(true);
    }

    function stop() {
        setTimer(false);
    }

    function reset() {
        setTimer(false);
        setMinutes(timer.min);
        setSeconds(timer.sec)
    }

    return (
        <div className={styles.mainWrap}>
            <div className={styles.pomodoroContainerWrap}>
                <div className={styles.header}>
                    <Button active name="pomodoro" />
                    <Button name="short break" />
                    <Button name="long break" />
                </div>
                <div className={styles.time}>
                    <h1 className={styles.timer}>
                        {minutes < 10 ? "0" + minutes : minutes}:
                        {seconds === 60 ||  seconds === 0   ? "00" : seconds && seconds < 10   ? "0" + seconds : seconds}
                    </h1>
                </div>
                <div className={styles.footer}>
                    <Button active
                        name={!isTimer ? "start" : "stop"}
                        onClick={() => (!isTimer ? start() : stop())}
                        style={{fontSize:"24px"}} />
                    <RiResetRightFill onClick={reset} style={{ cursor: "pointer" }} size="40" color="#ffffff" />
                    <IoSettingsSharp style={{ cursor: "pointer" }} size="40" color="#ffffff" />
                </div>
            </div>
        </div>
    );
};
