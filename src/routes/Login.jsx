import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("hipo@mail.com");
  const [password, setPassword] = useState("123123");
  const { loginUser } = useContext(UserContext);
  const navegate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Procesando form: ", email, password);
    try {
      await loginUser(email, password);
      console.log("Usuario logueado");
      navegate("/");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <h2>Inicia sesión</h2>
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
        <button type="submit">Inicia sesión</button>
      </form>
    </>
  );
};

export default Login;
