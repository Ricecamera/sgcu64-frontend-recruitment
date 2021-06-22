// รับ input จาก user ในรูป xx:xx:xx โดยช่องแรกเป็นส่วนของชั๋วโมง ช่องที่สองเป็นนาที และช่องที่สามเป็นวินาที
// ตรวจสอบว่าค่า input ทีรับมาถูกต้องหรือไหม ถูกต้องจะคืนว่า input จริงเข้ามา แต่ถ้าผิดจะคืนเป็นค่า __:__:__
// นำค่า input ที่ได้ไปแสดงผลในรูปแบบ 7 segment
// ถ้าข้อมูลที่รับเข้ามาถูกต้อง จะเริ่มนับถอยหลังเวลา แล้วค่อยจบโปรแกรม
// update การแสดงผล seven segment

const receiveUserInput = (userInput) => {
    //receive input from keyboard

    //devide input into 3 parts

    //verify user's intput 1.check format 2.check minute and second value

    //store input into userInput 
    return false; //correct format return true
}

const convertToDigit = (time) => {
    //Ex. 60 => [6, 0], 7 => [0, 7]
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

}

const updateTime = (time) => {

}

const main = () => {
    let startTime = new Array[3];

    const response = receiveUserInput(startTime);

    if(response) {
        //To do: ตรงนี้น่าจะเปลี่ยนไปใช้ build-in timer
        //lasttime = getCurrentTime()
        do {
            //get currentTime = getCurrentTime()
            //if (currentTime - lastTime = 1 second)-> do code below
            const digitArray = convertToDigit(startTime);
            displaySevenSeg(digitArray);
            updateTime(userInput);

        } while(!reachZero(userInput));

        const zeroArr = new Array[6].fill(0);
        displaySevenSeg(zeroArr);
    }
    else {
        displayNone();
    }
}