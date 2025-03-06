import { configureStore } from "@reduxjs/toolkit";
import buttonState from "./Slice/ButtonState/ButtonState"
import  pomodoroTimer  from "./Slice/timerSlice/timerSlice";
const store = configureStore({
    reducer:{
        buttonState:buttonState,
        pomodoroTimer:pomodoroTimer,


    }
});

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch  = typeof store.dispatch;
export default store;
