import React, { useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../Hooks/useInput";
import LocaleContext from "../Context/LocaleContext";

function LoginInput({ login }) {
  const { locale } = useContext(LocaleContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form className="input-login" onSubmit={onSubmitHandler}>
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
      <button type="submit">{locale === "id" ? "Masuk" : "Login"}</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
