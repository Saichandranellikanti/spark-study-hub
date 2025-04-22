
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());

  function getInitialTheme(): "light" | "dark" {
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = window.localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    }
    return "light";
  }

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className="rounded-full p-2 bg-secondary/60 hover:bg-accent transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-spark-light" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </button>
  );
}
