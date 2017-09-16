export const button = document.querySelector("button");
export const description = document.querySelector("div");

export function buttonClicked() {
	button.innerHTML = "clicked";
}

export function descriptionUpdated() {
	description.innerHTML = "The description has now changed, a snapshot test will verify this.";
}

button.addEventListener("click", buttonClicked);
description.addEventListener("click", descriptionUpdated);
