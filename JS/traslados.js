//avatar y cerrar sesion
const avatar = document.getElementById('avatar');
const detailsContainer = document.querySelector('.details-container');

//mostar perfil y cerrar sesion
avatar.addEventListener('click', (e) => {
    e.stopPropagation();
    detailsContainer.classList.toggle('is-visible');
});

window.addEventListener('click', () => {
    if (detailsContainer.classList.contains('is-visible')) {
        detailsContainer.classList.remove('is-visible');
    }
});

//detalles del traslado
const modal = document.getElementById("miModal");
const btnCerrar = document.querySelector(".close-btn");
const botonesDetalles = document.querySelectorAll(".tabla button");

//crear nuevo traslado
const modalNuevo = document.getElementById("create-traslado");
const btnAbrirNuevo = document.getElementById("nuevo-traslado");
const closeNuevo = modalNuevo.querySelector(".close-btn");
    
    //mostrar detalles
    botonesDetalles.forEach(boton => {
        boton.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });
    btnCerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    //crear traslado
    btnAbrirNuevo.onclick = () => {
        modalNuevo.style.display = "flex";
    };

    closeNuevo.onclick = () => {
        modalNuevo.style.display = "none";
    };

    //cerrar ventana emergente
    window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalNuevo) {
        modalNuevo.style.display = "none";
    }
};