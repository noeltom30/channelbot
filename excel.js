const { runPuppy } = require('./puppy.js');
async function excelRunner() {
    const excelJS = require('exceljs')
    const workbook = new excelJS.Workbook();

    await workbook.xlsx.readFile('leads2.xlsx');
    const worksheet = workbook.getWorksheet('Sheet1')
    worksheet.eachRow(function (row, rowNumber) {
        if(rowNumber == 1)
            return;
        const values = row.values.slice(1);
        runPuppy(values[0], String(values[1]), values[3], values[2]);
    });

}

excelRunner();