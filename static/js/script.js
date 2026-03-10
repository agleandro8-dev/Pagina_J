function mostrarSeccion(id) {
    const elemento = document.getElementById(id);

    // Toggle para ocultar y mostrar la sección al volver a darle clic
    if (elemento.classList.contains("oculto")) {
        elemento.classList.remove("oculto");
    } else {
        elemento.classList.add("oculto");
    }
}

// Inicializar componentes cuando carga la página
document.addEventListener("DOMContentLoaded", function () {
    // Inicializar tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Lógica del Modal del Video
    const videoModal = document.getElementById('videoModal');
    const videoCancion = document.getElementById('videoCancion');

    if (videoModal && videoCancion) {
        // Reproducir al abrir el modal
        videoModal.addEventListener('shown.bs.modal', function () {
            videoCancion.play().catch(error => {
                console.log("El navegador bloqueó el autoplay. El usuario debe darle clic.");
            });
        });

        // Pausar y reiniciar al cerrar el modal
        videoModal.addEventListener('hidden.bs.modal', function () {
            videoCancion.pause();
            videoCancion.currentTime = 0; // Opcional: regresa el video al inicio
        });
    }
});
