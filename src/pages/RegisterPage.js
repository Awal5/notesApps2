import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import RegisterInput from "../components/RegisterInput";
import LocaleContext from "../Context/LocaleContext";

function RegisterPage() {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>{locale === "id" ? "Silahkan isi Data" : "Please fill The Data"}</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {locale === "id" ? "Kembali ke " : "Back to "}{" "}
        <Link to={"/"}>{locale === "id" ? "Masuk" : "Login"}</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
