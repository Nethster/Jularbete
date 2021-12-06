const toggle = document.getElementById("chk");

toggle.addEventListener("change", () => {
	//theme change
	document.body.classList.toggle("dark");
});
