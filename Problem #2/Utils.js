const prompt = require('prompt-sync')({ sigint: true });

const receiveInputText = (inputPrompt) => {
    const inputText = prompt(inputPrompt);
    return inputText;
}

const receiveInputNumber = (inputPrompt, maxNum) => {
    let input;
    let fail = false;
    do {
        input = prompt(inputPrompt);
        console.log('-----------------------------------------------------------------');

        if(!isNaN(input) && (Number(input) >= 0 && Number(input) <= maxNum)) {
            input = Number(input);
        }
        else {
            console.log("invalid input please try again!");
            fail = true;
        }
    } while(fail);

    return input;
}

module.exports = {
    receiveInputText,
    receiveInputNumber
}