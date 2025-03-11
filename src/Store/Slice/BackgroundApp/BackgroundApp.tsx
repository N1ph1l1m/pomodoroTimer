import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import backgroundDefault from "../../../App/Images/background/static/nature/2.jpg"

const  local = localStorage.getItem('type')
const  localTheme = localStorage.getItem('theme')

interface IBackground{
    theme:{
        name:string
    },
      background:{
            type:string,
            url:string,
        }
}



const initialState:IBackground = {
    theme:{
        name:"nature"
    },
    background:{
        type: local ? local : 'static',
        url: localTheme ?  localTheme : backgroundDefault
    }
}
export const backgroundApp = createSlice({
    name:"backgroundApp",
    initialState,
    reducers:{
        setBackground(state,action:PayloadAction<{type:string;url:string}>){
                    state.background.type = action.payload.type;
                    state.background.url = action.payload.url
                    localStorage.setItem("type", action.payload.type)
                    localStorage.setItem("theme", action.payload.url)

        },
        setDefault(state){
            state.background.type = initialState.background.type
            state.background.url = initialState.background.url
            state.theme.name = initialState.theme.name
        },
        setTheme(state, action:PayloadAction<{name:string}>){
            state.theme.name = action.payload.name
        },
    }
})

export const {setBackground,setDefault , setTheme} = backgroundApp.actions;
export default backgroundApp.reducer;
