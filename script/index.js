const popupEdit = document.querySelector('.popup_type-edit');
const profileForm = document.querySelector('.popup__form-profile');

const editButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('.popup__button-close');

const nameInput = document.querySelector('.popup__input_name_name');
const nameInfo = document.querySelector('.profile__title');

const jobInput = document.querySelector('.popup__input_name_profession');
const jobInfo = document.querySelector('.profile__description');

const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type-add');
const closeAddButton = document.querySelector('.popup__button-close-add');

const templateElement = document.querySelector('#elementTemplate').content;

const buttonPopupEdit = document.querySelector('.popup__button-edit');
const buttonPopupAdd = document.querySelector('.popup__button-add');

const inputAddName = document.querySelector('.popup__input_name_title-card');
const inputAddLink = document.querySelector('.popup__input_name_link-card');
const formAddCard = document.querySelector('.popup__form-card');

const popupImage = document.querySelector('.popup_image');
const popupCaption = document.querySelector('.popup__caption');
const popupCardImage = document.querySelector('.popup__card-image');
const closeImageButton = document.querySelector('.popup__button-close-image');


function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

function closePopupByClick(evt) {
  closePopup(evt.target);
 };

//открытие попап//
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popupElement.addEventListener('mousedown', closePopupByClick);
}
//закрытие попап//
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  popupElement.removeEventListener('mousedown', closePopupByClick);
};

//кнопна сохранить в попапе Эдит батон//
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
  closePopup(popupEdit);
};
//колбэк на открытие попапа Эдит//
editButton.addEventListener('click', function() {
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  openPopup(popupEdit);
  resetInput(profileForm);
  enableButton(buttonPopupEdit, config);
});
//колбэк на закрытие попапа Эдит//
profileCloseButton.addEventListener('click', function () {
  closePopup(popupEdit);
});
//колбэк на кнопку сохранить в Эдит попап Эдит//
profileForm.addEventListener('submit', handleProfileFormSubmit);



//колбэк на открытие попапа Адд//
addButton.addEventListener('click', function() {
  openPopup(popupAdd);
  formAddCard.reset();
  enableButton(buttonPopupAdd, config);
  resetInput(formAddCard);
});
//колбэк на закрытие попапа Адд//
closeAddButton.addEventListener("click", function () {
  closePopup(popupAdd);
});
//Массив изображений с заголовками//
const photoCards = [
  {
    name: 'Архыз',
    link: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_307.jpg'
  },
  {
    name: 'Челябинская область',
    link: './images/dombai.png'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

const cards = document.querySelector('.elements');

function createCard(card) {
  const cardTemplate = templateElement.querySelector(".element-item").cloneNode(true);
  const cardImage = cardTemplate.querySelector(".element-item__image");
  const cardTitle = cardTemplate.querySelector(".element-item__title");
  cardTitle.textContent = card.name;

  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);

  //Кнопка Лайк//
  const likeButton = cardTemplate.querySelector('.element-item__like');
  likeButton.addEventListener('click', function(evt) {
  evt.target.classList.toggle('element-item__like_active')
});


//Кнопка Удалить//
const deleteButton = cardTemplate.querySelector('.element-item__photo-basket');
deleteButton.addEventListener('click', function() {
  const deleteElement = deleteButton.closest('.element-item');
  console.log(deleteElement);
  deleteElement.remove();
 });


 //Окно карточки//
 function openPopupImg(card) {
  popupCardImage.src = card.link;
  popupCaption.textContent = card.name;
  popupCardImage.alt = card.name;
  openPopup(popupImage);
};
cardImage.addEventListener('click', () => openPopupImg(card));

  return cardTemplate;
}

closeImageButton.addEventListener("click", function () {
  closePopup(popupImage);
});


function renderElement(block, item) {
  block.prepend(createCard(item))
};

photoCards.forEach(item => {
  renderElement(cards, item)
});

//сделать попап создания карточек//
function handleFormSubmitCard(evt) {
  evt.preventDefault();
  closePopup(popupAdd);

  renderElement(cards, {
    name: inputAddName.value,
    link: inputAddLink.value,
  })
  evt.target.reset();
};

// Добавляет слушатели в форму//
formAddCard.addEventListener("submit", handleFormSubmitCard);


