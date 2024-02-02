        // Inicializar el temporizador
        let temporizador;

        function iniciarTemporizador() {
            // Reiniciar el temporizador si ya estaba en marcha
            if (temporizador) {
                clearTimeout(temporizador);
            }

            // Establecer un temporizador para mostrar el modal después de 4 segundos
            temporizador = setTimeout(mostrarModal, 4000);
        }

        // Función para mostrar el modal
        function mostrarModal() {
            let modal = document.querySelector('.padre');
            modal.style.display = 'block'; // Muestra el modal
        }

        // Otras funciones del código...
        function enviarNombre() {
            // ...
        }

        function replayVideo() {
            // ...
        }