import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { MdGTranslate } from "react-icons/md";
import PropTypes from "prop-types";
import LocaleContext from "../Context/LocaleContext";
import ThemeContext from "../Context/ThemeContext";

function Navigation({ logout, user }) {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/archives">{locale === "id" ? "Arsip" : "Archive"}</Link>
        </li>
        <li>
          <button className="toggle-locale" onClick={toggleLocale}>
            <MdGTranslate />
          </button>
        </li>
        <li>
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        </li>
        <li>
          <button className="button-logout" onClick={logout}>
            {user} <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default Navigation;
