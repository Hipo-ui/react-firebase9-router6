import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import InputTextForm from "../components/InputTextForm";
import ErrorForm from "../components/ErrorForm";
import { formValidate } from "../utils/formValidate";
import { errorsFirebase } from "../utils/errorsFirebase";
import Title from "../components/Title";
import Button from "../components/Button";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const navegate = useNavigate();

  const { required, patternEmail, minLength, validateTrim } = formValidate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password);
      navegate("/");
    } catch (error) {
      console.log(error.code);
      const { code, message } = errorsFirebase(error.code);
      setError(code, {
        type: "custom",
        message: message,
      });
    }
  };

  return (
    <>
      <Title title="Inicio de sesión" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextForm
          type="email"
          placeholder="Correo electrónico"
          label="Ingresa tu correo"
          error={errors.email}
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        >
          <ErrorForm error={errors.email} />
        </InputTextForm>

        <InputTextForm
          type="password"
          placeholder="Contraseña"
          label="Ingresa tu contraseña"
          error={errors.password}
          {...register("password", {
            minLength: minLength,
            validate: validateTrim,
          })}
        >
          <ErrorForm error={errors.password} />
        </InputTextForm>

        <Button type="submit" text="Inicia sesión" />
      </form>
    </>
  );
};

export default Login;
