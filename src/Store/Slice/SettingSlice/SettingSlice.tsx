
import { createSlice } from "@reduxjs/toolkit"

const settingSlice = createSlice({
    name:"setting",
    initialState:{
        setting:{
            isSetting:false
        }
    },
    reducers:{
        showSetting(state){
            state.setting.isSetting = true;
        },
        hiddenSetting(state){
            state.setting.isSetting = false;
        }
    }
})

export const {showSetting,hiddenSetting} =  settingSlice.actions;
export default settingSlice.reducer;