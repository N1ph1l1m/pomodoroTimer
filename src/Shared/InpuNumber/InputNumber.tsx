import styles from "../../App/Styles/InputNumber.module.css"

interface IinputNumber{
    name:string
}
export const InputNumber = ({name}:IinputNumber) => {
    return(
        <>
        <div className={styles.mainWrap}>
        <label htmlFor="inputNum" >
            <h2 className={styles.titleTimer}>{name} </h2>


        </label>
        <input
                id="inputNum"
                className={styles.inputNumber}
                value="25"
                type="number" />
        <span >minutes</span>
        </div>


        </>

    )
}
