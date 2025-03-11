import styles from "../../App/Styles/Button.module.css"
import classNames from "classnames";
interface IButton{
    name:string,
    active?:boolean,
    reset?:boolean,
    close?:boolean,
    onClick?:React.MouseEventHandler<HTMLButtonElement>,
    style?:React.CSSProperties,
    newClassName?: React.HTMLAttributes<HTMLButtonElement>;
}

export const Button = ({ name, active, reset, close , onClick, style, newClassName }: IButton) => {
    const buttonClass = classNames(
        styles.mainWrap,
        {
            [styles.active]: active,
            [styles.reset]: reset,
            [styles.close]: close,

        },
        newClassName
    );

    return (
        <button className={buttonClass} onClick={onClick} style={style}>
            {name}
        </button>
    );
};
