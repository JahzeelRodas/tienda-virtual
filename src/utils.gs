function isAdmin() {
  const email = Session.getActiveUser().getEmail();
  const admins = ['jahzeelrodas@gmail.com']; // luego será el del cliente
  return admins.includes(email);
}
