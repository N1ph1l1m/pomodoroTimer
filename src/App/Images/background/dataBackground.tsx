import dinamicCity1 from "../../Images/background/dinamic/city/1.mp4";
import dinamicCity2 from "../../Images/background/dinamic/city/2.mp4";
import dinamicCity3 from "../../Images/background/dinamic/city/3.mp4";
import dinamicCity4 from "../../Images/background/dinamic/city/4.mp4";
import dinamicCity5 from "../../Images/background/dinamic/city/5.mp4";
import dinamicCity6 from "../../Images/background/dinamic/city/6.mp4";

import dinamicWindow1 from "../../Images/background/dinamic/window/1.mp4";
import dinamicWindow2 from "../../Images/background/dinamic/window/2.mp4";

import dinamicNature1 from "../../Images/background/dinamic/nature/1.mp4";
import dinamicNature2 from "../../Images/background/dinamic/nature/2.mp4";
import dinamicNature3 from "../../Images/background/dinamic/nature/3.mp4";
import dinamicNature4 from "../../Images/background/dinamic/nature/4.mp4";
import dinamicNature5 from "../../Images/background/dinamic/nature/5.mp4";
import dinamicNature6 from "../../Images/background/dinamic/nature/6.mp4";
import dinamicNature7 from "../../Images/background/dinamic/nature/7.mp4";
import dinamicNature8 from "../../Images/background/dinamic/nature/8.mp4";
import dinamicNature9 from "../../Images/background/dinamic/nature/9.mp4";
import dinamicNature10 from "../../Images/background/dinamic/nature/10.mp4";
import dinamicNature11 from "../../Images/background/dinamic/nature/11.mp4";
import dinamicNature12 from "../../Images/background/dinamic/nature/12.mp4";
import dinamicNature13 from "../../Images/background/dinamic/nature/13.mp4";
import dinamicNature14 from "../../Images/background/dinamic/nature/14.mp4";
import dinamicNature15 from "../../Images/background/dinamic/nature/15.mp4";
import dinamicNature16 from "../../Images/background/dinamic/nature/16.mp4";
import dinamicNature17 from "../../Images/background/dinamic/nature/17.mp4";
import dinamicNature18 from "../../Images/background/dinamic/nature/18.mp4";
import dinamicNature19 from "../../Images/background/dinamic/nature/19.mp4";
import dinamicNature20 from "../../Images/background/dinamic/nature/20.mp4";

import dinamicAnime1 from "../../Images/background/dinamic/anime/1.mp4";
import dinamicAnime2 from "../../Images/background/dinamic/anime/2.mp4";
import dinamicAnime3 from "../../Images/background/dinamic/anime/3.mp4";
import dinamicAnime4 from "../../Images/background/dinamic/anime/4.mp4";
import dinamicAnime5 from "../../Images/background/dinamic/anime/5.mp4";
import dinamicAnime6 from "../../Images/background/dinamic/anime/6.mp4";

import dinamicCafe1 from "../../Images/background/dinamic/cafe/1.mp4";
import dinamicCafe2 from "../../Images/background/dinamic/cafe/2.mp4";
import dinamicCafe3 from "../../Images/background/dinamic/cafe/3.mp4";
import dinamicCafe4 from "../../Images/background/dinamic/cafe/4.mp4";
import dinamicCafe5 from "../../Images/background/dinamic/cafe/5.mp4";

interface IBackgroundItem {
  id: number;
  type: string;
  url: string;
}

interface IBackground {
  [key: string]: IBackgroundItem[];
}
export const dataBackground: IBackground = {
  anime: [
    { id: 1, type: "dinamic", url: dinamicAnime1 },
    { id: 2, type: "dinamic", url: dinamicAnime2 },
    { id: 3, type: "dinamic", url: dinamicAnime3 },
    { id: 4, type: "dinamic", url: dinamicAnime4 },
    { id: 5, type: "dinamic", url: dinamicAnime5 },
    { id: 6, type: "dinamic", url: dinamicAnime6 },
  ],
  cafe: [
    { id: 1, type: "dinamic", url: dinamicCafe1 },
    { id: 2, type: "dinamic", url: dinamicCafe2 },
    { id: 3, type: "dinamic", url: dinamicCafe3 },
    { id: 4, type: "dinamic", url: dinamicCafe4 },
    { id: 5, type: "dinamic", url: dinamicCafe5 },
  ],
  city: [
    { id: 1, type: "dinamic", url: dinamicCity1 },
    { id: 2, type: "dinamic", url: dinamicCity2 },
    { id: 3, type: "dinamic", url: dinamicCity3 },
    { id: 4, type: "dinamic", url: dinamicCity4 },
    { id: 5, type: "dinamic", url: dinamicCity5 },
    { id: 6, type: "dinamic", url: dinamicCity6 },
  ],
  window: [
    { id: 1, type: "dinamic", url: dinamicWindow1 },
    { id: 2, type: "dinamic", url: dinamicWindow2 },
  ],
  nature: [
    { id: 1, type: "dinamic", url: dinamicNature1 },
    { id: 2, type: "dinamic", url: dinamicNature2 },
    { id: 3, type: "dinamic", url: dinamicNature3 },
    { id: 4, type: "dinamic", url: dinamicNature4 },
    { id: 5, type: "dinamic", url: dinamicNature5 },
    { id: 6, type: "dinamic", url: dinamicNature6 },
    { id: 7, type: "dinamic", url: dinamicNature7 },
    { id: 8, type: "dinamic", url: dinamicNature8 },
    { id: 9, type: "dinamic", url: dinamicNature9 },
    { id: 10, type: "dinamic", url: dinamicNature10 },
    { id: 11, type: "dinamic", url: dinamicNature11 },
    { id: 12, type: "dinamic", url: dinamicNature12 },
    { id: 13, type: "dinamic", url: dinamicNature13 },
    { id: 14, type: "dinamic", url: dinamicNature14 },
    { id: 15, type: "dinamic", url: dinamicNature15 },
    { id: 16, type: "dinamic", url: dinamicNature16 },
    { id: 17, type: "dinamic", url: dinamicNature17 },
    { id: 18, type: "dinamic", url: dinamicNature18 },
    { id: 19, type: "dinamic", url: dinamicNature19 },
    { id: 20, type: "dinamic", url: dinamicNature20 },
  ],
};
