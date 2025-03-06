import styles from "../../App/Styles/SettingTimes.module.css"
import { InputNumber } from "../../Shared/InpuNumber/InputNumber"
export const  SetingTimer = () =>{
    return(
        <div className={styles.mainWrap}>
            <InputNumber name="Pomodoro"/>
            <InputNumber name="Short Break"/>
            <InputNumber name="Long Break"/>
        </div>
    )
}
