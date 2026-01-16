console.log("<p>yoooo </p>");

const editProfileBtn = document.querySelector(".profile__button-edit");

const editProfileModal = document.querySelector("#edit-profile-modal");

const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

/*Selecters to open and close editProfileModal above this comment*/

const newPostBtn = document.querySelector(".profile__button-post");

const newPostModal = document.querySelector("#new-post-modal");

const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

/* Selecters to open and close newPostModal above this line*/

const editProfileName = document.querySelector(".profile__name");

const inputEditProfileName = editProfileModal.querySelector(
  "#profile-name-input"
);

const editProfileDescription = document.querySelector(".profile__description");

const inputEditProfileDescription = editProfileModal.querySelector(
  "#profile-description-input"
);
/*Selectors to fill in edit modal with current user data above this line*/

/* Selectors to edit profile content once save button is 
pressed below this line*/

const editProfileFormElement = editProfileModal.querySelector(".modal__form");

const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);

const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

/*IGNORE FOR NOW I MISREAD THE REQUIREMENTS
const newPostProfileName = document.querySelector(".profile__button-post");

const inputNewPostProfileName = newPostModal.querySelector("#new-post-modal");

const inputNewPostProfileCardImage =
  newPostModal.querySelector("#card-image-input");

const inputNewPostProfileCardCaption = newPostModal.querySelector(
  "#card-caption-input"
);

/*Selectors to fill in new post modal with current user data above this line
IGNORRRREEE THISSSS */

function fillInputFields() {
  inputEditProfileName.value = editProfileName.textContent;
  inputEditProfileDescription.value = editProfileDescription.textContent;
}

fillInputFields();
/*Filling in edit profile input fields with current user data above this line*/

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

/*event listeners for edit modal above this line*/

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

/*event listeners for new post modal above this line*/

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  I am going to be changing this right now!!!!!!!!
}

editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);
