import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question('Geef een getal in: '));
let getal2 = parseFloat(await userInput.question('Geef nog een getal in: '));
let getal3 = parseFloat(await userInput.question('Geef nog een getal in: '));
let getal4 = parseFloat(await userInput.question('Geef nog een getal in: '));
let getal5 = parseFloat(await userInput.question('Geef nog een getal in: '));

if (getal1 > getal2 && getal1 > getal3 && getal1 > getal4 && getal1 > getal5) {
  console.log(getal1 + 'is de hoogste getal. ')
} else if (getal2 > getal1 && getal2 > getal3 && getal2 > getal4 && getal2 > getal5) {
  console.log(getal2 + 'is de hoogste getal. ')
} else if (getal3 > getal1 && getal3 > getal2 && getal3 > getal4 && getal3 > getal5) {
  console.log(getal3 + ' is de hoogste getal. ')
} else if (getal4 > getal1 && getal4 > getal2 && getal4 > getal3 && getal4 > getal5) {
  console.log(getal4 + ' is de hoogste getal. ')
} else {
  console.log(getal5 + ' is de hoogste getal. ')
}


if (getal1 < getal2 && getal1 < getal3 && getal1 < getal4 && getal1 < getal5) {
  console.log(getal1 + ' is de laagste getal. ')
} else if (getal2 < getal1 && getal2 < getal3 && getal2 < getal4 && getal2 < getal5) {
  console.log(getal2 + ' is de laagste getal. ')
} else if (getal3 < getal1 && getal3 < getal2 && getal3 < getal4 && getal3 < getal5) {
  console.log(getal3 + ' is de laagste getal. ')
} else if (getal4 < getal1 && getal4 < getal2 && getal4 < getal3 && getal4 < getal5) {
  console.log(getal4 + ' is de laagste getal. ')
} else {
  console.log(getal5 + ' is de laagste getal. ')
}


let gemiddelde = (getal1 + getal2 + getal3 + getal4 + getal5) / 5;

console.log(gemiddelde + ' is uw gemiddelde. ');

process.exit();
