import styles from "../../App/Styles/GalaryBackground.module.css"
import { dataBackground } from "../../App/Images/background/dataBackground"
import { useDispatch , useSelector} from "react-redux";
import { RootState } from "../../Store";
import { setBackground } from "../../Store/Slice/BackgroundApp/BackgroundApp";
interface GalaryBackgroundProps {
    theme: string;
  }

export const GalaryBackground  = ({theme}:GalaryBackgroundProps)=>{ 
    const themeItem  = dataBackground[theme] || [] ; 
    const dispatch = useDispatch(); 
    const urlImg = useSelector((state:RootState)=>state.backgroundApp.background.url)

    return(


    <>
        <div className={styles.mainWrap}>
            <div className={styles.wrapItems} >
                {themeItem.map((item)=>(
                    <div onClick={()=>{dispatch(setBackground({type:item.type , url:item.url}))
                        console.log(urlImg)}} > 
                    <video   className={styles.backgroundApp}  muted loop >
                    <source src={item.url}   type="video/mp4"/>
                </video></div>

                   
                ))}
            </div>
        </div>
    </>)

}