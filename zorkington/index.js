const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function prompt(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  await Zorkington();
}
async function Zorkington(){
  console.log(`182 Main St.
  You are standing on Main Street between Church and South Winooski.
  There is a door here. A keypad sits on the handle.
  On the door is a handwritten sign.`);
}

  let input = await prompt(">_");
  console.log(`Where would you like to go`)

  while (answer !== 'exit') {
    answer = await ask('>_ ')
  }

  //create rooms
  //description
  // Main St.
  // console.log
  // //foyer
  // console.log()
  // //bathroom
  // console.log()
  // //livingroom
  // console.log()
  // //kitchen
  // console.log()
  // //bedroom
  // console.log()

  //room transitions (moving between rooms) can not happen without connections- (walking path and doors) Use State Machine

  //player inventory
  //player status

  //build stories that implement needed code
 // create async/




  //console.log('Now write your code to make this work!');
 // process.exit();


//type in command
//multiple room-inventory-item in each room
//code can understand the players movement and to pick up Object







// let currentRoom = 'start';

// const rooms = {
//   start: {
//     description: 'You are in a dark room. There are two doors, one to the left and one to the right.',
//     options: {
//       left: 'Enter the left door',
//       right: 'Enter the right door'
//     }
//   },
//   left: {
//     description: 'You find yourself in a treasure room with piles of gold.',
//     options: {
//       back: 'Go back to the starting room'
//     }
//   },
//   right: {
//     description: 'You enter a room filled with monsters.',
//     options: {
//       back: 'Go back to the starting room',
//       fight: 'Fight the monsters'
//     }
//   },
//   fight: {
//     description: 'You fight the monsters and defeat them. Congratulations!',
//     options: {
//       restart: 'Restart the game'
//     }
//   }
// };

// function displayRoom() {
//   console.log(rooms[currentRoom].description);
//   console.log('\nOptions:');
//   for (const option in rooms[currentRoom].options) {
//     console.log(`${option}: ${rooms[currentRoom].options[option]}`);
//   }
// }

// function processInput(input) {
//   if (rooms[currentRoom].options.hasOwnProperty(input)) {
//     if (input === 'restart') {
//       currentRoom = 'start';
//     } else {
//       currentRoom = input;
//     }
//     displayRoom();
//   } else {
//     console.log('Invalid option. Try again.');
//   }

//   if (currentRoom === 'fight') {
//     console.log('You are a brave warrior!');
//     rl.close();
//   }
// }

// rl.on('close', () => {
//   console.log('Thanks for playing!');
//   process.exit(0);
// });

// displayRoom();

// rl.on('line', (input) => {
//   processInput(input.trim().toLowerCase());
// });
