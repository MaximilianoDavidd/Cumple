document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const nombreIngresado = params.get('nombre');

    if (nombreIngresado) {
        const saludo = document.createElement('h2');
        saludo.textContent = `¡Hola, ${decodeURIComponent("maxi")}!`;

        const tituloGeneral = document.getElementById('tituloGeneral');
        tituloGeneral.appendChild(saludo);
    }
});

