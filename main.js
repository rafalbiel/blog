let posts = [];

function refreshPostsInLocalStorage() {
	window.localStorage.setItem("postsInLocalStorage", JSON.stringify(posts));
}

function refreshPostsOnSceenBasedOnLocalStorage() {
	posts = JSON.parse(window.localStorage.getItem("postsInLocalStorage"));
	if (posts === null) posts = [];
}

window.onload = (event) => refreshPostsOnSceenBasedOnLocalStorage();

function counterRefresh() {
	const postCounter = document.querySelector("#post-counter");
	postCounter.innerHTML = `ilość postów: ${posts.length}`;
}

const loggedUserData = JSON.parse(
	window.localStorage.getItem("currentlyLogged")
);

const loggedDisplayer = document.querySelector("#currently-logged");
loggedDisplayer.innerHTML = `zalogowany: ${loggedUserData.nickname}`;

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

	// posts = JSON.parse(window.localStorage.getItem("postsInLocalStorage"));
	refreshPostsOnSceenBasedOnLocalStorage()

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

		const newPostAuthorElement = document.createElement("p");
		newPostAuthorElement.innerHTML = "post author: " + post.author;
		//zrobić find po liście users i sparować id z nickname

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
		singlePost.appendChild(newPostAuthorElement);
		singlePost.appendChild(newPostLikesElement);
		singlePost.appendChild(deletePostButton);
		singlePost.appendChild(addFiveLikesButton);
		singlePost.appendChild(substractTenLikesButton);
		counterRefresh();

		deletePostButton.onclick = () => {
			posts.splice(index, 1);
			refreshPostsInLocalStorage();
			renderContent();
		};

		addFiveLikesButton.onclick = () => {
			posts[index].likesCount += 5;
			refreshPostsInLocalStorage();
			renderContent();
		};

		substractTenLikesButton.onclick = () => {
			posts[index].likesCount -= 10;
			refreshPostsInLocalStorage();
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
		author: loggedUserData.id,
		likesCount: 0,
	});

	refreshPostsInLocalStorage();
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
			author: "anonymous",
			likesCount: 0,
		});
	});
	refreshPostsInLocalStorage();
	renderContent();
	const outsideDataButton = document.querySelector("#otside-data");
	outsideDataButton.disabled = true;
}

function logout() {
	window.alert("nastąpi wylogowanie");
	window.location.replace("login.html");
	window.localStorage.removeItem("currentlyLogged");
}

function filterByTitle() {}

renderContent();
