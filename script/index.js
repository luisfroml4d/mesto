let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let submitButton = document.querySelector('.popup__button-save');

let nameInput = document.querySelector('.popup__input_name_name');
let nameInfo = document.querySelector('.profile__title');

let jobInput = document.querySelector('.popup__input_name_profession');
let jobInfo = document.querySelector('.profile__description');


function openPopup() {
  popup.classList.remove('popup_opened');
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
}

function closePopup() {
  popup.classList.add('popup_opened');
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
  closePopup();
};


editButton.addEventListener('click', function() {
  openPopup();
});

closeButton.addEventListener('click', function () {
  closePopup();
});

formElement.addEventListener('submit', handleFormSubmit);
