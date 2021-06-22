
const sevenSeg = require('./sevenSegment');

let startTime = new Array(3);

const response = sevenSeg.receiveUserInput(startTime);
if(response) {
    const digitArray = sevenSeg.convertToDigit(startTime);
    sevenSeg.displaySevenSeg(digitArray);
}
else {
    sevenSeg.displayNone();
}
