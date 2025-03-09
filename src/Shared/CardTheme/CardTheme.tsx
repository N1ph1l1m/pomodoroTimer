import styles from "../../App/Styles/CardTheme.module.css"
interface Icard{
    src:string;
    alt:string;
    onClick:React.MouseEventHandler<HTMLDivElement>;
}
export const CardTheme = ({src, alt,onClick}:Icard) =>{
    return(
    <>
    <div className={styles.mainWrap} onClick={onClick}>
        <img   className={styles.iconCard} src={src} alt={alt}/>
    </div>
    </>)
}
