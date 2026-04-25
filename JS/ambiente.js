const avatar = document.getElementById('avatar');
const detailsContainer = document.querySelector('.details-container');
const modal = document.getElementById("miModal");
const btnOpen = document.querySelectorAll(".btn-open");
const btnClose = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modalTitle");


avatar.addEventListener('click', (e) => {
    e.stopPropagation();
    detailsContainer.classList.toggle('is-visible');
});

window.addEventListener('click', () => {
    if (detailsContainer.classList.contains('is-visible')) {
        detailsContainer.classList.remove('is-visible');
    }
});


btnOpen.forEach(btn => {
    btn.addEventListener("click", () => {
        const nombre = btn.getAttribute("nombre-ambiente");
        modalTitle.textContent = "Detalles de: " + nombre;
        modal.style.display = "flex";
    });
});

btnClose.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
