"use client";

import React from "react";

type mode = "light" | "dark";
type InitialeValue = {
  theme: mode;
  setTheme: undefined | React.Dispatch<React.SetStateAction<{ theme: mode }>>;
};

const defaultTheme = "dark";
export const theme = React.createContext<InitialeValue>({
  theme: defaultTheme,
  setTheme: undefined,
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeValue, setThemeValue] = React.useState<{
    theme: mode;
  }>({
    theme: defaultTheme,
  });

  React.useEffect(() => {
    if (themeValue.theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [themeValue]);

  return (
    <theme.Provider
      value={{ theme: themeValue.theme, setTheme: setThemeValue }}
    >
      {children}
    </theme.Provider>
  );
};

export default ThemeProvider;
