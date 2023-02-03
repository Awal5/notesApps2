import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import LocaleContext from "../Context/LocaleContext";

function LoginPage({ loginSuccess }) {
  const { locale } = useContext(LocaleContext);
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>
        {locale === "id"
          ? "Masuk untuk melanjutkan..."
          : "Login to Continue..."}
      </h2>
      <LoginInput login={onLogin} />
      <p>
        {locale === "id" ? "Belum punya Akun ? " : "Don't Have Account ? "}
        <Link to="/register">
          {locale === "id" ? " Daftar Disini!" : " Register Here!"}
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
