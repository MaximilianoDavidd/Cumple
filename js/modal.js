// funcion para mostral el modal despues de 4 segundos
function mostrarModal(){
    let modal = document.querySelector('.padre');
    modal.style.display = 'block'; // muestra el modal
}
 // llama a la funcion despues de 4 segundos
 setTimeout(mostrarModal, 4000);

