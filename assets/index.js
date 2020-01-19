const THEME_KEY = "theme";
const themes = ["dark", "light"];

// setup listener
window.addEventListener('load', function () {
  const themeSwitch = document.getElementById("theme-switch");
  if (themeSwitch) {
    themeSwitch.addEventListener("click", e => {
      const currentTheme = sessionStorage.getItem(THEME_KEY);
      const newTheme = currentTheme === themes[0] ? themes[1] : themes[0];
      setTheme(newTheme);

      const newIconEl = document.getElementById(`${newTheme}-icon`);
      if (newIconEl) {
        newIconEl.classList.remove("hidden");
      }


      // Remove old theme
      // if (currentTheme && currentTheme !== newTheme) {
      //   // document.body.classList.remove(currentTheme);
      //   const currentThemeIcon = document.getElementById(`${currentTheme}-icon`);
      //   if (currentThemeIcon) {
      //     currentThemeIcon.classList.add("hidden");
      //   }
      // }
    });
  }
})

/**
 * Set the provided theme to webpage
 *
 * @param {string} newTheme
 */
const setTheme = newTheme => {
  document.documentElement.setAttribute('data-theme', newTheme);
  sessionStorage.setItem(THEME_KEY, newTheme);
};

/**
 * Load initial theme for the webpage.
 * Will load "light" theme for day and "dark" theme for night.
 *
 * @param {string} theme
 * @returns
 */
const loadTheme = theme => {
  // Load theme from sessionStorage if it exists
  const savedTheme = sessionStorage.getItem(THEME_KEY);
  if (savedTheme) {
    setTheme(savedTheme);
    return;
  }

  // Load theme based on the OS's preferred color scheme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme(themes[0]);
    return;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    setTheme(themes[1]);
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
