import styles from "../../App/Styles/InputNumber.module.css"

interface IinputNumber{
    name:string,
    value:number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
export const InputNumber = ({name,value,onChange}:IinputNumber) => {
    return(
        <>
        <div className={styles.mainWrap}>
        <label htmlFor="inputNum" >
            <h2 className={styles.titleTimer}>{name} </h2>


        </label>
        <input
                min={1}
                max={60}
                id="inputNum"
                className={styles.inputNumber}
                value={value}
                type="number"
                onChange={onChange} />
        <span >minutes</span>
        </div>
        </>

    )
}
