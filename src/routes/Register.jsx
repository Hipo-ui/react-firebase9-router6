import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Procesando form: ", email, password);
    try {
      await registerUser(email, password);
      console.log("Usuario creado");
      navegate("/");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingrese un correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese una contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Regístrate</button>
      </form>
    </>
  );
};

export default Register;
