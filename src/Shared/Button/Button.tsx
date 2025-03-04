import styles from "../../App/Styles/Button.module.css"
export const Button = ({name,active}) =>{
    return(
    
    <button className={!active  ? styles.mainWrap : styles.active  }>{name}</button>
    )
}