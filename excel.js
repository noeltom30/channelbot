const { runPuppy } = require('./puppy.js');
async function excelRunner() {
    const excelJS = require('exceljs')
    const workbook = new excelJS.Workbook();

    await workbook.xlsx.readFile('leads2.xlsx');
    const worksheet = workbook.getWorksheet('Sheet1')
    // const nameCol = worksheet.getColumn(1);
    // const numberCol = worksheet.getColumn(2);
    // const projectCol = worksheet.getColumn(3);
    // const stmCol = worksheet.getColumn(4);

    // nameCol.eachCell(function(cell, rowNumber){

    // });
    // console.log(nameCol);
    // console.log(numberCol);
    // console.log(projectCol);
    // console.log(stmCol);
    worksheet.eachRow(function (row, rowNumber) {
        if(rowNumber == 1)
            return;
        const values = row.values.slice(1);
        runPuppy(values[0], String(values[1]), values[3], values[2]);
    });

}

excelRunner();