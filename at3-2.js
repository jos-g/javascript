var Excel = require('exceljs');
var workbook = new Excel.Workbook();
//
workbook.csv.readFile('C:/Users/gonca/OneDrive/Documentos/VSCode/uerjbotz.csv')
    .then(function(worksheet) {
        worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
            console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
        });
    }) 