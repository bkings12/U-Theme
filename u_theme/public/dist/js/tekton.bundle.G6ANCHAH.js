(() => {
  // ../u_theme/u_theme/public/js/theme-switcher.js
  frappe.provide("frappe.ui");
  frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
      super();
    }
    fetch_themes() {
      return new Promise((resolve) => {
        this.themes = [
          {
            name: "light",
            label: "Frappe Light",
            info: "Light Theme"
          },
          {
            name: "dark",
            label: "Timeless Night",
            info: "Dark Theme"
          },
          {
            name: "automatic",
            label: "Automatic",
            info: "Uses system's theme to switch between light and dark mode"
          },
          {
            name: "u-blue",
            label: "u-Blue",
            info: "u Blue"
          }
        ];
        resolve(this.themes);
      });
    }
  };

  // ../u_theme/u_theme/public/js/u.bundle.js
  console.log("INJECTED FILE");
})();
//# sourceMappingURL=u.bundle.G6ANCHAH.js.map
