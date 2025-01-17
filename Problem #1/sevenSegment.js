const prompt = require('prompt-sync')({ sigint: true });

const receiveUserInput = (userInput) => {
    const regx = /^\d+:\d+:\d+$/;

    const inputText = prompt('input: '); // receive input from keyboard

    // verify user's intput pattern  
    if(regx.test(inputText)) {
        let inputArr = inputText.split(':');
        // check if minute and second are in valid range
        const isValid = (Number(inputArr[1]) < 60) && (Number(inputArr[2]) < 60);
        if(isValid) {
            // store input into userInput 
            for(let i = 0; i < 3; i++) {
                userInput[i] = Number(inputArr[i]);
            }
            return true; // correct format return true
        }
    }

    for(let i = 0; i < 3; i++) {
        userInput[i] = 0;
    }
    return false; // wrong format return false and 00:00:00
}

const convertToDigit = (time) => {
    // Ex. 60 => [6, 0], 7 => [0, 7]
    let digitArray = new Array();
    for(let num of time) {
        const digit = Math.floor(num / 10);
        digitArray.push(digit);
        num -= digit * 10;
        digitArray.push(num);
    }
    return digitArray;
}

const updateTime = (time) => {
    time[2]--;

    if(time[2] < 0) {
        time[1]--;
        time[2] = 59;
        if(time[1] < 0) {
            time[0]--;
            time[1] = 59;
        }
    }
}

const reachZero = (time) => {
    return (time[0] === 0 && time[1] === 0 && time[2] === 0);
}

const makeSevenSeg = (number) => {
    // array of string
    const sevenSegment = new Array(7);

    switch(number) {
        case 0:
            sevenSegment[0] = '__';
            sevenSegment[1] = '  ';
            sevenSegment[2] = '__';
            for(let i = 3; i <= 6; i++) {
                sevenSegment[i] = '|';
            }
            break;
        case 1:
            sevenSegment[0] = '  ';
            sevenSegment[1] = '  ';
            sevenSegment[2] = '  ';
            sevenSegment[3] = ' ';
            sevenSegment[4] = ' ';
            sevenSegment[5] = '|';
            sevenSegment[6] = '|';
            break;
        case 2:
            sevenSegment[0] = '__';
            sevenSegment[1] = '__';
            sevenSegment[2] = '__';
            sevenSegment[3] = ' ';
            sevenSegment[4] = '|';
            sevenSegment[5] = '|';
            sevenSegment[6] = ' ';
            break;
        case 3:
            sevenSegment[0] = '__';
            sevenSegment[1] = '__';
            sevenSegment[2] = '__';
            sevenSegment[3] = ' ';
            sevenSegment[4] = ' ';
            sevenSegment[5] = '|';
            sevenSegment[6] = '|';
            break;
        case 4:
            sevenSegment[0] = '  ';
            sevenSegment[1] = '__';
            sevenSegment[2] = '  ';
            sevenSegment[3] = '|';
            sevenSegment[4] = ' ';
            sevenSegment[5] = '|';
            sevenSegment[6] = '|';
            break;
        case 5:
            sevenSegment[0] = '__';
            sevenSegment[1] = '__';
            sevenSegment[2] = '__';
            sevenSegment[3] = '|';
            sevenSegment[4] = ' ';
            sevenSegment[5] = ' ';
            sevenSegment[6] = '|';
            break;
        case 6:
            sevenSegment[0] = '__';
            sevenSegment[1] = '__';
            sevenSegment[2] = '__';
            sevenSegment[3] = '|';
            sevenSegment[4] = '|';
            sevenSegment[5] = ' ';
            sevenSegment[6] = '|';
            break;
        case 7:
            sevenSegment[0] = '__';
            sevenSegment[1] = '  ';
            sevenSegment[2] = '  ';
            sevenSegment[3] = ' ';
            sevenSegment[4] = ' ';
            sevenSegment[5] = '|';
            sevenSegment[6] = '|';
            break;
        case 8:
            sevenSegment[0] = '__';
            sevenSegment[1] = '__';
            sevenSegment[2] = '__';
            sevenSegment[3] = '|';
            sevenSegment[4] = '|';
            sevenSegment[5] = '|';
            sevenSegment[6] = '|';
            break;
        case 9:
            sevenSegment[0] = '__';
            sevenSegment[1] = '__';
            sevenSegment[2] = '__';
            sevenSegment[3] = '|';
            sevenSegment[4] = ' ';
            sevenSegment[5] = '|';
            sevenSegment[6] = '|';
            break;
    }
    return sevenSegment;
}

const displaySevenSeg = (digitArray) => {

    //displayTime is 2d array of string: row is number index, column is segment index
    const displayTime = digitArray.map(makeSevenSeg);
    //display
    let firstLine = ' ', secondLine = '', thirdLine = '';
    for(let i = 0; i < 6; i++) {
        firstLine += ` ${displayTime[i][0]} `;

        if((i + 1) % 2 === 0 && i < 5) {
            firstLine += "   ";
        }
        else {
            firstLine += " ";
        }
    }

    for(let i = 0; i < 6; i++) {
        secondLine += displayTime[i][3] + displayTime[i][1] + displayTime[i][5];
        if((i + 1) % 2 === 0 && i < 5) {
            secondLine += " · ";
        }
        else {
            secondLine += " ";
        }
    }

    for(let i = 0; i < 6; i++) {
        thirdLine += displayTime[i][4] + displayTime[i][2] + displayTime[i][6];
        if((i + 1) % 2 === 0 && i < 5) {
            thirdLine += " · ";
        }
        else {
            thirdLine += " ";
        }
    }
    console.log(firstLine, '\n', secondLine, '\n', thirdLine);

}

const displayNone = () => {
    console.log('\n          ·           ·');
    console.log(' __   __  ·  __   __  ·  __  __');
}

module.exports = {
    receiveUserInput,
    convertToDigit,
    updateTime,
    reachZero,
    makeSevenSeg,
    displayNone,
    displaySevenSeg
};