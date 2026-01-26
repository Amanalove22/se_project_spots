const initialCards = [
  (object = {
    name: "On a hill top in Costa Rica ",
    link: "https://unsplash.com/photos/green-trees-on-brown-mountain-beside-blue-sea-during-daytime-3C0zrQUlyjM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
  }),
  (object = {
    name: "Vladimir from Russia",
    link: "https://unsplash.com/photos/selective-focus-photography-of-orange-and-white-cat-on-brown-table-75715CVEJhI",
  }),
  (object = {
    name: "Snowed in featuring New York",
    link: "https://unsplash.com/photos/people-walking-near-road-and-different-cars-on-road-during-night-time-D6W63o3ZLQY",
  }),
  (object = {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  }),
  (object = {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  }),
  (object = {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  }),
];

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

const newPostFormElement = newPostModal.querySelector(".modal__form");

const newPostNameInput = newPostModal.querySelector("#card-caption-input");

const newPostLinkInput = newPostModal.querySelector("#card-image-input");

/* No confusion above and below are diffrent things*/

function fillInputFields() {
  inputEditProfileName.value = editProfileName.textContent;
  inputEditProfileDescription.value = editProfileDescription.textContent;
}

fillInputFields();
/*Filling in edit profile input fields with current user data above this line*/

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}
/*modal open and close function above this line*/

editProfileBtn.addEventListener("click", function () {
  fillInputFields();
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

/*event listeners for edit modal above this line*/

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

/*event listeners for new post modal above this line*/

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  editProfileName.textContent = inputEditProfileName.value;
  editProfileDescription.textContent = inputEditProfileDescription.value;

  closeModal(editProfileModal);
}

editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);

/*function for edit profile above this line*/

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(newPostNameInput.value);
  console.log(newPostLinkInput.value);

  evt.target.reset();

  closeModal(newPostModal);
}

newPostFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
});
