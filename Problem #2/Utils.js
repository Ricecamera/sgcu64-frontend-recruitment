const prompt = require('prompt-sync')({ sigint: true });
const fs = require("fs");
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { resourceLimits } = require('worker_threads');

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

const readCSVfile = (filePath) => {
    let result = [];
    fs.createReadStream(filePath).pipe(csv({ headers: true }))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            return results;
        })
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