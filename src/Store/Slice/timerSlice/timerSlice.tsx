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
            minutes: 25,
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
    }
})
export const {pomodoroTimerMin,shortTimerMin,longTimerMin} = timerSlice.actions;
export default timerSlice.reducer;
