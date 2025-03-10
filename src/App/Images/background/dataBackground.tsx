import staticCity1 from "../../Images/background/static/city/1.jpg";
import staticCity2 from "../../Images/background/static/city/2.jpg";
import staticCity3 from "../../Images/background/static/city/3.jpg";
import staticCity4 from "../../Images/background/static/city/4.jpg";
import staticCity5 from "../../Images/background/static/city/5.jpg";
import dinamicCity1 from "../../Images/background/dinamic/city/1.mp4";
import dinamicCity2 from "../../Images/background/dinamic/city/2.mp4";
import dinamicCity3 from "../../Images/background/dinamic/city/3.mp4";

import dinamicCity1Prew from "../../Images/background/dinamic/city//Prewiew/1(prew).jpg"
import dinamicCity2Prew from "../../Images/background/dinamic/city//Prewiew/2(prew).jpg"
import dinamicCity3Prew from "../../Images/background/dinamic/city//Prewiew/3(prew).jpg"

import staticWindow1 from "../../Images/background/static/window/1.jpg"
import staticWindow2 from "../../Images/background/static/window/2.jpg"
import staticWindow3 from "../../Images/background/static/window/3.jpg"
import staticWindow4 from "../../Images/background/static/window/4.jpg"
import staticWindow5 from "../../Images/background/static/window/5.jpg"
import dinamicWindow1 from "../../Images/background/dinamic/window/1.mp4";
import dinamicWindow2 from "../../Images/background/dinamic/window/2.mp4";

import dinamicWindow1Prew from "../../Images/background/dinamic/window/Prewiew/1(prew).jpg";
import dinamicWindow2Prew from "../../Images/background/dinamic/window/Prewiew/2(prew).jpg";

import dinamicNature1 from "../../Images/background/dinamic/nature/1.mp4";
import dinamicNature2 from "../../Images/background/dinamic/nature/2.mp4";
import dinamicNature3 from "../../Images/background/dinamic/nature/3.mp4";
import dinamicNature4 from "../../Images/background/dinamic/nature/4.mp4";
import dinamicNature5 from "../../Images/background/dinamic/nature/5.mp4";

import dinamicNature1Prew from "../../Images/background/dinamic/nature/Prewiew/1(prew).jpg";
import dinamicNature2Prew from "../../Images/background/dinamic/nature/Prewiew/2(prew).jpg";
import dinamicNature3Prew from "../../Images/background/dinamic/nature/Prewiew/3(prew).jpg";
import dinamicNature4Prew from "../../Images/background/dinamic/nature/Prewiew/4(prew).jpg";
import dinamicNature5Prew from "../../Images/background/dinamic/nature/Prewiew/5(prew).jpg";

import staticNature1 from "../../Images/background/static/nature/1.jpg";
import staticNature2 from "../../Images/background/static/nature/2.jpg";
import staticNature3 from "../../Images/background/static/nature/3.jpg";
import staticNature4 from "../../Images/background/static/nature/5.jpg";


import dinamicAnime1 from "../../Images/background/dinamic/anime/1.mp4";
import dinamicAnime2 from "../../Images/background/dinamic/anime/2.mp4";
import dinamicAnime3 from "../../Images/background/dinamic/anime/3.mp4";

import dinamicAnime1Prew from "../../Images/background/dinamic/anime/Prewiew/1(prew).jpg";
import dinamicAnime2Prew from "../../Images/background/dinamic/anime/Prewiew/2(prew).jpg";
import dinamicAnime3Prew from "../../Images/background/dinamic/anime/Prewiew/3(prew).jpg";


import staticCafe1 from "../../Images/background/static/cafe/1.jpg"
import staticCafe2 from "../../Images/background/static/cafe/2.jpg"
import staticCafe3 from "../../Images/background/static/cafe/3.jpg"
import staticCafe4 from "../../Images/background/static/cafe/4.jpg"

import dinamicCafe1 from "../../Images/background/dinamic/cafe/1.mp4";
import dinamicCafe2 from "../../Images/background/dinamic/cafe/2.mp4";
import dinamicCafe3 from "../../Images/background/dinamic/cafe/3.mp4";

import dinamicCafe1Prew from "../../Images/background/dinamic/cafe/Prewiew/1(prew).jpg";
import dinamicCafe2Prew from "../../Images/background/dinamic/cafe/Prewiew/2(prew).jpg";
import dinamicCafe3Prew from "../../Images/background/dinamic/cafe/Prewiew/3(prew).jpg";



import staticSpace1 from "../../Images/background/static/cosmos/1.jpg";
import staticSpace2 from "../../Images/background/static/cosmos/2.jpg";
import staticSpace3 from "../../Images/background/static/cosmos/3.jpg";
import staticSpace4 from "../../Images/background/static/cosmos/4.jpg";
import staticSpace5 from "../../Images/background/static/cosmos/5.jpg";
import staticSpace6 from "../../Images/background/static/cosmos/6.jpg";

import staticStudy1 from "../../Images/background/static/study/1.jpg";
import staticStudy2 from "../../Images/background/static/study/2.jpg";
import staticStudy3 from "../../Images/background/static/study/3.jpg";
import staticStudy4 from "../../Images/background/static/study/4.jpg";
import staticStudy5 from "../../Images/background/static/study/5.jpg";
import staticStudy6 from "../../Images/background/static/study/6.jpg";

import staticCode1 from "../../Images/background/static/code/1.jpg";
import staticCode2 from "../../Images/background/static/code/2.jpg";
import staticCode3 from "../../Images/background/static/code/3.jpg";
import staticCode4 from "../../Images/background/static/code/4.jpg";
import staticCode5 from "../../Images/background/static/code/5.jpg";


interface IBackgroundItem {
  id: number;
  type: string;
  prewiew?:string;
  url: string;
}

interface IBackground {
  [key: string]: IBackgroundItem[];
}
export const dataBackground: IBackground = {
  anime: [
    { id: 1, type: "dinamic",  prewiew:dinamicAnime1Prew, url: dinamicAnime1 },
    { id: 2, type: "dinamic",  prewiew:dinamicAnime2Prew, url: dinamicAnime2 },
    { id: 3, type: "dinamic",  prewiew:dinamicAnime3Prew, url: dinamicAnime3 },

  ],
  cafe: [
    { id: 1, type: "static",   url: staticCafe1 },
    { id: 2, type: "static",   url: staticCafe2 },
    { id: 3, type: "static",   url: staticCafe3 },
    { id: 4, type: "static",   url: staticCafe4 },
    { id: 5, type: "dinamic",  prewiew:dinamicCafe1Prew, url: dinamicCafe1 },
    { id: 6, type: "dinamic",  prewiew:dinamicCafe2Prew, url: dinamicCafe2 },
    { id: 7, type: "dinamic",  prewiew:dinamicCafe3Prew, url: dinamicCafe3 },

  ],
  city: [
    { id: 1, type: "static",   url:staticCity1 },
    { id: 2, type: "static",   url:staticCity2 },
    { id: 3, type: "static",   url:staticCity3 },
    { id: 4, type: "static",   url:staticCity4 },
    { id: 5, type: "static",   url:staticCity5 },
    { id: 6, type: "dinamic",  prewiew:dinamicCity1Prew, url: dinamicCity1 },
    { id: 7, type: "dinamic",  prewiew:dinamicCity2Prew, url: dinamicCity2 },
    { id: 8, type: "dinamic",  prewiew:dinamicCity3Prew, url: dinamicCity3 },
  ],
  window: [
    { id: 1, type: "static",  url: staticWindow1 },
    { id: 2, type: "static",  url: staticWindow2 },
    { id: 3, type: "static",  url: staticWindow3 },
    { id: 4, type: "static",  url: staticWindow4 },
    { id: 5, type: "static",  url: staticWindow5 },
    { id: 6, type: "dinamic", prewiew:dinamicWindow1Prew, url: dinamicWindow1 },
    { id: 7, type: "dinamic", prewiew:dinamicWindow2Prew, url: dinamicWindow2 },
  ],
  nature: [
    { id: 1, type: "static",  url: staticNature1 },
    { id: 2, type: "static", url: staticNature2 },
    { id: 3, type: "static", url: staticNature3 },
    { id: 4, type: "static", url: staticNature4 },
    { id: 5, type: "dinamic", prewiew:dinamicNature2Prew , url: dinamicNature2 },
    { id: 6, type: "dinamic", prewiew:dinamicNature3Prew , url: dinamicNature3 },
    { id: 7, type: "dinamic", prewiew:dinamicNature4Prew , url: dinamicNature4 },
    { id: 8, type: "dinamic", prewiew:dinamicNature5Prew , url: dinamicNature5 },
    { id: 9, type: "dinamic", prewiew:dinamicNature1Prew , url: dinamicNature1 },

  ],
  space:[
    { id: 1, type: "static",  url: staticSpace1 },
    { id: 2, type: "static",  url: staticSpace2 },
    { id: 3, type: "static",  url: staticSpace3 },
    { id: 4, type: "static",  url: staticSpace4 },
    { id: 5, type: "static",  url: staticSpace5 },
    { id: 6, type: "static",  url: staticSpace6 },
  ],
  study:[
    { id: 1, type: "static",  url: staticStudy1 },
    { id: 2, type: "static",  url: staticStudy2 },
    { id: 3, type: "static",  url: staticStudy3 },
    { id: 4, type: "static",  url: staticStudy4 },
    { id: 5, type: "static",  url: staticStudy5 },
    { id: 6, type: "static",  url: staticStudy6 },
  ],
  code:[
    { id: 1, type: "static",  url: staticCode1 },
    { id: 2, type: "static",  url: staticCode2 },
    { id: 3, type: "static",  url: staticCode3 },
    { id: 4, type: "static",  url: staticCode4 },
    { id: 5, type: "static",  url: staticCode5 },
  ]

};
