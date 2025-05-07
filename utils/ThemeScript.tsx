export const applyStoredTheme = () => {
  try {
    // Check for stored theme preference
    const storedTheme = localStorage.getItem("theme") || "light";

    // Apply theme to document
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(storedTheme);
  } catch (e) {
    // Fallback if localStorage is not available
    console.error("Error accessing localStorage:", e);
  }
};
