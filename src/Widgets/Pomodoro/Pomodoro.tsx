import styles from "../../App/Styles/Pomodoro.module.css";
import { Button } from "../../Shared/Button/Button";
import { IoSettingsSharp } from "react-icons/io5";
import { RiResetRightFill } from "react-icons/ri";
export const Pomodoro = () =>{
    return(
    <>
    <div className={styles.mainWrap}>
        <div className={styles.pomodoroContainerWrap}>
            <div className={styles.header}>
            <Button active name="pomodoro"/>
            <Button name="short break"/>
            <Button name="long break"/>
            </div>
            <div className={styles.time}>
                <h1 className={styles.timer}>
                    11:11
                </h1>
            </div>
            <div className={styles.footer}>
            <Button  active name="start"/>
            <RiResetRightFill style={{cursor:"pointer"}} size="40" color="#ffffff" />
            <IoSettingsSharp  style={{cursor:"pointer"}} size="40" color="#ffffff"/>
         
            </div>
        </div>
     
    </div>
    </>
    )
}