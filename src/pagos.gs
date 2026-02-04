function getMetodosPago() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('PAGOS');
  const data = sheet.getDataRange().getValues();
  data.shift();

  return data
    .filter(r => r[3] === true)
    .map(r => ({
      tipo: r[0],
      descripcion: r[1],
      valor: r[2]
    }));
}
