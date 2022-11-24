let usersList = [];


function refreshRegisteredUsersInLocalStorage() {
	usersList = JSON.parse(window.localStorage.getItem("registratedUsersList"));
}
//  onload = (event) => refreshRegisteredUsersInLocalStorage();

function SignupLoadData() {
  let doesUserExistInSystem = false;

  const nicknameInput = document.querySelector("#nickname");
  const nicknameValue = nicknameInput.value;

  const emailLoginInput = document.querySelector("#email");
  const emailLoginValue = emailLoginInput.value;

  const passLoginInput = document.querySelector("#pass");
  const passLoginValue = passLoginInput.value;

  console.log(nicknameValue);
  console.log(emailLoginValue);
  console.log(passLoginValue);

  usersList.forEach((element) => {
    if (element.nickname === nicknameValue) {
      window.alert("użytkownik z takim nickiem już jest zarejestrowany");
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

  refreshRegisteredUsersInLocalStorage();
}
