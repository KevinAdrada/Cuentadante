const avatar = document.getElementById('avatar');
const detailsContainer = document.querySelector('.details-container');
const modal = document.getElementById("miModal");
const btnCerrar = document.querySelector(".close-btn");
const botonesDetalles = document.querySelectorAll(".btn-asignar");

avatar.addEventListener('click', (e) => {
    e.stopPropagation();
    detailsContainer.classList.toggle('is-visible');
});

window.addEventListener('click', () => {
    if (detailsContainer.classList.contains('is-visible')) {
        detailsContainer.classList.remove('is-visible');
    }
});

botonesDetalles.forEach(boton => {
    boton.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});