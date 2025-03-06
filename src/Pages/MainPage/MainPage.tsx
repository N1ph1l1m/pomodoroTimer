import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import styles from "../../App/Styles/MainPage.module.css"
import { Pomodoro } from "../../Widgets/Pomodoro/Pomodoro"
import { SettingModal } from "../../Widgets/SettingModal/SettingModal";
import wallpaper from "../../App/Images/696808930.jpg"
import wallpaper2 from "../../App/Images/88399139.jpg";

export const MainPage = () =>{

    const isSetting  = useSelector((state:RootState)=>state.settingSlice.setting.isSetting)
    return(
        <>
        <div className={styles.mainWrap}
            style={{backgroundImage:`url(${wallpaper2})`}}>
            <Pomodoro/>
            {isSetting ? <SettingModal/>: null}
        </div>
         </>
        )
}
