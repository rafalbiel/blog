let posts = [];

posts[0] = {
	id: 1,
	title: "test1",
	body: "jakiś tekst w poscie 1",
	likesCount: 0,
};
posts[1] = {
	id: 2,
	title: "test2",
	body: "jakiś tekst w poscie 2",
	likesCount: 0,
};
posts[2] = {
	id: 3,
	title: "test3",
	body: "jakiś tekst w poscie 3",
	likesCount: 0,
};

const rootElement = document.querySelector("#root");

rootElement.innerHTML = "";

posts.forEach((post) => {
	const newLabelElement = document.createElement("label");
	newLabelElement.innerHTML =
		"post Id:" + post.id + "<br>" + post.title + "  " + post.body + "<br>";
	rootElement.appendChild(newLabelElement);
});
