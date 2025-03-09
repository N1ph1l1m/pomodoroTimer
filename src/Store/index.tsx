import { configureStore } from "@reduxjs/toolkit";
import buttonState from "./Slice/ButtonState/ButtonState"
import  pomodoroTimer  from "./Slice/timerSlice/timerSlice";
import settingSlice from "./Slice/SettingSlice/SettingSlice"
import  backgroundApp  from "./Slice/BackgroundApp/BackgroundApp";
const store = configureStore({
    reducer:{
        buttonState:buttonState,
        pomodoroTimer:pomodoroTimer,
        settingSlice:settingSlice,
        backgroundApp:backgroundApp,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch  = typeof store.dispatch;
export default store;
