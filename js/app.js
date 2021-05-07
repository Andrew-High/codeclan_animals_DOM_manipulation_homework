document.addEventListener('DOMContentLoaded', () => {
    const newWhiskyForm = document.querySelector('#new-whisky-form');
    newWhiskyForm.addEventListener('submit', handleNewWhiskyFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewWhiskyFormSubmit = function (event) {
    event.preventDefault();

    const whiskyListItem = createWhiskyListItem(event.target);
    const whiskyList = document.querySelector('#whisky-list');
    whiskyList.appendChild(whiskyListItem)
};

const createWhiskyListItem = function (form) {
    const whiskyListItem = document.createElement('li');
    whiskyListItem.classList.add('whisky-list-item');
    whiskyListItem.appendChild(createWhiskyListItemHeading(form));
    whiskyListItem.appendChild(createWhiskyListItemDistillery(form));
    return whiskyListItem;
};

const createWhiskyListItemHeading = function (form) {
    const whisky = document.createElement('h3');
    whisky.textContent = `Whisky: ${form.whisky.value}`;
    return whisky;
}

const createWhiskyListItemDistillery = function (form) {
    const distillery = document.createElement('p');
    distillery.textContent = `Distillery: ${form.distillery.value}`;
    return distillery;
}

const handleDeleteAllClick = function (event) {
    const whiskyList = document.querySelector('#whisky-list');
    whiskyList.textContent = '';
}