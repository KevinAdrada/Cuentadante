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

document.addEventListener('DOMContentLoaded', () => {
    
    const totalTrasladosTarjeta = 65; 
    const totalAsignaciones = 45;
    const totalAmbientes = 10;

    const trasladosMensuales = [15, 25, 10, 15];

    const ctx = document.getElementById('miGrafico').getContext('2d');
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: meses,
            datasets: [
                {
                    label: 'Traslados (Actividad Mensual)',
                    data: trasladosMensuales, 
                    borderColor: '#39A900',
                    backgroundColor: 'rgba(57, 169, 0, 0.1)',
                    borderWidth: 4,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 6
                },
                {
                    label: 'Asignaciones',
                    data: [10, 15, 8, 12], // Suma: 45 (Ajustado)
                    borderColor: '#00324D',
                    borderWidth: 4,
                    tension: 0.4,
                    pointRadius: 6
                },
                {
                    label: 'Ambientes',
                    data: [2, 3, 1, 4], // Suma: 10 (Ajustado)
                    borderColor: '#FFD700',
                    borderWidth: 4,
                    tension: 0.4,
                    pointRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        // Agregamos una nota en el tooltip para aclarar que es mensual
                        footer: (tooltipItems) => {
                            return 'Dato mensual. El total acumulado está en la tarjeta.';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Cantidad por Mes' },
                    ticks: { stepSize: 5 }
                }
            }
        }
    });
});