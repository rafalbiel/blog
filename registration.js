const usersList = [];

function SignupLoadData() {
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
