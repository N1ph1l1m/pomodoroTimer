import { useSelector} from "react-redux";
import { RootState } from "../../Store";
import styles from "../../App/Styles/MainPage.module.css"
import { Pomodoro } from "../../Widgets/Pomodoro/Pomodoro"
import { SettingModal } from "../../Widgets/SettingModal/SettingModal";
import city from "../../App/Images/background/dinamic/city/2.mp4"


export const MainPage = () =>{

    const isSetting  = useSelector((state:RootState)=>state.settingSlice.setting.isSetting)
    const {type,url} = useSelector((state:RootState)=>state.backgroundApp.background)



    const themeUrl = localStorage.getItem("theme");
  const typeStatic = "static";

  const imageUrl = typeStatic === "static" && themeUrl ? themeUrl : url;



  const typeDinamic = "dinamic";

  const imageUrlDinamic = typeDinamic === "dinamic" && themeUrl ? themeUrl : url;





    function renderBackground() {
        if (type === "static") {
          if(localStorage.getItem('type') === 'static'){
            return  <img src={imageUrl} className={styles.backgroundApp} alt={`${type}-img-${url}`}/>
          }else{
            return  <img src={url} className={styles.backgroundApp} alt={`${type}-img-${url}`}/>
          }

        }
        if (type === "dinamic") {
          if(localStorage.getItem('type') === 'dimamic' && localStorage.getItem('type') ){
            return (
              <video key={url} className={styles.backgroundApp} autoPlay muted loop>
                <source src={ imageUrlDinamic} type="video/mp4" />
              </video>
            )
          }else{
            return (
              <video key={url} className={styles.backgroundApp} autoPlay muted loop>
                <source src={url} type="video/mp4" />
              </video>
            )
          }
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
