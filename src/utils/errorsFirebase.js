export const errorsFirebase = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return {
        code: "email",
        message: "El correo ya se encuentrea en uso",
      };

    case "auth/invalid-email":
      return {
        code: "email",
        message: "Fomato de correo no váilido",
      };

    case "auth/user-not-found":
      return {
        code: "email",
        message: "El correo introducido no fue encontrado",
      };

    case "auth/weak-password":
      return {
        code: "password",
        message: "La contraseña es muy corta, mínimo 6 caracteres",
      };

    case "auth/wrong-password":
      return {
        code: "password",
        message: "Contraseña incorrecta",
      };

    default:
      return {
        code: "password",
        message: "Ocurrió un error en el servidor",
      };
  }
};
