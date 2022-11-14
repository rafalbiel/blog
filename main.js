let posts = [
	{ id: 1, title: "test1", body: "jakiś tekst w poscie 1", likesCount: 0 },
	{ id: 2, title: "test2", body: "jakiś tekst w poscie 2", likesCount: 0 },
	{ id: 3, title: "test3", body: "jakiś tekst w poscie 3", likesCount: 0 },
];

const postCounter = document.querySelector("#post-counter");
postCounter.innerHTML = `ilość postów: ${posts.length}`;
console.log(postCounter);


// jak odświeżać licznik postów


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
	//  event.preventDefault();

	const titleInput = document.querySelector("#post-title");
	const newPostTitle = titleInput.value;
	
	const bodyTextArea = document.querySelector("#new-post-body");
	const newPostBody = bodyTextArea.value;
	
	const lastPost = posts[posts.length - 1];
	const newPostId = lastPost.id + 1;
	
	posts.push({
		id: newPostId,
		title: newPostTitle,
		body: newPostBody,
		likesCount: 0,
	});
	
	jak skrolować content, żeby ostani post był widoczny
	// window.scroll({
	// 	top: 50,
	// 	left: 0,
	// 	behavior: "smooth",
	// });
	renderContent();
}

renderContent();
