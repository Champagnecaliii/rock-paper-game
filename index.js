const readlineSync = require('readline-sync');
const KeyGenerator = require('./KeyGenerator');
const HMACCalculator = require('./HMACCalculator');
const GameRules = require('./GameRules');
const HelpTableGenerator = require('./HelpTableGenerator');

function main() {
  const moves = process.argv.slice(2);
  const key = KeyGenerator.generateKey();
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

  console.log(`HMAC: ${HMACCalculator.calculateHMAC(key, computerMove)}`);
  console.log('Available moves:');
  moves.forEach((move, index) => console.log(`${index + 1} - ${move}`));
  console.log('0 - exit');
  console.log('? - help');

  const userMoveIndex = getUserMoveIndex(moves, moves.length);

  if (userMoveIndex === 0) {
    process.exit();
  } else if (userMoveIndex === -1) {
    console.log('Invalid input. Please try again.');
    main();
  }

  const userMove = moves[userMoveIndex - 1];
  console.log(`Your move: ${userMove}`);
  console.log(`Computer move: ${computerMove}`);

  const result = GameRules.determineWinner(userMove, computerMove, moves);
  console.log(result);

  console.log(`HMAC key: ${key}`);
}

function getUserMoveIndex(moves, maxValue) {
  const userInput = readlineSync.question('Enter your move: ');

  if (userInput.toLowerCase() === '?') {
    const helpTable = HelpTableGenerator.generateHelpTable(moves);
    console.table(helpTable);
    main();
  }

  const userMoveIndex = parseInt(userInput);

  if (isNaN(userMoveIndex) || userMoveIndex < 0 || userMoveIndex > maxValue) {
    console.log('Invalid input. Please try again.');
    return getUserMoveIndex(moves, maxValue); 
  }

  return userMoveIndex;
}

main();


  

  