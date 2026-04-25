const avatar = document.getElementById('avatar');
const detailsContainer = document.querySelector('.details-container');

avatar.addEventListener('click', (e) => {
    e.stopPropagation();
    detailsContainer.classList.toggle('is-visible');
});

window.addEventListener('click', () => {
    if (detailsContainer.classList.contains('is-visible')) {
        detailsContainer.classList.remove('is-visible');
    }
});