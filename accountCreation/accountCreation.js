//Modal for signup
var signUpModal = document.querySelector("signupModal");
//Modal signup button
var signBtn = document.querySelector(".signBtn");
//open the modal
signBtn.onclick = function () {
	modal();
};
//close modal
const spanClose = document.querySelector(".close");
//close click
spanClose.onclick = function () {
	modal.hide();
};
//close by clicking outside of the window
window.onclick = function (b) {
	if (b.target == signupModal) {
		signupModal.hide();
	}
};
