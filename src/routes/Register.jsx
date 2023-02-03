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

const Register = () => {
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);

  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "hipo@mail.com",
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
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
      <Title title="Registro" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextForm
          type="email"
          placeholder="Correo electrónico"
          label="Tu correo electrónico"
          error={errors.email}
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        >
          <ErrorForm error={errors.email} />
        </InputTextForm>

        <InputTextForm
          type="text"
          placeholder="Contraseña"
          label="Tu contraseña"
          error={errors.password}
          {...register("password", {
            minLength: minLength,
            validate: validateTrim,
          })}
        >
          <ErrorForm error={errors.password} />
        </InputTextForm>

        <InputTextForm
          type="text"
          placeholder="Repite la contraseña"
          label="Repite tu contraseña"
          error={errors.repeatPassword}
          {...register("repeatPassword", {
            validate: validateEquals(getValues),
          })}
        >
          <ErrorForm error={errors.repeatPassword} />
        </InputTextForm>

        <Button type="submit" text="Regístrate" />
      </form>
    </>
  );
};

export default Register;
