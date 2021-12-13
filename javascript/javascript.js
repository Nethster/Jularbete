const themeSwitcher = () => {
    document.getElementsByTagName('html')[0].className = document.getElementsByTagName('html')[0].className === 'light' ? 'dark' : 'light'
}

const toggle = document.getElementById("chk");

toggle.addEventListener("change", () => {
	//theme change
	document.body.classList.toggle("dark");
});
