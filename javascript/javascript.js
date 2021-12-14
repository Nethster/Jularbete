const themeSwitcher = () => {
	document.getElementsByTagName("html")[0].className =
		document.getElementsByTagName("html")[0].className === "light"
			? "dark"
			: "light";
};

//setting up local storage for darktheme to follow through several pages
let darkMode = localStorage.getItem("darkMode");

// toggle for the dark mode
const toggle = document.querySelector("#chk");

// All selectors and functions for the full effect across all pages by storing it.
const enableDarkMode = () => {
	document.body.classList.toggle("dark");
	document.body.classList.add("darkMode");
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	document.body.classList.toggle("dark");
	document.body.classList.remove("darkMode");
	localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
	enableDarkMode();
}

toggle.addEventListener("change", () => {
	darkMode = localStorage.getItem("darkMode");

	if (darkMode !== "enabled") {
		enableDarkMode();
		console.log(darkMode);
	} else {
		disableDarkMode();
		console.log(darkMode);
	}
});
