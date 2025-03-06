import styles from "../../App/Styles/SettingModal.module.css";
import { Button } from "../../Shared/Button/Button";
import { SetingTimer } from "../SettingTimer/SetingTimes";
export const SettingModal = () => {
  return (
    <>
      <div className={styles.mainWrap}>
        <div className={styles.content}>
          <div className={styles.leftMenu}>
            <ul>
              <li className={styles.menuTitle}>Timer</li>
              <li className={styles.menuTitle}>Sound</li>
              <li className={styles.menuTitle}>Themes</li>
            </ul>
          </div>
          <div className={styles.settingWrap}>
            <SetingTimer />
          </div>

        </div>
        <div className={styles.footer}>
            <Button name="Reset " active />
            <Button name="Save" active />
            <Button name="Close" active />
          </div>
      </div>
    </>
  );
};
