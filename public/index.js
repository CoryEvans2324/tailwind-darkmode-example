if (!("theme" in localStorage)) {
	matchOSThemePreference();
}

function matchOSThemePreference() {
	localStorage.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	SetDarkMode();
}

function SetDarkMode() {
	if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
}

function switchTheme() {
	localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
	SetDarkMode();
}

SetDarkMode();
