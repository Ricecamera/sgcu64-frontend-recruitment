// รับ input จาก user ในรูป xx:xx:xx โดยช่องแรกเป็นส่วนของชั๋วโมง ช่องที่สองเป็นนาที และช่องที่สามเป็นวินาที
// ตรวจสอบว่าค่า input ทีรับมาถูกต้องหรือไหม ถูกต้องจะคืนว่า input จริงเข้ามา แต่ถ้าผิดจะคืนเป็นค่า __:__:__
// นำค่า input ที่ได้ไปแสดงผลในรูปแบบ 7 segment
// ถ้าข้อมูลที่รับเข้ามาถูกต้อง จะเริ่มนับถอยหลังเวลา แล้วค่อยจบโปรแกรม
// update การแสดงผล seven segment

const prompt = require('prompt-sync')({ sigint: true });

const receiveUserInput = (userInput) => {
    const regx = /^\d+:\d+:\d+$/;

    const inputText = prompt('input: '); // receive input from keyboard

    // verify user's intput pattern  
    if(regx.test(inputText) && isValid) {
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

const makeSevenSeg = (number) => {
    const sevenSegment = new Array[7];

    switch(number) {
        case 0:

        case 1:

        case 2:

        case 3:

        case 4:

        case 5:

        case 6:

        case 7:

        case 8:

        case 9:
    }
    return sevenSegment;
}

const displaySevenSeg = (digitArray) => {

    const displayTime = digitArray.map(makeSevenSeg(number));
    //display
}

const displayNone = () => {
    console.log('\n          ·           ·');
    console.log(' __   __  ·  __   __  ·  __  __');
}

const updateTime = (time) => {

}

const main = () => {
    let startTime = new Array(3);

    const response = receiveUserInput(startTime);
    if(response) {
        const digitArray = convertToDigit(startTime);
        console.log(digitArray);
        //displaySevenSeg(digitArray);
    }
    else {
        displayNone();
    }
}

main();