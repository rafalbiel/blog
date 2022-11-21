let user = [
	{ id: 1, nickname: "belos", email: "belos25@poczta.fm", hasło: "lamer" },
	{ id: 2, nickname: "user2", email: "user2@gmail.com", hasło: "tezLamer" },
	{ id: 3, nickname: "user3", email: "user3@gmail.com", hasło: "strasznyLamer" },
];

const isUserLogged = false;


let posts = [
	{ id: 1, title: "test1", body: "jakiś tekst w poscie 1", likesCount: 0 },
	{ id: 2, title: "test2", body: "jakiś tekst w poscie 2", likesCount: 0 },
	{ id: 3, title: "test3", body: "jakiś tekst w poscie 3", likesCount: 0 },
];

function counterRefresh() {
	const postCounter = document.querySelector("#post-counter");
	postCounter.innerHTML = `ilość postów: ${posts.length}`;
}

function notification(newPostTitle) {
	const divNotificator = document.querySelector("#notification");
	divNotificator.innerHTML = `dodano nowy post o tytule ${newPostTitle}`;
	setTimeout(() => (divNotificator.innerHTML = ""), 3000);
}

const rootElement = document.querySelector("#root");

const formData = document.createElement("form");
rootElement.appendChild(formData);

function renderContent() {
	rootElement.innerHTML = "";

	const postsContainer = document.createElement("div");
	postsContainer.id = "posts-container";
	rootElement.appendChild(postsContainer);

	posts.forEach((post, index) => {
		const singlePost = document.createElement("div");
		singlePost.id = `post-${post.id}`;
		postsContainer.appendChild(singlePost);

		const newPostIdElement = document.createElement("p");
		newPostIdElement.innerHTML = "post Id: " + post.id;

		const newPostTitleElement = document.createElement("p");
		newPostTitleElement.innerHTML = "post Title: " + post.title;

		const newPostBodyElement = document.createElement("p");
		newPostBodyElement.innerHTML = "post body: " + post.body;

		const newPostLikesElement = document.createElement("p");
		newPostLikesElement.innerHTML = "post Likes: " + post.likesCount;

		const deletePostButton = document.createElement("button");
		deletePostButton.textContent = "usuń post";

		const addFiveLikesButton = document.createElement("button");
		addFiveLikesButton.textContent = "Likes +5";

		const substractTenLikesButton = document.createElement("button");
		substractTenLikesButton.textContent = "Likes -10";

		singlePost.appendChild(newPostIdElement);
		singlePost.appendChild(newPostTitleElement);
		singlePost.appendChild(newPostBodyElement);
		singlePost.appendChild(newPostLikesElement);
		singlePost.appendChild(deletePostButton);
		singlePost.appendChild(addFiveLikesButton);
		singlePost.appendChild(substractTenLikesButton);
		counterRefresh();

		deletePostButton.onclick = () => {
			posts.splice(index, 1);
			renderContent();
		};

		addFiveLikesButton.onclick = () => {
			posts[index].likesCount += 5;
			renderContent();
		};

		substractTenLikesButton.onclick = () => {
			posts[index].likesCount -= 10;
			renderContent();
		};
	});
}

function addPost(event) {
	const titleInput = document.querySelector("#post-title");
	const newPostTitle = titleInput.value;

	const bodyTextArea = document.querySelector("#new-post-body");
	const newPostBody = bodyTextArea.value;

	const lastPost = posts.length;
	const newPostId = lastPost + 1;
	console.log(newPostId);

	posts.push({
		id: newPostId,
		title: newPostTitle,
		body: newPostBody,
		likesCount: 0,
	});

	renderContent();
	notification(newPostTitle);
}

async function suckFromOutside(url) {
	const response = await fetch(url);
	const outsideData = await response.json();

	outsideData.forEach((el) => {
		posts.push({
			id: posts.length + 1,
			title: el.title,
			body: el.body,
			likesCount: 0,
		});
	});

	renderContent();
	const outsideDataButton = document.querySelector("#otside-data");
	outsideDataButton.disabled = true;
}

renderContent();
