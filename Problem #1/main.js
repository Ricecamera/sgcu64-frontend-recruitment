
const sevenSeg = require('./sevenSegment');

let startTime = new Array(3);

let lastTime = new Date().getTime();

const response = sevenSeg.receiveUserInput(startTime);
if(response) {
    console.clear();
    const digitArray = sevenSeg.convertToDigit(startTime);
    sevenSeg.displaySevenSeg(digitArray);

    while(!sevenSeg.reachZero(startTime)) {
        let currentTime = new Date().getTime();

        if(currentTime - lastTime >= 1000) {
            lastTime = currentTime;

            sevenSeg.updateTime(startTime);
            console.clear();
            const digitArray = sevenSeg.convertToDigit(startTime);
            sevenSeg.displaySevenSeg(digitArray);
        }
    };
}

else {
    sevenSeg.displayNone();
}
