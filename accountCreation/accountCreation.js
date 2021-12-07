//get modal element

var modal = document.querySelector("#signUpModal");

//get open modal button
var modalBtn = document.querySelector("#modalBtn");

// close button

var closeBtn = document.querySelector(".closeBtn");

//listen for open click
modalBtn.addEventListener("click", openModal);

//listen for close click
closeBtn.addEventListener("click", closeModal);

//Listen for outside click to close
window.addEventListener("click", clickOutside);

//function to open modal
function openModal() {
	modal.style.display = "block";
}

//function to close modal
function closeModal() {
	modal.style.display = "none";
}
//clicking outside of the modal closes the modal
function clickOutside(e) {
	if (e.target == modal) {
		modal.style.display = "none";
	}
}
