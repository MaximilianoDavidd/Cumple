document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.boton').addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value.trim();
        const nombresVip = ['LUCAS', 'GUADALUPE', 'FLORENCIA', 'LUDMILA', 'GERALDINE', 'JULIETA'];

        if (nombre !== "") {
            const nombreMayuscula = nombre.toUpperCase();
            window.nombreIngresado = nombreMayuscula;

            if (nombresVip.includes(nombreMayuscula)) {
                window.location.href = '../sections/vip.html';
            } else {
                window.location.href = `./sections/general.html?nombre=${encodeURIComponent(nombreMayuscula)}`;
            }
        } else {
            alert("Por favor, ingresa tu nombre antes de presionar el botón");
        }
    });
});