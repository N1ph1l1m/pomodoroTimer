import styles from "../../App/Styles/SettingModal.module.css";
import { useState } from "react";
import { Button } from "../../Shared/Button/Button";
import { SetingTimer } from "../../Shared/SettingTimer/SetingTimes";
import { useSelector,useDispatch } from "react-redux";
import { hiddenSetting } from "../../Store/Slice/SettingSlice/SettingSlice";
import { RootState } from "../../Store/index";
import { pomodoroTimerMin,shortTimerMin,longTimerMin } from "../../Store/Slice/timerSlice/timerSlice";
import { SettingTheme } from "../../Shared/SettingTheme/SettingTheme";
export const SettingModal = () => {
  const [menuItem, setMemuItem] = useState("timer");
  const dispatch = useDispatch()
  const settingOff = () => dispatch(hiddenSetting())
  const {pomodoro,short,long} = useSelector((state:RootState)=>state.pomodoroTimer.timer)
  const [pomodoroSt,setPomodoro]  = useState(pomodoro.minutes);
  const [shortSt,setShort]  = useState(short.minutes);
  const [longSt,setLong]  = useState(long.minutes);

  const changePomodoro  = () => dispatch(pomodoroTimerMin(pomodoroSt))
  const changeShort  = () => dispatch(shortTimerMin(shortSt))
  const changeLong  =  () => dispatch(longTimerMin(longSt))

  function  changeTimes(){
    console.log('click');
    changePomodoro()
    changeShort()
    changeLong()
    settingOff()
  }
  const renderItemsMenu = () =>{
    switch(menuItem){
      case "timer":
        return(   <SetingTimer
                pomodoro={pomodoroSt}
                setPomodoro={(e)=>setPomodoro(Number(e.target.value))}
                short={shortSt}
                setShort={(e)=>setShort(Number(e.target.value))}
                long={longSt}
                setLong={(e)=>setLong(Number(e.target.value))}
            />)
      break;
      case "sound":
        return (<p>sound</p>)
      break;
      case "theme":
        return (<SettingTheme/>)
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
             <Button name="Save"  active  onClick={()=>changeTimes()}/>
        </div>

          </div>
      </div>
    </>
  );
};
