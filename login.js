let doesUserExist = false;
function loginDataCheck() {
	const emailLoginInput = document.querySelector("#email");
	const emailLoginValue = emailLoginInput.value;

	const passLoginInput = document.querySelector("#pass");
	const passLoginValue = passLoginInput.value;

	const storedUsersList = JSON.parse(
		window.localStorage.getItem("registratedUsersList")
	);

	storedUsersList.forEach((element) => {
		if (element.email === emailLoginValue && element.pass === passLoginValue)
			window.localStorage.setItem("currentlyLogged", JSON.stringify(element));

		return (doesUserExist = true);
	});
	if (doesUserExist === true) {
		window.location.replace("index-reader.html");
	}
}
