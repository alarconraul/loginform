function submitInfo() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let userPassword = document.getElementById("userPassword").value;

  if (firstName == "") {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (firstName.length > 30) {
    alert("El firstName es muy largo");
    return false;
  }

  if (lastName == "") {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (lastName.length > 80) {
    alert("El apellido es muy largo");
    return false;
  }

  if (email == "") {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (email.length > 100) {
    alert("El email es muy largo");
    return false;
  }

  if (username == "") {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (username.length > 20) {
    alert("El usuario es muy largo");
    return false;
  }

  let hello = alert(`¡Muchas gracias por registrarte, ${firstName}! \nTu usuario es ${username} y tu contraseña es ${userPassword}.`);
}
