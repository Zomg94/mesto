const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileCloseButton = document.querySelector('.popup__close-button_profile');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let profileFormElement = document.querySelector('.form_edit')
let nameInput = document.querySelector('.form__input_type_name')
let aboutInput = document.querySelector('.form__input_type_about')

const addButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_card');
const popupCardCloseButton = document.querySelector('.popup__close-button_card');

const cardNameInput = document.querySelector('.form__input_type_name-card');
const cardUrlInput = document.querySelector('.form__input_type_url');
const cardFormElement = document.querySelector('.form_add')
const cardName = document.querySelector('.elements__title');
const cardUrl = document.querySelector('.elements__photo');
const elements = document.querySelector('.elements__list');
const elementsCard = document.querySelector('#card').content;
const popupZoom = document.querySelector('.popup-zoom');
const popupZoomCloseButton = document.querySelector('.popup-zoom__close-button');


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
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
    }
];

initialCards.forEach(function (item) {
    const cardElement = elementsCard.cloneNode(true);
    cardElement.querySelector('.elements__photo').src = item.link;
    cardElement.querySelector('.elements__photo').alt = item.name;
    cardElement.querySelector('.elements__title').textContent = item.name;
    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });
    const deleteButton = cardElement.querySelector('.elements__delete');
    deleteButton.addEventListener('click', function () {
        const cardItem = deleteButton.closest('.elements__card');
        cardItem.remove();
    });
    cardElement.querySelector('.elements__photo').addEventListener('click', function () {
        const popupZoomPhoto = document.querySelector('.popup-zoom__photo');
        const popupZoomTitle = document.querySelector('.popup-zoom__title');
        popupZoomPhoto.src = item.link;
        popupZoomPhoto.alt = item.name;
        popupZoomTitle.textContent = item.name;
        openZoom();
    });
    elements.append(cardElement);
});

function formSubmitHandlerCard(evt) {
    evt.preventDefault();
    const cardElement = elementsCard.cloneNode(true);
    cardElement.querySelector('.elements__photo').src = cardUrlInput.value;
    cardElement.querySelector('.elements__photo').alt = cardNameInput.value;
    cardElement.querySelector('.elements__title').textContent = cardNameInput.value;
    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });
    const deleteButton = cardElement.querySelector('.elements__delete');
    deleteButton.addEventListener('click', function () {
        const cardItem = deleteButton.closest('.elements__card');
        cardItem.remove();
    });
    cardElement.querySelector('.elements__photo').addEventListener('click', function () {
        const popupZoomPhoto = document.querySelector('.popup-zoom__photo');
        const popupZoomTitle = document.querySelector('.popup-zoom__title');
        popupZoomPhoto.src = cardUrlInput.value;
        popupZoomPhoto.alt = cardNameInput.value;
        popupZoomTitle.textContent = cardNameInput.value;
        openZoom();
    });
    elements.prepend(cardElement);
    closeCardPopup();
}

function openProfilePopup() {
    popupProfile.classList.remove('popup_hidden');
    fillForm();
};

function openZoom() {
    popupZoom.classList.remove('popup-zoom_hidden');

};

function closeZoom() {
    popupZoom.classList.add('popup-zoom_hidden');

};

function closeProfilePopup() {
    popupProfile.classList.add('popup_hidden');
};

function openCardPopup() {
    popupCard.classList.remove('popup_hidden');
};

function closeCardPopup() {
    popupCard.classList.add('popup_hidden');
    cardUrlInput.value = "";
    cardNameInput.value = "";
};

function fillForm() {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileDescription.textContent;
};


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = aboutInput.value;
    popupProfile.classList.add('popup_hidden');
};

editButton.addEventListener('click', openProfilePopup);
popupProfileCloseButton.addEventListener('click', closeProfilePopup);
profileFormElement.addEventListener('submit', formSubmitHandler);

addButton.addEventListener('click', openCardPopup);
popupCardCloseButton.addEventListener('click', closeCardPopup);

cardFormElement.addEventListener('submit', formSubmitHandlerCard);

popupZoomCloseButton.addEventListener('click', closeZoom);