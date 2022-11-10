let posts = [];

posts[0] = {
	id: 1,
	title: "test1",
	body: "jakiś tekst w poscie 1 ",
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

function renderContent() {
	const rootElement = document.querySelector("#root");

	rootElement.innerHTML = "";

	posts.forEach((post) => {
		const newLabelPostIdElement = document.createElement("label");
		newLabelPostIdElement.innerHTML = "post Id: " + post.id + "<br>";

		const newLabelPostTitleElement = document.createElement("label");
		newLabelPostTitleElement.innerHTML = "post Title: " + post.title + "<br>";

		const newLabelPostBodyElement = document.createElement("label");
		newLabelPostIdElement.innerHTML = "post body: " + post.body + "<br>";

		const newLabelPostLikesElement = document.createElement("label");
		newLabelPostLikesElement.innerHTML =
			"post Likes: " + post.likesCount + "<br><br><br>";

		rootElement.appendChild(newLabelPostIdElement);
		rootElement.appendChild(newLabelPostTitleElement);
		rootElement.appendChild(newLabelPostBodyElement);
		rootElement.appendChild(newLabelPostLikesElement);
	});
}
renderContent();
