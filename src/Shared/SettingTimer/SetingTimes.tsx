import styles from "../../App/Styles/SettingTimes.module.css"
import { InputNumber } from "../InpuNumber/InputNumber"

interface IStates {
    pomodoro: number;
    setPomodoro: (e: React.ChangeEvent<HTMLInputElement>) => void;
    short: number;
    setShort: (e: React.ChangeEvent<HTMLInputElement>) => void;
    long: number;
    setLong: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const  SetingTimer = ({pomodoro,setPomodoro , short,setShort , long, setLong}:IStates) =>{

    return(
        <div className={styles.mainWrap}>
            <InputNumber name="Pomodoro" value={pomodoro} onChange={setPomodoro}/>
            <InputNumber name="Short Break" value={short} onChange={setShort}/>
            <InputNumber name="Long Break" value={long} onChange={setLong}/>
        </div>
    )
}
