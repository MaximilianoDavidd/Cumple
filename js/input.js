
 // Obtener los valores de entrada del input
 document.addEventListener("DOMContentLoaded", () => {
    // Agregar un evento click al botón
    document.querySelector('.boton').addEventListener('click', () => {
        // Obtener el valor del campo de entrada
        const nombre = document.getElementById('nombre').value;

        // Nombres VIP
        const nombresVip = ['lucas', 'guadalupe', 'florencia', 'ludmila', 'geraldine', 'julieta'];

        // Verificar si se ha ingresado un nombre
        if (nombre.trim() !== "") {
            // Verificar si el nombre está en la lista VIP
            if (nombresVip.includes(nombre.toLowerCase())) {
                window.location.href = '../sections/vip.html';
            } else {
                window.location.href = '../sections/general.html';
            }
        } else {
            alert("Por favor, ingresa tu nombre antes de presionar el botón");
        }
    });
});