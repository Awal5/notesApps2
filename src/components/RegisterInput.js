import React, { useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../Hooks/useInput";
import LocaleContext from "../Context/LocaleContext";

function RegisterInput({ register }) {
  const { locale } = useContext(LocaleContext);
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  return (
    <form className="input-register" onSubmit={onSubmitHandler}>
      <label htmlFor="name">{locale === "id" ? "Nama" : "Name"}</label>
      <input
        type="text"
        id="name"
        placeholder={locale === "id" ? "Masukkan Nama..." : "Enter the Name..."}
        value={name}
        onChange={onNameChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder={
          locale === "id" ? "Masukkan Email..." : "Enter the Email..."
        }
        value={email}
        onChange={onEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder={
          locale === "id" ? "Masukkan Password..." : "Enter the Password..."
        }
        value={password}
        onChange={onPasswordChange}
      />
      <button type="submit">{locale === "id" ? "Daftar" : "Register"}</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
