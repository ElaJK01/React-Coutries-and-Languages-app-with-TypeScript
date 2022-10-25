import { useEffect, useState } from "react";

const useThemeMode = (a?: string) => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () =>
    theme === "light" ? setMode("dark") : setMode("light");

  useEffect(() => {
    const storageTheme = window.localStorage.getItem("theme");
    storageTheme && setTheme(storageTheme);
  }, []);
  return [theme, themeToggler];
};

export default useThemeMode;
