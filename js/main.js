import { initUserFormSubmit } from "./modal.js";
import { initThemeChange } from "./themechange.js";
import { isLeapYear } from "./vysokosny.js";
import { initGuessTheNumber } from "./guessthenumber.js";
import { initRpsGameStart } from "./rockpaperscissors.js";
import { initCalculator } from "./calculator.js";
import { initTimeCalculator } from "./timecalculator.js";
import { initSelectFilterList } from "./select.js";
import { initFootball } from "./football.js";
import { initLargestNumberSearch } from "./largestnumber.js";
import { initDino } from "./dino.js";
import { initSlider } from "./slider.js";
import { initScientistsFilter } from "./scientists.js";
import { initSubscribeFormSubmit } from "./subscribe.js";
import { initTravelLinks } from "../travellinks.js";

initUserFormSubmit();
initThemeChange();
isLeapYear();
initGuessTheNumber();
initRpsGameStart();
initCalculator();
initTimeCalculator();
initSelectFilterList();
initFootball(); 
initLargestNumberSearch(); 
initDino();
initSlider();
initScientistsFilter();
initSubscribeFormSubmit();
initTravelLinks();

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Space') {
    evt.preventDefault();
  }
});

function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

export {getRandomInteger};