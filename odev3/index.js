import { circleArea, circleCircumference } from './circle.js';

const r = 5;

console.log(`yarıçapı ${r} olan dairenin çevresi = ${circleCircumference(r).toFixed(2)} olur.`);
console.log(`yarıçapı ${r} olan dairenin alanı = ${circleArea(r).toFixed(2)} olur.`);