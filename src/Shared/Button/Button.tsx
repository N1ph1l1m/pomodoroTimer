import styles from "../../App/Styles/Button.module.css"
export const Button = ({name,active, onClick,style}) =>{
    return(

    <button className={!active  ? styles.mainWrap : styles.active  }
        onClick={onClick}
        style={style}
    >{name}</button>
    )
}
