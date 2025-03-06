import styles from "../../App/Styles/Button.module.css"

interface IButton{
    name:string,
    active?:boolean,
    onClick?:React.MouseEventHandler<HTMLButtonElement>,
    style?:React.CSSProperties,

}

export const Button = ({name,active, onClick,style}:IButton) =>{
    return(

    <button className={!active  ? styles.mainWrap : styles.active  }
        onClick={onClick}
        style={style}
    >{name}</button>
    )
}
