import styles from "../../App/Styles/GalaryBackground.module.css";
import { dataBackground } from "../../App/Images/background/dataBackground";
import { useDispatch } from "react-redux";
import {  useCallback } from "react";
import { RiLiveFill } from "react-icons/ri";

import { setBackground } from "../../Store/Slice/BackgroundApp/BackgroundApp";

interface GalaryBackgroundProps {
  theme: string;
}

interface IBackgroundItem {
  type: string; // тип фона
  url: string; // URL изображения или видео
  prewiew?: string; // URL для предварительного просмотра, доступно для динамического фона
}

export const GalaryBackground = ({ theme }: GalaryBackgroundProps) => {
  const themeItem = dataBackground[theme] || [];
  const dispatch = useDispatch();

  const handleClick = useCallback((item:IBackgroundItem)=> {
    dispatch(setBackground({ type: item.type, url: item.url }));
  }, [dispatch]);

  return (
    <div className={styles.mainWrap}>
      <div className={styles.wrapItems}>
        {themeItem.map((item) => (
          <div key={item.url} onClick={() => handleClick(item)}>
            {item.type === 'static' ? <img src={item.url} className={styles.backgroundApp} />
            :
            <div className={styles.wrapDinamic}>
       <img src={item.prewiew} className={styles.backgroundApp}/>
<div className={styles.wrapLive}>
                    <RiLiveFill size="20" color="#ffffff" />
                    <span>Live</span>
                </div>
            </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};
