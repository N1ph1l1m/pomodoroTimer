import styles from "../../App/Styles/CardTheme.module.css"
interface Icard{
    src:string;
    alt:string;
}
export const CardTheme = ({src, alt}:Icard) =>{
    return(
    <>
    <div className={styles.mainWrap}>
        <img   className={styles.iconCard} src={src} alt={alt}/>
    </div>
    </>)
}
