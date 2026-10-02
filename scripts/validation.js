const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__btn-inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
};
/* Since I am working backwards this is the 4th part

The following two functions show and hide the error message that lets users know
when and where they have made a mistake*/

/*This function displays the error message it 
1st takes 3 parameters the modal itself, the input field with a problem, and the text of the eror message
2nd goes into modalElement, selects the error message and puts it into the variable modalError
3rd adds a class to the input element itself which changes its appearance 
4th sets the text inside the error messgae element to the string passed in as error message
5th adds a class to modalError which makes its prorperties active and show the user    */
const showInputError = (
  modalElement,
  modalInputElement,
  config,
  errorMessage,
) => {
  const modalError = modalElement.querySelector(
    `#${modalInputElement.id}-error`,
  );

  modalInputElement.classList.add(config.inputErrorClass);
  modalError.textContent = errorMessage;
  modalError.classList.add(config.errorClass);
};

/*This function removes the display of the error message it
1st takes 2 parameters the modal itself and the input field who no longer has problem
2nd goes into modalElement, selects the error message and puts it into the variable modalError
3rd removes the error class from the input element renewing its appearance
4th removes the active class to modalError which makes its properties inactive to the users screen
5th clears the text content of the error message */

const hideInputError = (modalElement, modalInputElement, config) => {
  const modalError = modalElement.querySelector(
    `#${modalInputElement.id}-error`,
  );

  modalInputElement.classList.remove(config.inputErrorClass);
  modalError.classList.remove(config.errorClass);
  modalError.textContent = "";
};

/*This function is the third part it 
1st goes into the modal it is passed and checks whether each character inputed
 is valid with the validity.valid property
2nd Depending on whether the input is valid or not it shows or does not show the error message*/
const checkInputValidity = (modalElement, modalInputElement, config) => {
  if (!modalInputElement.validity.valid) {
    showInputError(
      modalElement,
      modalInputElement,
      config,
      modalInputElement.validationMessage,
    );
  } else {
    hideInputError(modalElement, modalInputElement, config);
  }
};

/*This function is the 5th part  */
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//This function is the 6th part
const toggleButtonState = (inputList, submitBtn, config) => {
  if (hasInvalidInput(inputList)) {
    submitBtn.classList.add(config.inactiveButtonClass);
  } else {
    submitBtn.classList.remove(config.inactiveButtonClass);
  }
};

/* This function is the second part it will
1st select all the inputs into a variable modalInputList
- then iterates through the inputs adding an event listener to all of them
- inside the event listener I call the checkInputValidity function which 
  makes sure each input is valid and follows the rules

  2nd selects the submit button in variable submitBtn
*/
const setEventListener = (modalElement, config) => {
  const modalInputList = Array.from(
    modalElement.querySelectorAll(config.inputSelector),
  );

  const submitBtn = modalElement.querySelector(config.submitButtonSelector);
  toggleButtonState(modalInputList, submitBtn, config);

  modalInputList.forEach((modalInputElement) => {
    modalInputElement.addEventListener("input", function () {
      checkInputValidity(modalElement, modalInputElement, config);
      toggleButtonState(modalInputList, submitBtn, config);
    });
  });
};

/* This function is the beginning it will 
1st select all of the modals in variable modalList
2nd Then iterate through the modals 
3rd set the necessary event listeners which makes it all work*/
const enableValidation = (config) => {
  const modalList = Array.from(document.querySelectorAll(config.formSelector));

  modalList.forEach((modalElement) => {
    setEventListener(modalElement, config);
  });
};

enableValidation(settings);
