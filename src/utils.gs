function isAdmin() {
  const email = Session.getActiveUser().getEmail();
  const admins = ['tucorreo@gmail.com']; // luego será el del cliente
  return admins.includes(email);
}
