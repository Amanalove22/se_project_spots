const initialCards = [
  {
    name: "The minds of wanting eyes",
    link: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "On a hill top in Costa Rica ",
    link: "https://images.unsplash.com/photo-1582218290380-ae58573670e3?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Vladimir from Russia",
    link: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Snow day featuring New York City",
    link: "https://images.unsplash.com/photo-1542389266-f8b2d4f94e54?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Just a girl's morning routine",
    link: "https://images.unsplash.com/photo-1551723454-7565a1f5b161?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Another home aka a Roller Rink",
    link: "https://images.unsplash.com/photo-1593029352324-5d8a5230d224?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "The friendly skies",
    link: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
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

/* Card List Selector below this line*/

const cardsList = document.querySelector(".cards__list");

/* Card Template Selector below this line*/

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

/* Preview modal Selectors below this line*/

const modalPreview = document.querySelector("#preview-modal");

const modalPreviewCloseBtn = modalPreview.querySelector(
  ".modal__close-btn_type_preview"
);

const modalPreviewImage = modalPreview.querySelector(".modal__image");

const modalPreviewCaption = modalPreview.querySelector(".modal__caption");

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

modalPreviewCloseBtn.addEventListener("click", function () {
  closeModal(modalPreview);
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
  const data = { name: newPostNameInput.value, link: newPostLinkInput.value };
  const cardItem = getCardElement(data);

  console.log(newPostNameInput.value);
  console.log(newPostLinkInput.value);

  cardsList.prepend(cardItem);
  evt.target.reset();

  closeModal(newPostModal);
}

newPostFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
});

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");

  const cardImg = cardElement.querySelector(".card__image");

  cardImg.src = data.link;

  cardImg.alt = data.name;

  cardTitle.textContent = data.name;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", function () {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", function () {
    cardElement.remove();
  });

  cardImg.addEventListener("click", function () {
    modalPreviewCaption.textContent = data.name;
    modalPreviewImage.src = data.link;
    modalPreviewImage.alt = data.name;

    openModal(modalPreview);
  });

  return cardElement;
}

initialCards.forEach(function (item) {
  const cardItem = getCardElement(item);

  cardsList.prepend(cardItem);
});
