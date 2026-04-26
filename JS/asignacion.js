// constantes para el avatar
const avatar = document.getElementById('avatar');
const detailsContainer = document.querySelector('.details-container');

//constantes para crear asignacion
const modal = document.getElementById("miModal");
const btnCerrar = document.querySelector(".close-btn");
const botonesDetalles = document.querySelectorAll(".btn-asignar");

//constantes para las jornadas
const botonesJornada = document.querySelectorAll('.btn-jornada');
const filasAsignacion = document.querySelectorAll('tbody tr[data-jornada]');
const modalTitle = document.getElementById('modalTitle');

// Menú del Avatar
avatar.addEventListener('click', (e) => {
    e.stopPropagation();
    detailsContainer.classList.toggle('is-visible');
});

// Cerrar menú al hacer clic fuera
window.addEventListener('click', () => {
    if (detailsContainer.classList.contains('is-visible')) {
        detailsContainer.classList.remove('is-visible');
    }
});

//filtracion por jornada
botonesJornada.forEach(boton => {
    boton.addEventListener('click', () => {
        const seleccion = boton.getAttribute('data-jornada');

        // Cambiar estado visual de los botones
        botonesJornada.forEach(b => b.classList.remove('active'));
        boton.classList.add('active');

        // Filtrar filas de la tabla
        filasAsignacion.forEach(fila => {
            fila.style.display = (fila.getAttribute('data-jornada') === seleccion) 
                ? 'table-row' 
                : 'none';
        });
    });
});

// Modal: Abrir y actualizar título según jornada activa
botonesDetalles.forEach(boton => {
    boton.addEventListener("click", () => {
        const jornadaActiva = document.querySelector('.btn-jornada.active').textContent;
        modalTitle.textContent = `Nueva Asignación - Jornada ${jornadaActiva}`;
        modal.style.display = "block";
    });
});

//Cerrar con la X
btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

//Cerrar al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});