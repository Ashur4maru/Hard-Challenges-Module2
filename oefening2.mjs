import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let jaartal = await userInput.question('Geef een jaartal: ');

if (jaartal % 4 == 0) {
  console.log('Deze jaar is een schrikkeljaar. ')
} else {
  console.log('Deze jaar is geen schrikkeljaar. ')
}

process.exit();
