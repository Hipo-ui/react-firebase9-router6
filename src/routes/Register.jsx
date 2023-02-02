import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import InputTextForm from "../components/InputTextForm";
import ErrorForm from "../components/ErrorForm";
import { formValidate } from "../utils/formValidate";
import { errorsFirebase } from "../utils/errorsFirebase";

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
      setError("firebase", {
        type: "custom",
        message: errorsFirebase(error.code),
      });
    }
  };

  return (
    <>
      <h2>Regístrate</h2>
      <ErrorForm error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextForm
          type="email"
          placeholder="Correo electrónico"
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
          {...register("password", {
            minLength: minLength,
            validate: validateTrim,
          })}
        >
          <ErrorForm error={errors.password} />
        </InputTextForm>

        <InputTextForm
          type="password"
          placeholder="Repita la contraseña"
          {...register("repeatPassword", {
            validate: validateEquals(getValues),
          })}
        >
          <ErrorForm error={errors.repeatPassword} />
        </InputTextForm>

        <button type="submit">Regístrate</button>
      </form>
    </>
  );
};

export default Register;
