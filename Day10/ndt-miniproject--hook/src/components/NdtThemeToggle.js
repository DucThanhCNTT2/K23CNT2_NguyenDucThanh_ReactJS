import { useTheme } from '../context/NdtThemeContext'

export default function NdtThemeToggle() {
    const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
        Chuyển sang {theme === "light" ? "Tối" : "Sáng"}
    </button>
  );
}
