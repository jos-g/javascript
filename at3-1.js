const Excel = require('exceljs');

// Create workbook & add worksheet
const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('ExampleSheet');

// add column headers
worksheet.columns = [
  {header:'id', key:'id'},
  { header: 'Nome', key: 'nome' },
  { header: 'D.D.N', key: 'ddn' }
];

// Add row using key mapping to columns
worksheet.addRow({id: 1, nome: 'Amir El Amari', ddn: new Date(1970, 1, 1)});
worksheet.addRow({id: 2, nome: 'Erik Torsten', ddn: new Date(1965, 1, 7)});
worksheet.addRow({id: 3, nome: 'Kirra Foster', ddn: new Date(1986, 3, 5)});
worksheet.addRow({id: 4, nome: 'Tayane Alves', ddn: new Date(2000, 1, 5)});
worksheet.addRow({id: 5, nome: 'Vicent Fabron', ddn: new Date(1987, 1, 2)});
worksheet.addRow({id: 6, nome: 'Liam Byrne', ddn: new Date(1980, 9, 2)});
worksheet.addRow({id: 7, nome: 'Ling Ying Wei', ddn: new Date(1991, 3, 8)});
worksheet.addRow({id: 8, nome: 'Sabine Callas', ddn: new Date(1991, 12, 6)});
worksheet.addRow({id: 9, nome: 'Clara Böhringer', ddn: new Date(1999, 2, 3)});
worksheet.addRow({id: 10, nome: 'Sasha Novikov', ddn: new Date(1999, 7, 9)});


// save workbook to disk
workbook
  .csv
  .writeFile('uerjbotz.csv')
  .then(() => {
    console.log("saved");
  })
  .catch((err) => {
    console.log("err", err);
  });