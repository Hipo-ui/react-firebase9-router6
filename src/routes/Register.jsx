import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);

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
      console.log(email, password);
      await registerUser(email, password);
      console.log("Usuario creado");
      navegate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("email", {
            type: "custom",
            message: "El correo ya se encuentrea en uso",
          });
          break;

        case "auth/invalid-email":
          setError("email", {
            type: "custom",
            message: "Fomato de correo no váilido",
          });
          break;

        case "auth/weak-password":
          setError("password", {
            type: "custom",
            message: "La contraseña es muy corta, mínimo 6 caracteres",
          });
          break;

        default:
          console.log("Ocurrió un error en el servidor");
          break;
      }
    }
  };

  return (
    <>
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Correo"
          {...register("email", {
            required: {
              value: true,
              message: "Ingresa un correo",
            },
            pattern: {
              value:
                /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Ingresa un formato de correo válido",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            minLength: {
              value: 6,
              message: "La contraseña debe ser de mínimo 6 caracteres",
            },
            validate: {
              trim: (v) => {
                if (!v.trim()) return "Escribe algo";
                return true;
              },
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <input
          type="password"
          placeholder="Repita la contraseña"
          {...register("repeatPassword", {
            validate: {
              equals: (v) =>
                v === getValues("password") || "Las contraseñas no coinciden",
            },
          })}
        />
        {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}

        <button type="submit">Regístrate</button>
      </form>
    </>
  );
};

export default Register;
