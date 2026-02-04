function getProductosActivos() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName('PRODUCTOS');
  const data = sheet.getDataRange().getValues();

  const headers = data.shift();
  return data
    .filter(row => row[7] === true && row[5] > 0)
    .map(row => ({
      id: row[0],
      consola: row[1],
      titulo: row[2],
      estado: row[3],
      precio: row[4],
      stock: row[5],
      imagen: row[8]
    }));
}
