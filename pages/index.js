const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');

editButton.addEventListener('click', function () {
    popup.classList.remove('popup__hidden');
});

popupCloseButton.addEventListener('click', function () {
    popup.classList.add('popup__hidden');
});

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElement = document.querySelector('.form')
let nameInput = document.querySelector('.form__input_type_name')
let aboutInput = document.querySelector('.form__input_type_about')

nameInput.value = profileName.textContent;
aboutInput.value = profileDescription.textContent;

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = aboutInput.value;
    popup.classList.add('popup__hidden');
}

formElement.addEventListener('submit', formSubmitHandler);