import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ITimer {
    timer:{
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
        pomodoro:{
            minutes: 0,
            second: 2,
        },
        short:{
            minutes:0,
            second:3,
        },
        long:{
            minutes:0,
            second:10,
        }

    }
};

const timerSlice = createSlice({
    name:"timer",
    initialState,
    reducers:{
        pomodoroTimer(state, actions:PayloadAction<{minutes:number,second:number}>) {
            state.timer.pomodoro.minutes = actions.payload.minutes;
            state.timer.pomodoro.second = actions.payload.second;
        },
        pomodoroShortBreak(state, actions:PayloadAction<{minutes:number,second:number}>) {
            state.timer.short.minutes = actions.payload.minutes;
            state.timer.short.second = actions.payload.second;
        },
        pomodoroLongBreak(state, actions:PayloadAction<{minutes:number,second:number}>) {
            state.timer.long.minutes = actions.payload.minutes;
            state.timer.long.second = actions.payload.second;
        }
    }
})
export const {pomodoroTimer, pomodoroShortBreak,pomodoroLongBreak} = timerSlice.actions;
export default timerSlice.reducer;
