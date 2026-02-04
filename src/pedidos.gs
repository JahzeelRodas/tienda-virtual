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
