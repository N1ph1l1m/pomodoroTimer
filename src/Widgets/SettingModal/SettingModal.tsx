import styles from "../../App/Styles/SettingModal.module.css";
import { useState } from "react";
import { Button } from "../../Shared/Button/Button";
import { SetingTimer } from "../SettingTimer/SetingTimes";
import { useDispatch } from "react-redux";
import { hiddenSetting } from "../../Store/Slice/SettingSlice/SettingSlice";
export const SettingModal = () => {
  const [menuItem, setMemuItem] = useState("timer");
  const dispatch = useDispatch()
  const settingOff = () => dispatch(hiddenSetting())

  const renderItemsMenu = () =>{
    switch(menuItem){
      case "timer":
        return(   <SetingTimer />)
      break;
      case "sound":
        return (<p>sound</p>)
      break;
      case "theme":
        return (<p>theme</p>)
        break;
    }
     

  }

  return (
    <>
      <div className={styles.mainWrap}>
        <div className={styles.content}>
          <div className={styles.leftMenu}>
            <ul>
              <li className={styles.menuTitle} onClick={()=> setMemuItem("timer")}>Timer</li>
              <li className={styles.menuTitle} onClick={()=> setMemuItem("sound")} >Sound</li>
              <li className={styles.menuTitle} onClick={()=> setMemuItem("theme")} >Themes</li>
            </ul>
          </div>
          <div className={styles.settingWrap}>
            {renderItemsMenu()}
          </div>

        </div>
        <div className={styles.footer}>
            <Button name="Reset "  reset />
        <div>
             <Button name="Close" close onClick={settingOff} active />
             <Button name="Save"  active />
        </div>
      
          </div>
      </div>
    </>
  );
};
