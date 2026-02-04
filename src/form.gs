function actualizarProductosEnForm() {
  const FORM_ID = 'PEGA_AQUI_EL_FORM_ID';
  const form = FormApp.openById(FORM_ID);

  const productos = getProductosActivos();
  const item = form.getItems(FormApp.ItemType.LIST)[0].asListItem();

  item.setChoiceValues(
    productos.map(p => `${p.id} - ${p.titulo}`)
  );
}
