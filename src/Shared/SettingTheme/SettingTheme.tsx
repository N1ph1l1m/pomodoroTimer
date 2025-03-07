import styles from "../../App/Styles/SettingTheme.module.css"
import { CardTheme } from "../CardTheme/CardTheme"
import nature from "../../App/Images/nature.png"
import cafe from "../../App/Images/cafe.png"
import windows from "../../App/Images/window.png";
import city from "../../App/Images/city.png"
import code from "../../App/Images/code.png"
import books from "../../App/Images/books.png"
import space from "../../App/Images/space.png"
import winter from "../../App/Images/winter.png"
export const SettingTheme = () => {
    return(
    <>
        <div className={styles.mainWrap}>
        <div className={styles.header}>
            <CardTheme src={nature} alt={"nature"}/>
            <CardTheme src={cafe} alt={"cafe"}/>
            <CardTheme src={windows} alt={"windows"}/>
            <CardTheme src={city} alt={"city"}/>
            <CardTheme src={code} alt={"code"}/>
            <CardTheme src={books} alt={"books"}/>
            <CardTheme src={space} alt={"space"}/>
            <CardTheme src={winter} alt={"winter"}/>







        </div>
        </div>
    </>)
}
