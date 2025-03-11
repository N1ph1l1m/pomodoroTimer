import styles from "../../App/Styles/SettingTheme.module.css"
import { useSelector,useDispatch } from "react-redux"
import { RootState } from "../../Store"
import { CardTheme } from "../CardTheme/CardTheme"
import { setTheme } from "../../Store/Slice/BackgroundApp/BackgroundApp"
import nature from "../../App/Icon/nature.png"
import cafe from "../../App/Icon/cafe.png"
import windows from "../../App/Icon/window.png";
import city from "../../App/Icon/city.png"
import code from "../../App/Icon/code.png"
import books from "../../App/Icon/books.png"
import space from "../../App/Icon/space.png"
import anime from "../../App/Icon/anime.png"
import { GalaryBackground } from "../GalaryBackground/GalaryBackground";


export const SettingTheme = () => {
    const dispatch = useDispatch();

    const themeSelect =  useSelector((state:RootState)=>state.backgroundApp.theme.name)

    return(
    <>
        <div className={styles.mainWrap}>
        <div className={styles.header}>
            <CardTheme onClick={()=>dispatch(setTheme({name:"nature"}))} src={nature} alt={"nature"}/>
            <CardTheme onClick={()=>dispatch(setTheme({name:"cafe"}))} src={cafe} alt={"cafe"}/>
            <CardTheme onClick={()=>dispatch(setTheme({name:"anime"}))} src={anime} alt={"anime"}/>
            <CardTheme onClick={()=>dispatch(setTheme({name:"window"}))} src={windows} alt={"windows"}/>
            <CardTheme onClick={()=>dispatch(setTheme({name:"city"}))} src={city} alt={"city"}/>
            <CardTheme onClick={()=>dispatch(setTheme({name:"code"}))} src={code} alt={"code"}/>
            <CardTheme onClick={()=>dispatch(setTheme({name:"study"}))} src={books} alt={"books"}/>
            <CardTheme onClick={()=>dispatch(setTheme({name:"space"}))} src={space} alt={"space"}/>
        </div>
        <div className={styles.galary}>
            <GalaryBackground theme={themeSelect}/>
        </div>

        </div>
    </>)
}
