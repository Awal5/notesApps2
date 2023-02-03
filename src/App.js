import React, { useEffect, useState, useMemo } from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import ArchivePageWrapper from "./pages/ArchivePage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { LocaleProvider } from "./Context/LocaleContext";
import { ThemeProvider } from "./Context/ThemeContext";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import { FiMoon, FiSun } from "react-icons/fi";
import { MdGTranslate } from "react-icons/md";
import "./styles/style.css";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(null);

  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const lang = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", lang);
      return lang;
    });
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  useEffect(() => {
    async function setUserLogged() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    setUserLogged();
  }, []);

  if (initializing) {
    return <div className="spinner"></div>;
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={themeContextValue}>
        <LocaleProvider value={localeContextValue}>
          <div className="app-container">
            <header>
              <h1>
                <Link to="/">
                  {locale === "id" ? "Aplikasi Catatan" : "Note App"}
                </Link>
              </h1>
              <nav className="navigation">
                <ul>
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
                </ul>
              </nav>
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={themeContextValue}>
      <LocaleProvider value={localeContextValue}>
        <div className="app-container">
          <header>
            <h1>
              <Link to="/">
                {locale === "id" ? "Aplikasi Catatan" : "Note App"}
              </Link>
            </h1>
            <Navigation user={authedUser.name} logout={onLogout} />
          </header>

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="/archives" element={<ArchivePageWrapper />} />
              <Route path="/archives/notes/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
