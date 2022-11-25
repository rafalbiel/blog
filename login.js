function loginDataCheck() {
  let doesUserExist = false;

  const emailLoginInput = document.querySelector("#email");
  const emailLoginValue = emailLoginInput.value;

  const passLoginInput = document.querySelector("#pass");
  const passLoginValue = passLoginInput.value;

  const storedUsersList = JSON.parse(
    window.localStorage.getItem("registratedUsersList")
  );

  if (emailLoginValue === "" || passLoginValue === "") {
    window.alert("nie wszystkie pola zostały wypełnione");
    return;
  }

  storedUsersList.forEach((element) => {
    if (element.email === emailLoginValue && element.pass === passLoginValue) {
      console.log(element);
      window.localStorage.setItem("currentlyLogged", JSON.stringify(element));
      window.location.replace("index-reader.html");

      return (doesUserExist = true);
    }
  });

  if (doesUserExist === false) window.alert("błędny login lub hasło");
}
