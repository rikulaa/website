console.log("hello");

const THEME_KEY = "theme";
const themes = ["theme-dark", "theme-light"];

const themeSwitch = document.getElementById("theme-switch");
themeSwitch.addEventListener("click", e => {
  const currentTheme =
    document.body.className.match(/theme-[a-zA-Z]+/)[0] || null;
  const newTheme = currentTheme === themes[0] ? themes[1] : themes[0];
  setTheme(newTheme);
});

/**
 * Set the provided theme to webpage
 *
 * @param {string} newTheme
 */
const setTheme = newTheme => {
  const currentTheme =
    document.body.className.match(/theme-[a-zA-Z]+/)[0] || null;

  // Add the new theme
  document.body.classList.add(newTheme);
  const newIconEl = document.getElementById(`${newTheme}-icon`);
  newIconEl.classList.remove("hidden");

  // Remove old theme
  if (currentTheme && currentTheme !== newTheme) {
    document.body.classList.remove(currentTheme);
    document.getElementById(`${currentTheme}-icon`).classList.add("hidden");
  }
  localStorage.setItem(THEME_KEY, newTheme);
};

/**
 * Load initial theme for the webpage.
 * Will load "light" theme for day and "dark" theme for night.
 *
 * @param {string} theme
 * @returns
 */
const loadTheme = theme => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    setTheme(savedTheme);
    return;
  }
  // Set theme based on the time of day
  const currentHour = new Date().getHours();
  // Should be light theme
  if (currentHour > 9 || currentHour < 19) {
    setTheme(themes[1]);
  } else {
    setTheme(themes[0]);
  }
};

// Load theme for page
loadTheme();
