const utils = require('./Utils');
const fs = require('fs');

const USER_PATH = './user.csv';
const POPULATION_PATH = './area.csv';
const USER_HEADER = [{ id: 'phoneNumber', title: 'phoneNumber' }, { id: 'area', title: 'area' }];
const POPULATION_HEADER = [{ id: 'buildingName', title: 'buildingName' }, { id: 'population', title: 'population' }];;
const areaList = ['Mahamakut Building', 'Sara Phra Kaew', 'CU Sport Complex', 'Sanum Juub', 'Samyan Mitr Town', 'Central library'];

const getPopulation = async () => {
    if(!fs.existsSync(POPULATION_PATH)) {
        // file doesn't exist
        let data = [];
        for(let i = 0; i < areaList.length; ++i) {
            // initialze all area population to be zero
            data.push({ buildingName: areaList[i], population: 0 });
        }
        return data;
    }
    // file exist
    let population = await utils.readCSVfile(POPULATION_PATH);
    return population;
}

const getUsers = async () => {
    let userMap = new Map();
    if(!fs.existsSync(USER_PATH)) {
        // file doesn't exist
        return userMap;
    }

    // file exist
    let userList = await utils.readCSVfile(USER_PATH);

    // load data into map which key is phone number and value is area index
    for(user of userList) {
        userMap.set(user.phoneNumber, Number(user.area));
    }
    return userMap;
}

// display area choice when user is checking in
const showArea = (populationData) => {
    let displayText = '';
    let i = 1;
    for(let area of populationData) {
        displayText += "  " + i + " " + area.buildingName;
        if(i < populationData.length) {
            displayText += '\n';
        }
        i++;
    }
    console.log(displayText);
}

const checkIn = (userMap, populationData) => {
    console.log("----------------------------------");
    console.log("Check In");
    const phoneNum = utils.receiveInputText("Enter phone number: ");
    showArea(populationData);
    const areaIndex = utils.receiveInputNumber("Select the place: ", areaList.length);

    if(userMap.has(phoneNum)) {
        const oldAreaIndex = userMap.get(phoneNum);

        if(oldAreaIndex === areaIndex) {
            // check in the same area
            console.log("You are checking in the same place");
        }
        else {
            // check in another place
            userMap.set(phoneNum, areaIndex);
            populationData[areaIndex - 1].population++;

            //check out old area
            populationData[oldAreaIndex - 1].population--;
            const bName = populationData[areaIndex - 1].buildingName;
            console.log(`Checking in ${phoneNum} into ${bName}`);
        }
    }
    else {
        // new check in
        userMap.set(phoneNum, areaIndex);
        populationData[areaIndex - 1].population++;
        const bName = populationData[areaIndex - 1].buildingName;
        console.log(`Checking in ${phoneNum} into ${bName}`);
    }
}

const checkOut = (userMap, populationData) => {
    console.log("----------------------------------");
    console.log("Check Out");
    const phoneNum = utils.receiveInputText("Enter phone number: ");

    if(userMap.has(phoneNum)) {
        // user checked in
        const oldAreaIndex = userMap.get(phoneNum);
        populationData[oldAreaIndex - 1].population--;
        userMap.delete(phoneNum);
        const bName = populationData[oldAreaIndex - 1].buildingName;
        console.log(`Checking out ${phoneNum} from ${bName}`);
    }
    else {
        // user didn't check in
        console.log("You didn't check in!");
    }
}

const displayPopulation = (populationData) => {
    console.log("----------------------------------");
    let displayText = '';
    let i = 1;
    for(let area of populationData) {
        displayText += "  " + i + " " + area.buildingName + " : " + area.population + '\n';
        i++;
    }
    console.log(displayText);
}

const saveData = (userMap, populationData) => {
    utils.writeCSVfile(POPULATION_PATH, populationData, POPULATION_HEADER);

    let users = [];
    for(let [key, value] of userMap) {
        users.push({ phoneNumber: key, area: value });
    }
    utils.writeCSVfile(USER_PATH, users, USER_HEADER);
}

module.exports = {
    getPopulation,
    getUsers,
    checkIn,
    checkOut,
    displayPopulation,
    saveData
}