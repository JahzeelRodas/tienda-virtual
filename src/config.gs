function getConfig(clave) {
  const sheet = SpreadsheetApp.getActive().getSheetByName('CONFIG');
  const data = sheet.getDataRange().getValues();
  data.shift();

  const item = data.find(r => r[0] === clave);
  return item ? item[1] : null;
}
