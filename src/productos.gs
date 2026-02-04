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






function descontarStockYCalcularPrecio(productoSeleccionado) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojaProductos = ss.getSheetByName("PRODUCTOS");
  const data = hojaProductos.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {

    const [id, producto, consola, precio, stock, oferta, activo] = data[i];
    const texto = `${producto} (${consola}) - Bs ${precio}`;

    if (productoSeleccionado.startsWith(texto)) {

      let precioFinal = precio;

      if (oferta) {
        const d = parseInt(oferta.replace("%", ""));
        precioFinal = precio - (precio * d / 100);
      }

      hojaProductos.getRange(i + 1, 5).setValue(stock - 1);

      return { precio: precioFinal };
    }
  }

  return null;
}
