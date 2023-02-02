export const errorsFirebase = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "El correo ya se encuentrea en uso";

    case "auth/invalid-email":
      return "Fomato de correo no váilido";

    case "auth/weak-password":
      return "La contraseña es muy corta, mínimo 6 caracteres";

    case "auth/user-not-found":
      return "El correo introducido no fue encontrado";

    case "auth/wrong-password":
      return "Contraseña incorrecta"

    default:
      return "Ocurrió un error en el servidor";
  }
};
