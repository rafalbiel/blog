let usersList = [];

function refreshScreenBaseOnLocalStorage() {
	usersList = JSON.parse(window.localStorage.getItem("registratedUsersList"));
	if (usersList === null) usersList = [];
}
onload = (event) => refreshScreenBaseOnLocalStorage();

function SignupLoadData() {
	let doesUserExistInSystem = false;

	const nicknameInput = document.querySelector("#nickname");
	const nicknameValue = nicknameInput.value;

	const emailLoginInput = document.querySelector("#email");
	const emailLoginValue = emailLoginInput.value;

	const passLoginInput = document.querySelector("#pass");
	const passLoginValue = passLoginInput.value;

	if (nicknameValue === "" || emailLoginValue === "" || passLoginValue === "") {
		window.alert("nie wszystkie pola zostały wypełnione");
		return;
	}

	usersList.forEach((element) => {
		if (
			element.nickname === nicknameValue ||
			element.email === emailLoginValue
		) {
			window.alert(
				"użytkownik z takim nickiem lub adresem email już jest zarejestrowany"
			);
			doesUserExistInSystem = true;
			return;
		}
	});
	if (doesUserExistInSystem === false) {
		const user = {
			id: usersList.length + 1,
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

	refreshScreenBaseOnLocalStorage();
}
