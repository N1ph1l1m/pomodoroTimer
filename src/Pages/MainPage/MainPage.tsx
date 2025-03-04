import styles from "../../App/Styles/MainPage.module.css"
import { Pomodoro } from "../../Widgets/Pomodoro/Pomodoro"
import wallpeer1 from "../../App/Images/696808930.jpg"
export const MainPage = () =>{
    return(
        <>
        <div className={styles.mainWrap}
            style={{backgroundImage:`url(${wallpeer1})`}}>
            <Pomodoro/>
        </div>
         </>
        )
}