import styles from "../../App/Styles/MainPage.module.css"
import { Pomodoro } from "../../Widgets/Pomodoro/Pomodoro"
import wallpaper from "../../App/Images/696808930.jpg"
import wallpaper2 from "../../App/Images/88399139.jpg";
export const MainPage = () =>{
    return(
        <>
        <div className={styles.mainWrap}
            style={{backgroundImage:`url(${wallpaper2})`}}>
            <Pomodoro/>
        </div>
         </>
        )
}
