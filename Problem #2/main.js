const utils = require('./Utils');
const CC = require('./ChulaChana');


const main = async () => {
    // Load data into memory
    let users = await CC.getUsers();
    let populationData = await CC.getPopulation();

    let finish = false; // for exit the program
    do {
        console.log('-----------------------------------------------------------------');
        // Prompt to user
        console.log("Welcome to Chula Chana!!!");
        console.log("Available commands:\n", "  1.Check in user\n", "  2.Check out user\n",
            "  3.Show population\n", "  4.quit");
        const userInput = utils.receiveInputNumber("Please input any number (1-4): ", 4);

        switch(userInput) {
            case 1:
                CC.checkIn(users, populationData);
                break;
            case 2:
                CC.checkOut(users, populationData);
                break;
            case 3:
                CC.displayPopulation(populationData);
                break;
            case 4:
                finish = true;
                break;
        }

    } while(!finish);

    CC.saveData(users, populationData);
    console.log("closing program....");
}

main().catch(e => console.log(e));
