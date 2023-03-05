let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');

let nameInput = document.querySelector('.popup__input_name_name');
let nameInfo = document.querySelector('.profile__title');

let jobInput = document.querySelector('.popup__input_name_profession');
let jobInfo = document.querySelector('.profile__description');

let addButton = document.querySelector('.profile__add-button');




//открытие попапа Эдит//
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
}
//закрытие попапа Эдит//
function closePopup() {
  popup.classList.remove('popup_opened');
};
//кнопна сохранить в попапе Эдит батон//
function handleFormSubmit(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
  closePopup();
};

//колбэк на открытие попапа Эдит//
editButton.addEventListener('click', function() {
  openPopup();
});
//колбэк на закрытие попапа Эдит//
closeButton.addEventListener('click', function () {
  closePopup();
});
//колбэк на кнопку сохранить в Эдит попап Эдит//
formElement.addEventListener('submit', handleFormSubmit);
