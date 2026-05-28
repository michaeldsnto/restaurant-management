import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme =
  "dark" | "light";

type ThemeContextType = {

  theme: Theme;

  toggleTheme: () => void;

};

const ThemeContext =
  createContext<ThemeContextType | null>(
    null
  );

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [theme, setTheme] =
    useState<Theme>("dark");

  useEffect(() => {

    document.documentElement.classList
      .remove("light", "dark");

    document.documentElement.classList
      .add(theme);

  }, [theme]);

  const toggleTheme = () => {

    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    );
  };

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>

  );
}

export const useTheme = () => {

  const context =
    useContext(ThemeContext);

  if (!context) {

    throw new Error(
      "useTheme must be used within ThemeProvider"
    );
  }

  return context;
};