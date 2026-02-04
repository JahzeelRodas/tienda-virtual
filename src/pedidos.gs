function crearPedido(payload) {
  const ss = SpreadsheetApp.getActive();
  const productosSheet = ss.getSheetByName('PRODUCTOS');
  const pedidosSheet = ss.getSheetByName('PEDIDOS');

  const productos = productosSheet.getDataRange().getValues();
  const producto = productos.find(r => r[0] === payload.productoId);

  if (!producto || producto[5] <= 0) {
    throw new Error('Producto sin stock');
  }

  // descontar stock
  producto[5] = producto[5] - 1;
  productosSheet.getRange(productos.indexOf(producto) + 1, 6).setValue(producto[5]);

  // guardar pedido
  pedidosSheet.appendRow([
    Utilities.getUuid(),
    new Date(),
    payload.productoId,
    payload.cliente,
    payload.whatsapp,
    payload.total,
    payload.metodoPago,
    'PENDIENTE'
  ]);

  return true;
}


function onFormSubmit(e) {

  if (!e || !e.range) {
    Logger.log("Evento inválido");
    return;
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const hojaRespuestas = ss.getSheetByName("RESPUESTAS_FORM");
  const hojaProductos  = ss.getSheetByName("PRODUCTOS");
  const hojaPedidos    = ss.getSheetByName("PEDIDOS");

  const fila = e.range.getRow();
  const datos = hojaRespuestas.getRange(fila, 1, 1, 6).getValues()[0];

  const [
    fecha,
    productoSeleccionado,
    cliente,
    whatsapp,
    metodoPago,
    observaciones
  ] = datos;

  if (!productoSeleccionado || !cliente) {
    Logger.log("Datos incompletos");
    return;
  }

  const resultado = descontarStockYCalcularPrecio(productoSeleccionado);

  if (!resultado) {
    Logger.log("Producto no encontrado");
    return;
  }

  hojaPedidos.appendRow([
    new Date(),
    productoSeleccionado,
    cliente,
    whatsapp,
    metodoPago,
    resultado.precio,
    "PENDIENTE"
  ]);
}
