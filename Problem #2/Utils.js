const prompt = require('prompt-sync')({ sigint: true });
const fs = require("fs");
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// recieve user type from keyborad
const receiveInputText = (inputPrompt) => {
    const inputText = prompt(inputPrompt);
    return inputText;
}

// recieve number from keyboard
const receiveInputNumber = (inputPrompt, maxNum = 1) => {
    let input;
    let fail;
    do {
        fail = false;
        input = prompt(inputPrompt);

        if(!isNaN(input) && (Number(input) > 0 && Number(input) <= maxNum)) {
            // accept input when user type is number and value is between 1 and maxNum
            input = Number(input);
        }
        else {
            // reject input
            console.log("invalid input please try again!");
            fail = true;
        }
    } while(fail);

    return input;
}

// read csv file asynchronously
const readCSVfile = (filePath) => {
    let result = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath).pipe(csv({ headers: true }))
            .on('data', (data) => result.push(data))
            .on('end', () => {
                resolve(result); // success, return data in array
            })
            .on('error', reject) // error, can't open the file
    });
}

const writeCSVfile = (filePath, data, fileHeader) => {
    const csvWriter = createCsvWriter({
        path: filePath,
        header: fileHeader
    });
    csvWriter.writeRecords(data);
}

module.exports = {
    receiveInputText,
    receiveInputNumber,
    readCSVfile,
    writeCSVfile
}