import  dinamicCity1 from "../../Images/background/dinamic/city/1.mp4"
import  dinamicCity2 from "../../Images/background/dinamic/city/2.mp4"
import  dinamicCity3 from "../../Images/background/dinamic/city/3.mp4"
import  dinamicCity4 from "../../Images/background/dinamic/city/4.mp4"
import  dinamicCity5 from "../../Images/background/dinamic/city/5.mp4"
import  dinamicCity6 from "../../Images/background/dinamic/city/6.mp4"

import dinamicWindow1 from  "../../Images/background/dinamic/window/1.mp4"
import dinamicWindow2 from  "../../Images/background/dinamic/window/2.mp4"

interface IBackgroundItem{
    id:number,
    type:string,
    url:string,
}

interface IBackground{
    [key: string]: IBackgroundItem[]
}
export const  dataBackground:IBackground = {
    city: [
        {
            id: 1,
            type: "dinamic",
            url: dinamicCity1,
        },
        {
            id: 2,
            type: "dinamic",
            url: dinamicCity2,
        },
        {
            id: 3,
            type: "dinamic",
            url: dinamicCity3,
        },
        {
            id: 4,
            type: "dinamic",
            url: dinamicCity4,
        },
        {
            id: 5,
            type: "dinamic",
            url: dinamicCity5,
        },
        {
            id: 6,
            type: "dinamic",
            url: dinamicCity6,
        },
      ],
    window:[
        {
            id: 1,
            type: "dinamic",
            url: dinamicWindow1,
        },
        {
            id: 2,
            type: "dinamic",
            url: dinamicWindow2,
        },
    ]
}