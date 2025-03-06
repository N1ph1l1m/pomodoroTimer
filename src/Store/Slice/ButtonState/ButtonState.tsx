
import { createSlice } from "@reduxjs/toolkit";


const buttonState = createSlice({
    name:"buttonState",
    initialState:{
        buttonState:"pomodoro"as string,
    },
    reducers:
    {
        activePomodoro(state){
            state.buttonState = "pomodoro";
        },
        activeShortBreak(state){
            state.buttonState = "short";
        },
        activeLongBreak(state){
            state.buttonState = "long";
        },
    }
})


export const {activePomodoro,activeShortBreak,activeLongBreak} = buttonState.actions;
export default buttonState.reducer;
