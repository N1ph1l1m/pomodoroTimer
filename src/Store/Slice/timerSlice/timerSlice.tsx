import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import  audioDef from "../../../App/Audio/defaultSound.mp3"


interface ITimer {
    timer:{
        pomodoroSound:string,
        pomodoroCount:number,
        isAudioPlaying: boolean,
        pomodoro:{
            minutes:number;
            second:number;
        },
        short:{
            minutes:number;
            second:number;
        },
        long:{
            minutes:number;
            second:number;
        }
    }
}

const initialState: ITimer = {
    timer: {
        pomodoroSound: audioDef,
        pomodoroCount:0,
        isAudioPlaying: false,
        pomodoro:{
            minutes:25 ,
            second: 0,
        },
        short:{
            minutes:5,
            second:0,
        },
        long:{
            minutes:10,
            second:0,
        }

    }
};

const timerSlice = createSlice({
    name:"timer",
    initialState,
    reducers:{
        pomodoroTimerMin(state,actions:PayloadAction<number>) {
            state.timer.pomodoro.minutes = actions.payload;

        },
        shortTimerMin(state,actions:PayloadAction<number>) {
            state.timer.short.minutes = actions.payload;

        },
        longTimerMin(state,actions:PayloadAction<number>) {
            state.timer.long.minutes = actions.payload;

        },
        setCount(state){
            state.timer.pomodoroCount++
        },
        resetCount(state){
            state.timer.pomodoroCount = 0
        },
        playAudio(state){
            state.timer.isAudioPlaying = true;
        },
        pauseAudio(state){
            state.timer.isAudioPlaying = false;
        }
    }
})
export const {pomodoroTimerMin,shortTimerMin,longTimerMin,setCount,resetCount,pauseAudio,playAudio} = timerSlice.actions;
export default timerSlice.reducer;
