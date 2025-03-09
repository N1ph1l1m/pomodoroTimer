import { RootState } from "../../Store/index";
import { useEffect, useState, useRef } from "react";
import styles from "../../App/Styles/Pomodoro.module.css";
import { Button } from "../../Shared/Button/Button";
import { IoSettingsSharp } from "react-icons/io5";
import { RiResetRightFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { TbPointFilled } from "react-icons/tb";
import { activePomodoro,activeShortBreak,activeLongBreak } from "../../Store/Slice/ButtonState/ButtonState";
import { showSetting } from "../../Store/Slice/SettingSlice/SettingSlice";

export const Pomodoro = () => {


    const  [pomodoroCount,setPomodoroCount] = useState(3)
    const intervalRef:React.RefObject<number|undefined>= useRef(undefined);

    const buttonState = useSelector((state:RootState)=>state.buttonState.buttonState)
    const {pomodoro, short, long } = useSelector((state:RootState)=>state.pomodoroTimer.timer)


    const [minutes, setMinutes] = useState(pomodoro.minutes);
    const [seconds, setSeconds] = useState(pomodoro.second);

    const [isTimer, setTimer] = useState(false);

    const dispatch = useDispatch();


    const pomodoroActive = () => dispatch(activePomodoro())
    const shortActive  = ()=> dispatch(activeShortBreak())
    const longActive = () => dispatch(activeLongBreak())
    const settingOn = () => dispatch(showSetting())


function toggleTimer():void{
        switch(buttonState){
            case "pomodoro":
               setMinutes(pomodoro.minutes);
               setSeconds(pomodoro.second);
            break;
            case "short":
                setMinutes(short.minutes);
                setSeconds(short.second);
            break;
            case "long":
                setMinutes(long.minutes);
                setSeconds(long.second);
            break;
            default:
                alert("Ошибка ButtonState null")
        }
    }

    useEffect(()=>{
      toggleTimer()
},[buttonState,pomodoro.minutes,short.minutes,long.minutes])

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
                    if(pomodoroCount < 4){
                        if(buttonState=== "pomodoro"){
                            shortActive()
                            setPomodoroCount((p) => p +1 )
                        }else if(buttonState === "short"){
                            pomodoroActive()
                        }else{
                            return false
                        }
                    }else if(pomodoroCount === 4){
                        longActive()
                        setMinutes(long.minutes);
                        setSeconds(long.second);
                        setPomodoroCount(pomodoroCount +1 )

                    }else{
                        pomodoroActive()
                        clearInterval(intervalRef.current);
                        setTimer(false)
                        setPomodoroCount(0)
                    }
                }
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
}, [isTimer, seconds, minutes]);


function reset() {
        setTimer(false);
        toggleTimer()
}


    return (
        <div className={styles.mainWrap}>
            <div className={styles.pomodoroContainerWrap}>
                <div className={styles.header}>

                    <div className={styles.countPomodoro}>
                    {Array.from({ length: 4 }).map((_, index) => (
                    <TbPointFilled
                    key={index}
                    size="30"
                    color={index < pomodoroCount ? "white" : "gray"}
                />
                ))}
                    </div>
                    <div>
                    <Button  active={ buttonState === "pomodoro"  ? true :false }  name="pomodoro"  onClick={()=>pomodoroActive()} />
                    <Button active={ buttonState === "short"  ? true :false } name="short break" onClick={()=>shortActive()} />
                    <Button active={ buttonState === "long"  ? true :false } name="long break"  onClick={()=>longActive()}/>
                    </div>

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
                        onClick={() => (!isTimer ? setTimer(true) :   setTimer(false) )}
                        style={{fontSize:"24px"}} />
                    <RiResetRightFill onClick={reset} style={{ cursor: "pointer" }} size="40" color="#ffffff" />
                    <IoSettingsSharp onClick={settingOn} style={{ cursor: "pointer" }} size="40" color="#ffffff" />
                </div>
            </div>
        </div>
    );
};
