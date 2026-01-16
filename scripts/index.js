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

/* Selectors to edit profile content and new post content once save button is 
pressed below this line*/

const editProfileFormElement = editProfileModal.querySelector(".modal__form");

const newPostProfileFormElement = newPostModal.querySelector(".modal__form");

const newPostNameInput = newPostModal.querySelector("#card-caption-input");

const newPostLinkInput = newPostModal.querySelector("#card-image-input");

/* No confusion above and below are diffrent things*/

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
  editProfileName.textContent = inputEditProfileName.value;
  editProfileDescription.textContent = inputEditProfileDescription.value;

  editProfileModal.classList.remove("modal_is-opened");
}

editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);

/*function for edit profile above this line*/

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(newPostNameInput.value);
  console.log(newPostLinkInput.value);

  newPostModal.classList.remove("modal_is-opened");
}

newPostProfileFormElement.addEventListener("submit", handleAddCardSubmit);
