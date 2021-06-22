const utils = require('./Utils');
const CC = require('./ChulaChana');

// Prompt to user
console.log("Welcome to Chula Chana!!!");
console.log("Available commands:\n", " 1.Check in user\n", " 2.Check out user\n",
    " 3.Show population\n", " 4.quit");

// Load data into memory
/*const userList = CC.getUserList();
const populationData = CC.getPopulation();*/

let finish = false; // for exit the program
do {
    const userInput = utils.receiveInputNumber("Please input any number (1-4): ", 4);

    switch(userInput) {
        case 1:
            CC.checkIn(userList, populationData);
            break;
        case 2:
            CC.checkOut(userList, populationData);
            break;
        case 3:
            displayPopulation(populationData);
            break;
        case 4:
            finish = true;
            break;
    }

} while(!finish);

CC.saveData(userList, populationData);
console.log("closing program....");
