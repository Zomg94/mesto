const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElement = document.querySelector('.form')
let nameInput = document.querySelector('.form__input_type_name')
let aboutInput = document.querySelector('.form__input_type_about')

function openPopup() {
    popup.classList.remove('popup_hidden');
};

function closePopup() {
    popup.classList.add('popup_hidden');
};

function fillForm() {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileDescription.textContent;
};


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = aboutInput.value;
    popup.classList.add('popup_hidden');
}

editButton.addEventListener('click', function () {
    openPopup()
    fillForm()
});
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);