const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const popupProfileCloseButton = document.querySelector('.popup__close-button_profile');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileFormElement = document.querySelector('.form_edit');
const nameInput = document.querySelector('.form__input_type_name');
const aboutInput = document.querySelector('.form__input_type_about');
const addButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_card');
const popupCardCloseButton = document.querySelector('.popup__close-button_card');
const cardNameInput = document.querySelector('.form__input_type_name-card');
const cardUrlInput = document.querySelector('.form__input_type_url');
const cardFormElement = document.querySelector('.form_add');
const cardName = document.querySelector('.elements__title');
const cardUrl = document.querySelector('.elements__photo');
const elements = document.querySelector('.elements__list');
const elementsCard = document.querySelector('#card').content;
const popupZoom = document.querySelector('.popup-zoom');
const popupZoomCloseButton = document.querySelector('.popup-zoom__close-button');
const popupZoomPhoto = document.querySelector('.popup-zoom__photo');
const popupZoomTitle = document.querySelector('.popup-zoom__title');
const closeButtons = document.querySelectorAll('.popup__close-button');

const closePopupEsc = (evt) => {
    if (evt.code === "Escape") {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

const closePopupOverlay = (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
        closePopup(evt.target);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    popup.addEventListener("mousedown", closePopupOverlay);
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
    popup.removeEventListener("mousedown", closePopupOverlay);
};

function createCard(photoName, photoUrl) {
    const cardElement = elementsCard.querySelector('.elements__card').cloneNode(true);
    const cardElementPhoto = cardElement.querySelector('.elements__photo');
    cardElementPhoto.src = photoUrl;
    cardElement.querySelector('.elements__title').textContent = photoName;
    cardElementPhoto.alt = photoName;

    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });

    cardElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
        evt.target.closest('.elements__card').remove();
    });

    cardElementPhoto.addEventListener('click', function () {
        popupZoomPhoto.src = photoUrl;
        popupZoomPhoto.alt = photoName;
        popupZoomTitle.textContent = photoName;
        openPopup(popupZoom);
    })
    return cardElement;
};

function submitEditProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = aboutInput.value;
    closePopup(popupProfile);
};

function submitAddCardForm(evt) {
    evt.preventDefault();
    elements.prepend(createCard(cardNameInput.value, cardUrlInput.value));
    evt.target.reset()
    updateSaveButton(popupCard, validationConfig);
    updateInputError(popupCard, validationConfig);
    closePopup(popupCard);
};

function fillInEditProfileFormInputs() {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileDescription.textContent;
    updateSaveButton(popupProfile, validationConfig);
    updateInputError(popupProfile, validationConfig);
};

const updateSaveButton = (popup, settings) => {
    const buttonElement = popup.querySelector(settings.submitButtonSelector);
    const inputList = Array.from(popup.querySelectorAll(settings.inputSelector));
    toggleButtonState(inputList, buttonElement, settings);
};

const updateInputError = (popup, settings) => {
    const formElement = popup.querySelector(settings.formSelector);
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement, settings);
    });
};

initialCards.forEach(function (item) {
    elements.append(createCard(item.name, item.link));
});

editButton.addEventListener('click', function () {
    fillInEditProfileFormInputs();
    openPopup(popupProfile);
});

addButton.addEventListener('click', function () {
    openPopup(popupCard);
});

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

profileFormElement.addEventListener('submit', submitEditProfileForm);

cardFormElement.addEventListener('submit', submitAddCardForm);