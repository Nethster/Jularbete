//Modal for Login

//get modal element
var modal = document.querySelector("#signUpModal");
//get open modal button
var modalBtn = document.querySelector("#modalBtn");
// close button
var closeBtn = document.querySelector(".closeBtn");

//modal for F.A.Q

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

//Localstorage for member registration

function saveData() {
	let user, psw, email;
	user = document.querySelector("#userID").value;
	psw = document.querySelector("#passwordID").value;
	email = document.querySelector("#emailID").value;

	let memberRecords = new Array();

	memberRecords = JSON.parse(localStorage.getItem("users"))
		? JSON.parse(localStorage.getItem("users"))
		: [];
	if (
		memberRecords.some((x) => {
			return x.email == email;
		})
	) {
		alert("Email already in use");
	} else if (
		memberRecords.some((z) => {
			return z.username == user;
		})
	) {
		alert("Username already in use");
	} else {
		memberRecords.push({
			username: user,
			password: psw,
			email: email,
		});
		localStorage.setItem("users", JSON.stringify(memberRecords));
	}
}

/* 
	localStorage.setItem("username", user);
	localStorage.setItem("password", psw);
	localStorage.setItem("email", email); */

//get modal element
var modal = document.querySelector(".faqModal");
//get open modal button
var modalBtn = document.querySelector("#faqModalAct");
// close button
var closeBtn = document.querySelector(".closeBtn");
