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

//adds darkmode to localstorage
const enableDarkMode = () => {
	document.body.classList.toggle("dark");
	document.body.classList.add("darkMode");
	localStorage.setItem("darkMode", "enabled");
};

//removes darkmode from local storage
const disableDarkMode = () => {
	document.body.classList.toggle("dark");
	document.body.classList.remove("darkMode");
	localStorage.setItem("darkMode", null);
};

//looks for darkmode in local storage to enable it if it was enabled on last visit
if (darkMode === "enabled") {
	enableDarkMode();
}

//works the change by activating or deactivating
toggle.addEventListener("change", () => {
	darkMode = localStorage.getItem("darkMode");

	if (darkMode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
