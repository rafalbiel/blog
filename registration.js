let usersList = [];

function SignupLoadData() {
	usersList = JSON.parse(window.localStorage.getItem("registratedUsersList"));

	const nicknameInput = document.querySelector("#nickname");
	const nicknameValue = nicknameInput.value;

	const emailLoginInput = document.querySelector("#email");
	const emailLoginValue = emailLoginInput.value;

	const passLoginInput = document.querySelector("#pass");
	const passLoginValue = passLoginInput.value;

	console.log(nicknameValue);
	console.log(emailLoginValue);
	console.log(passLoginValue);

	const user = {
		id: usersList.length,
		nickname: nicknameValue,
		email: emailLoginValue,
		pass: passLoginValue,
	};
	usersList.push(user);

	window.localStorage.setItem(
		"registratedUsersList",
		JSON.stringify(usersList)
	);
}
// dopisać sprawdzanie czy nie ma już usera o takim samym nicku  
// i wyświetlić komunikat