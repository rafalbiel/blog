let doesUserExist = false;
function loginDataCheck() {
	const emailLoginInput = document.querySelector("#email");
	const emailLoginValue = emailLoginInput.value;

	const passLoginInput = document.querySelector("#pass");
	const passLoginValue = passLoginInput.value;

	const storedUsersList = JSON.parse(
		window.localStorage.getItem("registratedUsersList")
	);
	console.log(storedUsersList);

	storedUsersList.forEach((element) => {
		if (element.email === emailLoginValue && element.pass === passLoginValue) {
			return (doesUserExist = true);
		}
	});

	if (doesUserExist === true) {
		window.location.replace("index-reader.html");
	}
}
