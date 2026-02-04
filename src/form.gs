function actualizarProductosEnForm() {
  const FORM_ID = '1FAIpQLScRou_4IvejNzmgRzWPu0EG1SG-GrbgQThsVj_36QgAqqeTrQ';
  const form = FormApp.openById(FORM_ID);

  const productos = getProductosActivos();
  const item = form.getItems(FormApp.ItemType.LIST)[0].asListItem();

  item.setChoiceValues(
    productos.map(p => `${p.id} - ${p.titulo}`)
  );
}
function onFormSubmit(e) {
  const respuestas = e.namedValues;

  const productoRaw = respuestas['Producto'][0];
  const productoId = productoRaw.split(' - ')[0];

  crearPedido({
    productoId: productoId,
    cliente: respuestas['Nombre'][0],
    whatsapp: respuestas['WhatsApp'][0],
    metodoPago: respuestas['Método de pago'][0],
    total: null
  });
}
