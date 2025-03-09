import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../Store";
import styles from "../../App/Styles/MainPage.module.css"
import { Pomodoro } from "../../Widgets/Pomodoro/Pomodoro"
import { SettingModal } from "../../Widgets/SettingModal/SettingModal";
import city from "../../App/Images/background/dinamic/city/2.mp4"
import { useEffect } from "react";

export const MainPage = () =>{
    
    const isSetting  = useSelector((state:RootState)=>state.settingSlice.setting.isSetting)
    const {type,url} = useSelector((state:RootState)=>state.backgroundApp.background)

  
    function renderBackground() {
        if (type === "static") {
          return <img src={url} className={styles.backgroundApp} alt={`${type}-img-${url}`} />;
        }
        if (type === "dinamic") {
          return (
            <video key={url} className={styles.backgroundApp} autoPlay muted loop>
              <source src={url} type="video/mp4" />
            </video>
          );
        }
        return null;
      }



    return(
        <>
        <div className={styles.mainWrap}
            style={{backgroundImage:`url(${city})`}}
            >
            {renderBackground()}
            <Pomodoro/>
            {isSetting ? <SettingModal/>: null}
        </div>
         </>
        )
}
 